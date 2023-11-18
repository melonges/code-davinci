import { EnvTypes } from "./env";

export interface IConfigService {
  get(key: EnvTypes): string;
}
