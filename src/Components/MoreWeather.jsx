import React from "react";

const MoreWeather = () => {
  return (
    <div className="grid grid-cols-3 gap-1  max-w-3xl mx-auto gap-5 bg-transparent">
      <div className="px-7  shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i className="fa-solid fa-wind"></i> Wind Speed
        </p>
        <h1 className="text-xl font-bold p-1">10km/h</h1>
      </div>
      <div className="px-7 shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i className="fa-solid fa-droplet"></i> Humidiy
        </p>
        <h1 className="text-xl font-bold p-1">34%</h1>
      </div>
      <div className="px-7 items-center  justify-center shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i className="fa-solid fa-cloud-rain"></i>Precipitaion
        </p>
        <h1 className="text-xl font-bold p-1">10mm</h1>
      </div>
      <div className="px-7 shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i className="fa-solid fa-wind"></i> Wind Speed
        </p>
        <h1 className="text-xl font-bold p-1">10km/h</h1>
      </div>
      <div className="px-7 shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i className="fa-solid fa-droplet"></i> Humidiy
        </p>
        <h1 className="text-xl font-bold p-1">34%</h1>
      </div>
      <div className="px-7 shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i className="fa-solid fa-cloud-rain"></i>Precipitaion
        </p>
        <h1 className="text-xl font-bold p-1">10mm</h1>
      </div>
    </div>
  );
};

export default MoreWeather;
