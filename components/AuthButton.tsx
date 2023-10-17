'use client'

import Link from "next/link";
import { deleteCookie } from "../services/cookieService";
import { useRouter } from "next/navigation";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  cookieStore: RequestCookie | undefined;
  setCookie: Dispatch<SetStateAction<RequestCookie | undefined>>
}

export const AuthButton = ({ cookieStore, setCookie }: IProps): JSX.Element => {
  const router = useRouter();

  const onclick = async () => {
    try {
      await deleteCookie({ cookieName: 'token' });
      setCookie(undefined);
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
