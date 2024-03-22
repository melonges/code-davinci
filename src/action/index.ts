import { ActionMachine } from "telegraf-extended";
import { IBotContext } from "../context/context.interface";

export const actionMachine = new ActionMachine<IBotContext>();
