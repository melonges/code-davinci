import { type DotenvParseOutput, config } from "dotenv";
import type { IConfigService } from "./config.interface";
import type { EnvTypes } from "./env";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ConfigServce implements IConfigService {
  private config: DotenvParseOutput;
  constructor() {
    const { error, parsed } = config();
    if (error) {
      throw new Error(`${error.name}: ${error.message}`);
    }
    if (!parsed) {
      throw new Error("parsing error");
    }

    this.config = parsed;
  }
  get(key: EnvTypes): string {
    const env = this.config[key];
    if (!env) {
      throw new Error(`key ${key} is not found`);
    }
    return env;
  }
}
