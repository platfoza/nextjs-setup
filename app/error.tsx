"use client";

import { useEffect } from "react";
import { sentError } from "../services/errorService";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    sentError({ error: {
        message: error.message,
        stack: error.stack
      }});
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-[10px]">OOOOPS!!!</h1>
      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}