import { logger } from "../../../logger";

export async function postError(request: Request, response: Response) {
  const body = await request.json();
  const { error } = body;
  logger.info(`client error ${error.message} ${error.stack}`);
  return Response.json({ status: 200 });
}