import { postData } from "./fetchService";

export const sentError = async (body) => {
  await postData('api/error', body)
}