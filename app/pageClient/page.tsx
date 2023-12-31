"use client"
import { useEffect, useState } from "react";
import { getArticles } from "../../services/dataService";

export default function ClientPage() {
  const [data, setData] = useState<any []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      const data = await getArticles();
      setData(data.results);
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getData();
  }, []);

  return (
    <>
      <h1 className="font-bold mb-[10px] uppercase">Client Page</h1>
      {isLoading ?
        <div>Loading...</div> : (
          <div className="flex flex-wrap gap-[10px]">
            {data && data.map(({ id, title, summary }) => (
              <div key={id} className="flex flex-col">
                <p>{title}</p>
                <p>{summary}</p>
              </div>
            ))}
          </div>
        )
      }
    </>
  )
}