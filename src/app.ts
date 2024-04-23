import { Telegraf, session } from "telegraf";
import type { IConfigService } from "./config/config.interface";
import { ConfigService as ConfigService } from "./config/config.service";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import { stage } from "./scenes";
import type { IBotContext } from "./context/context.interface";
import { actionMachine } from "./action";
import { Container, inject, injectable } from "inversify";
import "reflect-metadata";

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});

@injectable()
class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];

  constructor(@inject(ConfigService) private configService: ConfigService) {
    this.bot = new Telegraf(this.configService.get("TOKEN"));
    this.bot.use(session());
    this.bot.use(actionMachine.middleware());
    this.bot.use(stage.middleware());
  }

  init() {
    this.commands = [new StartCommand(this.bot)];
    this.commands.forEach((command) => command.handle());
    this.bot.launch();
    console.log("Bot started");
  }
}

const bot = container.get(Bot).init();
