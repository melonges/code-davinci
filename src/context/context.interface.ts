import { Context, Scenes } from "telegraf";
import { WizardSessionData } from "telegraf/typings/scenes";
import { UserEntity } from "../entities/user.entities";
import { Message, Update } from "telegraf/typings/core/types/typegram";
import { ActionMachineContext } from "telegraf-extended";

interface SessionData extends WizardSessionData {
  user: UserEntity;
}

interface Session extends Scenes.WizardSession<SessionData> {}

export interface IBotContext extends Context {
  session: Session & SessionData;
  scene: Scenes.SceneContextScene<IBotContext, SessionData>;
  wizard: Scenes.WizardContextWizard<IBotContext>;
  message: Update.New & Update.NonChannel & Message.TextMessage;
  action: ActionMachineContext;
}
