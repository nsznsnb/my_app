import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const WordCategory = async () => {
  await prisma.wordCategory.createMany({
    data: [
      {
        id: "001",
        name: "旅行",
      },
      {
        id: "002",
        name: "学問",
      },
      {
        id: "003",
        name: "政治",
      },
      {
        id: "004",
        name: "日常",
      },
      {
        id: "005",
        name: "DUO3.0",
      },
      {
        id: "999",
        name: "その他",
      },
    ],
  });
};
