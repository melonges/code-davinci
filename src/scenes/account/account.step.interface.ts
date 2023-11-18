import { MiddlewareFn } from "telegraf";
import { IBotContext } from "../../context/context.interface";

export type AccountStep = (
  ctx: IBotContext,
  nextStepIndex?: number,
) => Promise<
  [question: MiddlewareFn<IBotContext>, validator: MiddlewareFn<IBotContext>]
>;
