import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const { cookie } = body;
  const { name, value, options } = cookie;
  const newOptions = {
    path: '/',
    ...options
  };

  if (newOptions.expires instanceof Date) {
    newOptions.expires = newOptions.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in newOptions) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  cookies().set(name, value, newOptions);
  return Response.json({ status: 200 })
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { cookieName } = body;
  cookies().delete(cookieName);
  return Response.json({ status: 200 })
}
