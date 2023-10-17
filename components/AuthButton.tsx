'use client'

import Link from "next/link";
import { deleteCookie } from "../services/cookieService";
import { useRouter } from "next/navigation";

export const AuthButton = ({ cookieStore, setCookie }) => {
  const router = useRouter();

  const onclick = async () => {
    try {
      await deleteCookie({ cookieName: 'token' });
      setCookie(null);
      router.replace('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return cookieStore ? (
      <>
        <Link href="/profile">Profile</Link>
        <button onClick={onclick}>LogOut</button>
      </>
    )
    : <Link href="/login">Login</Link>
}
