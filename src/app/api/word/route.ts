import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  const data = await prisma.word.findMany();
  // GET /api/users リクエストの処理
  return NextResponse.json(data);
}
