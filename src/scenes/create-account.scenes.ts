import { Markup, Scenes } from "telegraf";
import { SceneTypes } from "./types.scenes";
import { validateNickname } from "../validators/nickname.validator";
import { UserEntity } from "../entities/user.entities";
import { IBotContext } from "../context/context.interface";
import { ProgrammingLanguage } from "../entities/language.entities";
import { UserRepository } from "../repositories/user.repository";

export const createAccountScene = new Scenes.BaseScene<IBotContext>(
  "SCENARIO_TYPE_SCENE_ID",
);

createAccountScene.enter(async (ctx) => {
  ctx.reply("What's your name?");
  createAccountScene.on("message", async (ctx) => {
    console.log(ctx.message);
  });
});

// createAccountScene.drop("text", async (ctx) => {});

// export const createAccountScene = new Scenes.WizardScene<IBotContext>(
//   SceneTypes.CREATE_ACCOUNT,
//   async (ctx) => {
//     //@ts-ignore
//     (ctx.wizard.state.userData as UserEntity) = { id: ctx.from?.id };
//     ctx.reply("What's your name?");
//     return ctx.wizard.next();
//   },
//   async (ctx) => {
//     // @ts-ignore
//     const userName = ctx.message?.text as string | undefined;
//     if (!userName) {
//       ctx.reply("Please enter a valid name");
//       return;
//     }
//     try {
//       validateNickname(userName);
//       //@ts-ignore
//       (ctx.wizard.state.userData as UserEntity).name = userName;
//     } catch (error) {
//       ctx.reply(
//         error instanceof Error ? error.message : "Something went wrong",
//       );
//       return;
//     }
//     ctx.reply(
//       "What's your gender?",
//       Markup.keyboard(["Male", "Female"]).resize(),
//     );
//     return ctx.wizard.next();
//   },
//   async (ctx) => {
//     //@ts-ignore
//     const gender = ctx.message?.text as string | undefined;
//     if (!gender || (gender !== "Male" && gender !== "Female")) {
//       ctx.reply("Please enter a valid gender");
//       return;
//     } else {
//       //@ts-ignore
//       (ctx.wizard.state.userData as UserEntity).gender = gender === "Male";
//       ctx.reply("What's your birth year?");
//       return ctx.wizard.next();
//     }
//   },
//   async (ctx) => {
//     //@ts-ignore
//     const birthYear = ctx.message?.text as string | undefined;
//     if (!birthYear) {
//       ctx.reply("Please enter a valid birth year");
//       return;
//     }
//     //@ts-ignore
//     (ctx.wizard.state.userData as UserEntity).birthYear = Number(birthYear);
//
//     ctx.reply("Write your code example");
//     return ctx.wizard.next();
//   },
//   // async (ctx) => {
//   //   console.log(ctx);
//   //   ctx.reply(
//   //     "Share your location",
//   //     Markup.keyboard([Markup.button.locationRequest("Location")]).resize(),
//   //   );
//   //   // (ctx.wizard.state.userData as UserEntity).gender =
//   //   //   ctx.message?.text === "Male";
//   //   return ctx.wizard.next();
//   // },
//   // (ctx) => {
//   //   //@ts-ignore
//   //   console.log(ctx?.message?.location);
//   // },
//   //
//   //
//   //
//   async (ctx) => {
//     //@ts-ignore
//     const code = ctx.message?.text as string | undefined;
//     if (!code) {
//       ctx.reply("Please enter a valid code example");
//       return;
//     }
//     //@ts-ignore
//     (ctx.wizard.state.userData as UserEntity).code = {
//       content: code,
//       language: ProgrammingLanguage.CPP,
//     };
//     await new UserRepository().createUser(
//       //@ts-ignore
//       ctx.wizard.state.userData as UserEntity,
//     );
//     ctx.reply("Your account has been created successfully");
//   },
// );
//
