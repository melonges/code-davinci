-- CreateEnum
CREATE TYPE "ProgrammingLanguage" AS ENUM ('Rust', 'CPP', 'Java', 'Python', 'JavaScript', 'CSharp', 'Go', 'TypeScript', 'Swift', 'Kotlin', 'Ruby', 'PHP', 'HTML', 'CSS', 'Shell', 'Scala', 'ObjectiveC', 'MATLAB', 'R', 'Groovy', 'Dart', 'Lua', 'Julia', 'Perl', 'Haskel', 'Solidity', 'Tact', 'FanC');

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "matchId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "initiatorId" INTEGER NOT NULL,
    "responderId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "liked" BOOLEAN NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Code" (
    "id" SERIAL NOT NULL,
    "language" "ProgrammingLanguage" NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Location_userId_key" ON "Location"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_initiatorId_key" ON "Match"("initiatorId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_responderId_key" ON "Match"("responderId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_initiatorId_fkey" FOREIGN KEY ("initiatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_responderId_fkey" FOREIGN KEY ("responderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Code" ADD CONSTRAINT "Code_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
