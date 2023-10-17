import { deleteData, getData, postData } from "./fetchService";

export const setCookie = async (data) => {
  await postData('http://localhost:3000/api/cookie', data)
}

export const deleteCookie = async (data) => {
  await deleteData('http://localhost:3000/api/cookie', data)
}

export const getCookieToken = async () => {
  return await getData('http://localhost:3000/api/cookie/token')
}