import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const word = async () => {
  await prisma.word.createMany({
    data: [
      {
        title: "respect",
        meaning: "(気持・意見など)を尊重する",
        example: "We must respect the will of the indivual.",
        categoryId: "005",
      },
      {
        title: "will",
        meaning: "意志",
        example: "We must respect the will of the indivual.",
        categoryId: "005",
      },
      {
        title: "individual",
        meaning: "個人",
        example: "We must respect the will of the indivual.",
        categoryId: "005",
      },
      {
        title: "Take it easy.",
        meaning: "気楽にやれ",
        example:
          "Take it easy. I can assure you that everything will turn out fine.",
        categoryId: "005",
      },
      {
        title: "assure A (that) ~",
        meaning: "Aに~を確約する",
        example:
          "Take it easy. I can assure you that everything will turn out fine.",
        categoryId: "005",
      },
      {
        title: "turn out (to be)",
        meaning: "(最終的に)～という結果になる",
        example:
          "Take it easy. I can assure you that everything will turn out fine.",
        categoryId: "005",
      },
    ],
  });
};
