import { serverErrorWrapper } from "../../../services/helpersApi/errorWraper";
import { postError } from "./index";

export async function POST(request: Request, response: Response) {
  return serverErrorWrapper(postError, request, response);
}
