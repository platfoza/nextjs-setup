import { logger } from "../../../logger";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { error } = body;
  logger.info(`client error ${error.message} ${error.stack}`);
  return NextResponse.json({ status: 200 })
}
