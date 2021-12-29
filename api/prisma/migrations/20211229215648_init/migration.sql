-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "hp" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_name_key" ON "Card"("name");
