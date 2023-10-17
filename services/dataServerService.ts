import { getServerData } from "./featchServerService";

export const getArticles = async () => {
  return await getServerData('https://api.spaceflightnewsapi.net/v4/articles');
}

export const getArticle = async (id: string) => {
  return await getServerData(`https://api.spaceflightnewsapi.net/v4/aricles/${id}`);
}