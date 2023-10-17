import { getToken } from "../index";
import { serverErrorWrapper } from "../../../../services/helpersApi/errorWraper";

export async function GET(request: Request, response: Response) {
  return serverErrorWrapper(getToken, request, response);
}