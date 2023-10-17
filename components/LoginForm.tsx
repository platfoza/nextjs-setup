'use client';
import { useState } from "react";
import { setCookie } from "../services/cookieService";
import { useRouter } from "next/navigation";

const initState = {
  email: '',
  password: ''
}

export const LoginForm = () => {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState(initState);

  const submitForm = async () => {
    try{
      await setCookie({ cookie: {
        name: 'token',
        value: `${JSON.stringify(loginForm)}`,
        options: {secure: true, 'max-age': 3600}
      }});
      router.push('/profile')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <input
        className="border"
        type="email"
        value={loginForm.email}
        onChange={
          (e) =>
            setLoginForm(prev => ({...prev, email: e.target.value}))
        }
      />
      <input
        className="border"
        type="password"
        value={loginForm.password}
        onChange={
          (e) =>
            setLoginForm(prev => ({...prev, password: e.target.value}))
        }
      />
      <button className="bg-[#000000] text-white" onClick={submitForm}>Login</button>
    </div>
  )
}
