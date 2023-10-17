import { logger } from "../../logger";

interface IError {
  statusText?: string;
  message?: string;
  status?: number;
  stack?: string;
  path?: string;
  method?: string;
}

export const handleErrorService = (error: IError) => {
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