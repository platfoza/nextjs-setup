'use client';
import Link from "next/link";
import { AuthButton } from "./AuthButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCookieToken } from "../services/cookieService";

export const Header = ({ cookieStore }) => {
  const pathname = usePathname()
  const [cookie, setCookie] = useState(cookieStore);

  const getData = async () => {
    const { cookie } = await getCookieToken();
    setCookie(cookie.value);
  }

  useEffect(() => {
    if(pathname === '/profile' && !cookie) {
      getData();
    }
  }, [pathname])

  return (
    <header className="flex justify-center items-center gap-[30px] h-[70px] bg-[#000000] text-white">
      <a href="/">Home A</a>
      <Link href="/">Home Link</Link>
      <Link href="/pageClient">Client Page</Link>
      <Link href="/errorPage">Error</Link>
      <AuthButton cookieStore={cookie} setCookie={setCookie}/>
    </header>
  )
}
