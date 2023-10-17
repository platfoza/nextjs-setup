import { postForm } from "../../services/dataService";
import { errorWrapper } from "../../services/helpersApi/errorWraper";

const getData = async (searchParams: URLSearchParams) => {
  return await postForm(searchParams);
}

export default async function FormPage(props) {
  let error, text;
  if (!!Object.keys(props.searchParams)?.length) {
    const { data } = await errorWrapper(
      async () => await getData(props.searchParams)
    );
    if(data) {
      text = data.thing;
    } else {
      error = 'Error'
    }
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {text && <div>{text}</div>}
      <form className="flex flex-col gap-[10px]">
        <input className="border" type="text" name="thing" required />
        <button type="submit" className="bg-[#000000] text-white">Submit</button>
      </form>
    </div>
  );
}
