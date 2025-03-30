import React from "react";

const Circles = () => {
  return (
    <div className="relative z-0 h-screen overflow-hidden ">
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white-400 w-30 h-30 absolute  opacity-75 ml-10 mt-100 rotate-x-15 -rotate-y-30"></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white-400 w-30 h-30 absolute  opacity-75 ml-150 mt-50 -rotate-y-30"></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white-400 w-30 h-30 absolute  opacity-75 mt-100 ml-170 -rotate-y-30"></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white-200 w-30 h-30 absolute  opacity-75 ml-50 -rotate-y-30"></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white-400 w-60 h-60 absolute  opacity-75  ml-70 -rotate-y-45"></div>
      <div className="rounded-full bg-gradient-to-r from-green-400 to-sky-200 w-30 h-30 absolute  opacity-50 mt-140 rotate-x-50 rotate-z-45"></div>
      <div className="rounded-full bg-gradient-to-r from-green-200 to-sky-400 w-100 h-100 absolute  opacity-30 mt-160 ml-80 animate-float"></div>
      <div className="rounded-full bg-gradient-to-r from-red-200 to-black-400 w-10 h-10 absolute  opacity-75 ml-100 mt-20 rotate-x-50 rotate-z-45"></div>
      <div className="rounded-full bg-gradient-to-r from-purple-200 to-sky-400 w-30 h-30 absolute  opacity-30 mt-140 ml-50 rotate-x-50 rotate-z-45"></div>
      <div className="rounded-full bg-gradient-to-r from-blue-200 to-white-400 w-30 h-30 absolute  opacity-75 pt-1 rotate-x-50 rotate-z-45"></div>
    </div>
  );
};

export default Circles;
