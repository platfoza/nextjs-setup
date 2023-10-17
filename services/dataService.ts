import { fetchData } from "./fetchService";

export const getArticles = async () => {
  return await fetchData('https://api.spaceflightnewsapi.net/v4/articles', 'GET');
}

export const getArticle = async (id: string) => {
  return await fetchData(`https://api.spaceflightnewsapi.net/v4/aricles/${id}`, 'GET');
}

export const postForm = async (data: URLSearchParams) => {
  return await fetchData('http://localhost:3000/api/form', 'POST', data);
}
