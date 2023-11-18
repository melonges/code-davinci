import { Command } from "./command.class";
import { SceneTypes } from "../scenes/types.scenes";
export class StartCommand extends Command {
  handle(): void {
    this.bot.start((ctx) => {
      ctx.scene.enter(SceneTypes.CREATE_ACCOUNT);
    });
  }
}
