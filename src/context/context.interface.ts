import { Context, Scenes } from "telegraf";
import type { WizardSessionData } from "telegraf/scenes";
import type { UserEntity } from "../entities/user.entities";
import type { Message, Update } from "telegraf/types";
import type { ActionMachineContext } from "telegraf-extended";

interface SessionData extends WizardSessionData {
  user: UserEntity;
}

interface Session extends Scenes.WizardSession<SessionData> {}

export interface IBotContext extends Context {
  session: Session;
  scene: Scenes.SceneContextScene<IBotContext, SessionData>;
  wizard: Scenes.WizardContextWizard<IBotContext>;
  message: Update.New & Update.NonChannel & Message.TextMessage;
  action: ActionMachineContext;
}
