import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookie = cookies().get('token');
  return Response.json({ cookie })
}