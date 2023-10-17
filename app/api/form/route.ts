import { submitForm } from "./index";
import { serverErrorWrapper } from "../../../services/helpersApi/errorWraper";

export async function POST(request: Request, response: Response) {
  return serverErrorWrapper(submitForm, request, response);
}
