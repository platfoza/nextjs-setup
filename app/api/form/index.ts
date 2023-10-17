export async function submitForm(request: Request, response: Response) {
  const data = await request.json();
  return Response.json({data})
}