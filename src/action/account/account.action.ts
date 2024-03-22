import { Markup } from "telegraf";
import { Action } from "telegraf-extended";
import { IBotContext } from "../../context/context.interface";
import { UserEntity } from "../../entities/user.entities";

export const getUserNameAction = new Action<
  IBotContext,
  { user: UserEntity }
>();

getUserNameAction.send((ctx) => ctx.reply("What's your name?"));

getUserNameAction.filter((ctx) => {
  // TODO: ADD VALIDATE throw ERROR

  if (!ctx.message.text) {
    ctx.reply("Enter text");
    return false;
  }

  if (ctx.message.text.length < 2 && ctx.message.text.length > 50) {
    ctx.reply("Nickname must be between 2 and 50 characters");
    return false;
  }

  return true;
});

getUserNameAction.result((ctx) => {
  ctx.action.state.user.name = ctx.message.text;
});

export const getUserGenderAction = new Action<
  IBotContext,
  { user: UserEntity }
>();

getUserGenderAction.send((ctx) => {
  ctx.reply(
    "What's your gender?",
    Markup.keyboard(["Male", "Female"]).resize()
  );
});

getUserGenderAction.filter((ctx) => {
  const gender = ctx.message.text;

  if (!gender || (gender !== "Male" && gender !== "Female")) {
    ctx.reply("Please enter a valid gender");
    return false;
  }

  return true;
});

getUserGenderAction.result((ctx) => {
  ctx.action.state.user.gender = ctx.message.text === "Male";
});
