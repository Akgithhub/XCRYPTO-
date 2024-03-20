import React, { useState } from "react";
import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";

function Error({ message }) {
  let refresh = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="h-[80vh] flex justify-center items-center flex-col">
        <button
          onClick={refresh}
          className="bg-blue-700 text-white font-medium text-[20px] rounded-xl p-[15px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-arrow-down"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </div>

      <Alert
        status="error"
        position={"fixed"}
        bottom={"4"}
        left={"50%"}
        transform={"translateX(-50%)"}
        w={"container.lg"}
      >
        <AlertIcon />
        {message}
      </Alert>
    </>
  );
}

export default Error;
