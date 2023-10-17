import { getData } from "./fetchService";

export const getArticles = async () => {
  return await getData('https://api.spaceflightnewsapi.net/v4/articles');
}
