import { fetchData } from "./fetchService";

interface IError {
  message: string;
  stack: string | undefined;
}

export const sentError = async (body: { error: IError }) => {
  await fetchData('api/error', 'POST', body);
}