import { ActionMachine } from "telegraf-extended";
import type { IBotContext } from "../context/context.interface";
import {
  getUserGenderAction,
  getUserNameAction,
} from "./account/account.action";
import { ActionTypes } from "./action.types";

export const actionMachine = new ActionMachine<IBotContext>();

actionMachine.connect(ActionTypes.GET_USER_NAME, getUserNameAction);
actionMachine.connect(ActionTypes.GET_USER_GENDER, getUserGenderAction);
