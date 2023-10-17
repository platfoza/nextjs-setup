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
    <>
      <button onClick={() => setCount(1)}>Client Error</button>
    </>
  )
}
