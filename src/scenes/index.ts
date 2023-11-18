import { Scenes } from "telegraf";
import { createAccountScene } from "./create-account.scenes";
export const stage = new Scenes.Stage([createAccountScene]);
