import { errorWrapper } from "../../../services/helpersApi/errorWraper";
import { getArticle } from "../../../services/dataService";

const getDataPage = async () => {
  return await getArticle('123');
}

export default async function ErrorPage() {
  const data = await errorWrapper(getDataPage);

  return (
    <></>
  )
}