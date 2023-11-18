/*
  Warnings:

  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthYear` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthday",
ADD COLUMN     "birthYear" INTEGER NOT NULL;
