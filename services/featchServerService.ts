import { handleErrorService } from "./helpersApi/handleError";

export const getServerData = async (baseUrl, headersCustom = null) => {
  const headers = headersCustom ?
    {
      "Content-Type": "application/json",
      ...headersCustom
    }
    : {"Content-Type": "application/json" };

  // const a = headers.filter(el => el.id === 12);

  const res = await fetch(baseUrl, {
    method: 'GET',
    headers,
  });

  if (!res.ok) {
    const dataError = handleErrorService(res);
    // This will activate the closest `error.js` Error Boundary
    throw new Error(dataError.message);
  }
  return res.json();
}
