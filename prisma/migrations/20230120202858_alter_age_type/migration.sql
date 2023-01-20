-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_academys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL
);
INSERT INTO "new_academys" ("age", "id", "name") SELECT "age", "id", "name" FROM "academys";
DROP TABLE "academys";
ALTER TABLE "new_academys" RENAME TO "academys";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
