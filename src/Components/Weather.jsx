import React from "react";

const WeatherApp = () => {
  return (
    <div className=" ">
      <div className="absolute top-0 left-0  w-full h-full flex items-center justify-center  ">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-lg">
          <h1 className="text-5xl font-bold  text-gray-800 mb-4">Harare</h1>
          <ul>
            <li>Wednesday, 02:00</li>
            <li>Mostly Sunny</li>
          </ul>
          <p className="text-lg text-gray-600">
            Enter City to get the weather updates!
          </p>
          <div className="mt-6 flex gap-4">
            <input
              type="text"
              placeholder="Enter city..."
              className=" px-4 py-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <button className="px-8  bg-blue-500 hover:bg-blue-700 text-white  rounded-lg">
              Get Weather
            </button>
          </div>
        </div>
      </div>
      <footer>
        <small className="text-center text-white-200">
          This project was coded by <a href="">Ntokozo Kate Moyo </a> and is{" "}
          <a href="">Open sourced on GitHub</a>
        </small>
      </footer>
    </div>
  );
};

export default WeatherApp;
