import { ErrorComponent } from "../../components/ErrorComponent";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <h1 className="font-bold mb-[10px] uppercase">Error page</h1>
      <ErrorComponent/>
      <Link href="errorPage/serverError">Server Error Page</Link>
    </>
  )
}
