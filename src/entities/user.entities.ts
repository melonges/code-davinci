import type { Code } from "./code.entities";

export interface UserEntity {
  id: number;
  name: string;
  gender: boolean;
  birthYear: number;
  location: string;
  code: Code;
}
