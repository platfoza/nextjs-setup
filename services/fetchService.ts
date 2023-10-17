type MethodType = 'GET' | 'POST' | 'DELETE';

export const fetchData = async (baseUrl: string, method: MethodType, body: any = null, headersCustom: any = null) => {
  const headers = headersCustom ?
    {
      "Content-Type": "application/json",
      ...headersCustom
    }
    : {"Content-Type": "application/json" };

  const res = await fetch(baseUrl, {
    method: method,
    headers,
    body: body ? JSON.stringify(body) : null
  });

  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
}
