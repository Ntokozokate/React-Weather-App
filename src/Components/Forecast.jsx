import React from "react";

const Forecast = () => {
  return (
    <div className="p-2 max-w-3xl mx-auto shadow-sm bg-gray-100/50 dark:bg-gray-800  rounded-xl border border-3 border-gray-200/70 dark:border-gray-700">
      <h1 className="text-3xl font-extrabold text-gray-600/80 p-2 mb-6">
        Weakly Forecast
      </h1>
      <ul>
        <li className="flex gap-7 text-2xl font-bold">
          <p className="p-6   ">Day</p>
          <h1 className="p-6  underline decoration-pink-500 text-lg">
            {""} Highest Temp{""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500 text-lg">
            {""} Lowest Tem
          </h1>
        </li>

        <li className="flex gap-10 text-lg font-bold">
          <p className="p-6   ">
            <i className="fa-solid fa-cloud-sun text-3xl"></i>Sun
          </p>
          <h1 className="p-6  underline decoration-pink-500 ">
            <i className="fa-solid fa-arrow-up  "> </i> {""} 35 ℃ {""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500">
            <i className="fa-solid fa-arrow-down"></i>
            {""} 16℃
          </h1>
        </li>
        <li className="flex gap-10 text-lg font-bold">
          <p className="p-6    ">
            <i className="fa-solid fa-cloud-sun text-3xl"></i>Mon
          </p>
          <h1 className="p-6  underline decoration-pink-500 ">
            <i className="fa-solid fa-arrow-up  "> </i> {""} 35 ℃ {""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500">
            <i className="fa-solid fa-arrow-down"></i>
            {""} 16℃
          </h1>
        </li>
        <li className="flex gap-10 text-lg font-bold">
          <p className="p-6   ">
            <i className="fa-solid fa-cloud-sun text-3xl"></i>Tue
          </p>
          <h1 className="p-6  underline decoration-pink-500 ">
            <i className="fa-solid fa-arrow-up  "> </i> {""} 35 ℃ {""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500">
            <i className="fa-solid fa-arrow-down"></i>
            {""} 16℃
          </h1>
        </li>

        <li className="flex gap-10 text-lg font-bold">
          <p className="p-6  ">
            <i className="fa-solid fa-cloud-sun text-3xl"></i>Wed
          </p>
          <h1 className="p-6  underline decoration-pink-500 ">
            <i className="fa-solid fa-arrow-up  "> </i> {""} 35 ℃ {""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500">
            <i className="fa-solid fa-arrow-down"></i>
            {""} 16℃
          </h1>
        </li>

        <li className="flex gap-10 text-lg font-bold">
          <p className="p-6  ">
            <i className="fa-solid fa-cloud-sun text-3xl"></i>Thu
          </p>
          <h1 className="p-6  underline decoration-pink-500 ">
            <i className="fa-solid fa-arrow-up  "> </i> {""} 35 ℃ {""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500">
            <i className="fa-solid fa-arrow-down"></i>
            {""} 16℃
          </h1>
        </li>

        <li className="flex gap-10 text-lg font-bold">
          <p className="p-6   ">
            <i className="fa-solid fa-cloud-sun text-3xl"></i>Fri
          </p>
          <h1 className="p-6  underline decoration-pink-500 ">
            <i className="fa-solid fa-arrow-up  "> </i> {""} 35 ℃ {""}{" "}
          </h1>
          <h1 className="p-6 underline decoration-sky-500">
            <i className="fa-solid fa-arrow-down"></i>
            {""} 16℃
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Forecast;
