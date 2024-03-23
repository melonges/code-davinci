import { Telegraf, session } from "telegraf";
import type { IConfigService } from "./config/config.interface";
import { ConfigServce } from "./config/config.service";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import { stage } from "./scenes";
import type { IBotContext } from "./context/context.interface";
import { actionMachine } from "./action";

class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];

  constructor(private readonly configServce: IConfigService) {
    this.bot = new Telegraf(this.configServce.get("TOKEN"));
    this.bot.use(session());
    this.bot.use(actionMachine.middleware());
    this.bot.use(stage.middleware());
  }

  init() {
    this.commands = [new StartCommand(this.bot)];
    this.commands.forEach((command) => command.handle());
    this.bot.launch(() => console.log("Bot started"));
  }
}

const bot = new Bot(new ConfigServce());
bot.init();
