import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="font-bold mb-[10px] uppercase">Server Error</h1>

      <Link href="/" className="bg-[#000000] text-white px-[20px] py-[10px]">
        Home page
      </Link>
    </div>
  );
}