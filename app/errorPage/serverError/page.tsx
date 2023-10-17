import { errorWrapper } from "../../../services/helpersApi/errorWraper";
import { notFound } from "next/navigation";
import { getArticle } from "../../../services/dataServerService";

const getDataPage = async () => {
  return await getArticle('123');
}

export default async function ErrorPage() {
  const data = await errorWrapper(getDataPage);

  if(!data) {
    notFound();
  }
  return (
    <></>
  )
}