import { ErrorComponent } from "../../components/ErrorComponent";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <h1 className="font-bold mb-[10px] uppercase mb-[30px]">Error page</h1>
      <ErrorComponent/>
      <Link
        className="bg-[#000000] text-white px-[20px] py-[2px]"
        href="errorPage/serverError">
        Server Error Page
      </Link>
    </>
  )
}
