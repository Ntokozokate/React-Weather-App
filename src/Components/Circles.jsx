import React from "react";

const Circles = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full insert-0 h-screen w-full -z-10 overflow-hidden bg-gradient-to-r from-pink-600/40  to-purple-800/40 p-10 text-white transition-all duration-500 ease-in-out
"
    >
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-30 h-30 absolute  opacity-50 ml-10 mt-100 "></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-30 h-30 absolute  opacity-50 ml-150 mt-50 "></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-30 h-30 absolute  opacity-40 mt-100 ml-170 "></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-30 h-30 absolute  opacity-40 ml-50 "></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-60 h-60 absolute  opacity-40  ml-70 "></div>
      <div className="rounded-full bg-gradient-to-r from-green-400 to-sky-200 w-30 h-30 absolute  opacity-20 mt-140 "></div>
      <div className="rounded-full bg-gradient-to-r from-green-200 to-sky-400 w-100 h-100 absolute  opacity-60 mt-160 ml-80 "></div>
      <div className="rounded-full bg-gradient-to-r from-red-200 to-black w-10 h-10 absolute  opacity-34 ml-160 mt-10 "></div>
      <div className="rounded-full bg-gradient-to-r from-purple-200 to-sky-400 w-30 h-30 absolute  opacity-50 mt-140 ml-50 "></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-30 h-30 absolute  opacity-40 mt-100 ml-240 "></div>
      <div className="rounded-full bg-gradient-to-r from-green-200 to-white w-30 h-30 absolute  opacity-40 mt-40 ml-260 "></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white w-30 h-30 absolute  opacity-30 pt-1 "></div>
    </div>
  );
};

export default Circles;
