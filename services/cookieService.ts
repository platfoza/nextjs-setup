import { fetchData } from "./fetchService";

interface ICookie {
  name: string;
  value: string;
  options: { secure: boolean, 'max-age': number }
}

export const setCookie = async (data: { cookie: ICookie }) => {
  await fetchData('http://localhost:3000/api/cookie', 'POST', data);
}

export const deleteCookie = async (data: { cookieName: string }) => {
  await fetchData('http://localhost:3000/api/cookie', 'DELETE', data);
}

export const getCookieToken = async () => {
  return await fetchData('http://localhost:3000/api/cookie/token', 'GET');
}