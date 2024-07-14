import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="loader.svg" alt="loading..." />
    </div>
  );
};

export default Loading;
