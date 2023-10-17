export const getData = async (baseUrl, headersCustom = null) => {
    const headers = headersCustom ?
      {
        "Content-Type": "application/json",
        ...headersCustom
      }
      : {"Content-Type": "application/json" };

    const res = await fetch(baseUrl, {
      method: 'GET',
      headers,
    });

  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
}

export const postData = async (baseUrl, body, headersCustom = null) => {
  const headers = headersCustom ?
    {
      "Content-Type": "application/json",
      ...headersCustom
    }
    : {"Content-Type": "application/json" };

  const res = await fetch(baseUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
}

export const deleteData = async (baseUrl, body, headersCustom = null) => {
  const headers = headersCustom ?
    {
      "Content-Type": "application/json",
      ...headersCustom
    }
    : {"Content-Type": "application/json" };

  const res = await fetch(baseUrl, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
}