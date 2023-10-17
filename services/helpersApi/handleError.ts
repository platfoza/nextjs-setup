import { logger } from "../../logger";

export const handleErrorService = (error) => {
  const dataError = {
    message:  error.message ?? error.statusText,
    status: error.status,
    stack: error.stack,
    path: error.path,
    method: error.method
  }
  logger.info(`handleErrorService ${dataError.message} ${dataError.stack}`);
  return dataError;
}