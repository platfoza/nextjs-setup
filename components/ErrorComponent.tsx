"use client";

import { useEffect, useState } from "react";

export const ErrorComponent = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if(count > 0) {
      throw Error('Error')
    }
  }, [count])

  return (
    <button
      className="bg-[#000000] text-white px-[20px] py-[2px] mb-[10px] min-w-[173px]"
      onClick={() => setCount(1)}>
      Client Error
    </button>
  )
}
