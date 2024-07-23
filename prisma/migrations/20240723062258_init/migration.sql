-- CreateTable
CREATE TABLE "Device" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "addr" TEXT NOT NULL,
    "enable" BOOLEAN NOT NULL DEFAULT true,
    "createTime" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" DATETIME NOT NULL,
    "level" INTEGER NOT NULL,
    "deviceId" INTEGER NOT NULL,
    "feature" TEXT NOT NULL,
    CONSTRAINT "Log_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
