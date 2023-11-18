import { Context, Scenes } from "telegraf";
import { WizardSessionData } from "telegraf/typings/scenes";
import { UserEntity } from "../entities/user.entities";
interface SessionData extends WizardSessionData {
  user: UserEntity;
}

interface Session extends Scenes.WizardSession<SessionData> { }

export interface IBotContext extends Context {
  session: Session;
  scene: Scenes.SceneContextScene<IBotContext, SessionData>;
  wizard: Scenes.WizardContextWizard<IBotContext>;
}
