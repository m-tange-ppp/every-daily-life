/*
  Warnings:

  - You are about to drop the column `auth_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[visible_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `visible_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropIndex
DROP INDEX "User_auth_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "auth_id",
ADD COLUMN     "visible_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_visible_id_key" ON "User"("visible_id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("visible_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("visible_id") ON DELETE RESTRICT ON UPDATE CASCADE;
