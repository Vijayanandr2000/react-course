import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl font-semibold">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      <p className="mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
