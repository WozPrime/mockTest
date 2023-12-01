/*
  Warnings:

  - You are about to drop the column `identity_type` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `googleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetToken` on the `User` table. All the data in the column will be lost.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "identity_type",
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "googleId",
DROP COLUMN "resetToken",
ALTER COLUMN "password" SET NOT NULL;
