import { cookies } from "next/headers";

export default function Profile() {
  const cookieStore = cookies().get('token');
  return (
    <>
      <h1 className="font-bold mb-[10px] uppercase">Profile</h1>
      <div>{cookieStore.value}</div>
    </>
  )
}
