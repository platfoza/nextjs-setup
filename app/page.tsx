import './globals.css';
import { notFound } from "next/navigation";
import { errorWrapper } from "../services/helpersApi/errorWraper";
import { getArticles } from "../services/dataService";

interface IData {
  results: {
    id: string;
    title: string;
    summary: string;
  }[]
}
const getDataPage = async (): Promise<IData> => {
  return await getArticles();
}

export default async function Home() {
 const data: IData = await errorWrapper(getDataPage);

  if(!data) {
    notFound();
  }

  return (
    <>
      <h1 className="font-bold mb-[10px] uppercase">Home page</h1>
      <div className="flex flex-wrap gap-[10px]">
        {data.results.map(({ id, title, summary }) => (
          <div key={id} className="flex flex-col">
            <p>{title}</p>
            <p>{summary}</p>
          </div>
        ))}
      </div>
    </>
  )
}
