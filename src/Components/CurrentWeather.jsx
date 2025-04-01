import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const CurrentWeather = () => {
  //empty object  because we don't know what the data actually is, and that empty object will store all of the information we need
  const [weatherData, setWeatherData] = useState({ dataFetched: false }); //Removed the dataFetched useState and automatically put it inside the weatherData-----(Act as a key)
  useEffect(() => {
    const apiKey = "3b1f6a3cf426c8fo47d42200c9911tba";
    let city = "Harare";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData({
          setDataFetched: true,
          temperature: response.data.temperature.current,
          //windSpeed: response.data.main.wind,
          time: response.data.time,
          city: response.data.city,
          date: "Monday 24 Feb 2026",
          description: response.data.condition.description,
          icon: response.data.condition.icon_url,
          humidity: response.data.temperature.humidity,
        });
      })
      .catch((error) => console.error("Error fetching weather", error));
  }, []);

  //   function handleResponse(response) {
  //     console.log(response.data);
  //     ;

  if (!weatherData.dataFetched) {
    return (
      <div className="  max-w-3xl mx-auto  relative justify-between  p-2 shadow-sm bg-gray-100/50 dark:bg-gray-800 mx-5 my-5  rounded-xl border border-3 border-gray-200/70 dark:border-gray-700 ">
        <div className=" flex justify-between gap-20 items-center max-w-full">
          <h1 className="text-3xl font-bold text-gray-600 p-2 ">
            {weatherData.city}
          </h1>
          <ul className=" p-2">
            <li className="font-bold">{weatherData.time}</li>
            <li className="font-bold opacity-65">
              {" "}
              <small>{weatherData.date}</small>
            </li>
          </ul>
          <p className=" text-sm font-bold text-sky-500 border border-2 shadow-sm border-gray-200/60 px-3 rounded-md">
            {" "}
            Fahrenheit{" "}
            <span className="text-gray-500 mr-1">
              {" "}
              <i className="fa-solid fa-circle-chevron-down text-sky-600  "></i>{" "}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-4 justify-center">
          <h1 className="text-7xl font-bold text-gray-700/60 ">
            {Math.round(weatherData.temperature)}
            <span className="text-2xl relative bottom-8 font-bold ">℃</span>
          </h1>
          <img
            className="w-50 h-50px"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/795/original/f5f61ad8eae60541eae8c61182190db2-removebg-preview.png?17433856295"
            alt="Sun"
          />
        </div>
        <p className="text-sm text-center font-bold text-gray-600 uppercase">
          {weatherData.description}
        </p>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <p className="text-7xl font-bold text-gray-600">Loading...</p>
    </div>
  );
};

export default CurrentWeather;
