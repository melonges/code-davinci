import { ProgrammingLanguage } from "../entities/language.entities";
import type { UserEntity } from "../entities/user.entities";
import { prisma } from "./prisma.client";
export class UserRepository {
  private client = prisma;

  async createUser(user: UserEntity) {
    this.client.user.create({
      data: {
        id: user.id,
        name: user.name,
        gender: user.gender,
        birthYear: user.birthYear,
        Code: {
          create: {
            content: user.code.content,
            language: ProgrammingLanguage[
              user.code.language
            ] as keyof typeof ProgrammingLanguage,
          },
        },
      },
    });
  }

  async getUser(id: number) {
    return this.client.user.findUnique({
      where: {
        id,
      },
    });
  }
}
