import { logger } from "../../logger";
import { redirect } from "next/navigation";
import { NextApiResponse } from 'next'

export const errorWrapper = async (callback: () => any) => {
  try {
    return await callback();
  } catch (error: any) {
    logger.info(`errorWrapper ${error.statusText ?? error.message}  ${error.stack}`);
    redirect('/serverError');
  }
}

export const serverErrorWrapper = async (
  endpoint: Function,
  req: Request,
  res: Response
) => {
  try {
    return await endpoint(req, res);
  } catch (error) {
    const dataError = {
      message:  error.message ?? error.statusText,
      status: error.status,
      stack: error.stack,
      path: error.path,
      method: error.method
    }
    logger.info(`Global Error ${dataError.message} ${dataError.stack}`);
    return NextApiResponse.status(500).send({ error: 'Server error' });
  }
}