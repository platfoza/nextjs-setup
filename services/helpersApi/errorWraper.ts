import { logger } from "../../logger";
import { redirect } from "next/navigation";

export const errorWrapper = async (callback) => {
  try {
    return await callback();
  } catch (error) {
    logger.info(`errorWrapper ${error.statusText ?? error.message}  ${error.stack}`);
    redirect('/500');
  }
}