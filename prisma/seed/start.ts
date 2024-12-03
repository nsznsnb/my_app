import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { word } from "./word";
import { WordCategory } from "./word_category";

async function main() {
  await prisma.word.deleteMany();
  await prisma.wordCategory.deleteMany();
  await WordCategory();
  await word();
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
