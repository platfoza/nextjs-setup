import { serverErrorWrapper } from "../../../services/helpersApi/errorWraper";
import { deleteCookie, setCookie } from "./index";

export async function POST(request: Request, response: Response) {
  return serverErrorWrapper(setCookie, request, response);
}

export async function DELETE(request: Request, response: Response) {
  return serverErrorWrapper(deleteCookie, request, response);
}
