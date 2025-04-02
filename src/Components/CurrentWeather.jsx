import { useEffect, useState } from "react";
import axios from "axios";

const CurrentWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({ dataFetched: false }); //Removed the dataFetched useState and automatically put it inside the weatherData-----(Act as a key)
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  useEffect(() => {
    if (!city) return;
    const apiKey = "3b1f6a3cf426c8fo47d42200c9911tba";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData({
          dataFetched: true, // ✅ Corrected this
          temperature: response.data.temperature.current,
          city: response.data.city,
          time: new Date(response.data.time * 1000),
          date: new Date(response.data.time * 1000),
          description: response.data.condition.description,
          icon: response.data.condition.icon_url, // ✅ Use API icon
          humidity: response.data.temperature.humidity,
        });
      })
      .catch((error) => console.error("Error fetching weather", error));
  }, [city]);

  // Show Loading Screen First
  if (!weatherData.dataFetched) {
    //const hours = weatherData.date.getHours().toString().padStart(2, "0");
    //const minutes = weatherData.date.getMinutes().toString().padStart(2, "0");
    // const formattedTime = `${hours}:${minutes}`;

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
        <p className="text-7xl font-bold text-gray-600">Loading...</p>
      </div>
    );
  }
  //creating the toggle function
  const toggleTemperature = () => {
    setIsFahrenheit(!isFahrenheit);
  };
  //the conert the temperature
  const displayedTemperature = isFahrenheit
    ? (weatherData.temperature * 9) / 5 + 32 // Celsius to Fahrenheit
    : weatherData.temperature;

  //  Then if its working Render Weather Data After Fetching
  return (
    <div className="max-w-3xl mx-auto p-2 shadow-sm bg-gray-100/50 dark:bg-gray-800 rounded-xl border-3 border-gray-200/70 dark:border-gray-700">
      <div className="flex justify-between gap-20 items-center">
        <h1 className="text-lg font-bold text-gray-600 p-2">
          {weatherData.city}
        </h1>
        <ul className="pt-2">
          <li className="font-bold text-center text-2xl">
            {weatherData.date
              ? weatherData.date.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
              : "Loading..."}
          </li>
          <li className="font-bold text-center">
            {weatherData.date.toDateString()}
          </li>
        </ul>
        <button
          onClick={toggleTemperature}
          className="text-sm font-bold text-sky-500 bg-transparent border-gray-200/60 border border-2 shadow-sm px-3 py-1 rounded-md hover:bg-sky-200"
        >
          {isFahrenheit ? "to-Celsius" : "Fahrenheit"}
        </button>
        {/* <p className="text-sm font-bold text-sky-500 border border-2 shadow-sm border-gray-200/60 px-3 rounded-md">
          Celsius
          <span className="text-gray-500 mr-1">
            <i className="fa-solid fa-circle-chevron-down text-sky-600"></i>
          </span>
        </p> */}
      </div>
      <div className="flex items-center space-x-4 justify-center">
        <img className="w-60 h-60" src={weatherData.icon} alt="Weather Icon" />
        <h1 className="text-7xl font-bold text-gray-600">
          {Math.round(displayedTemperature)}
          <span className="text-2xl relative bottom-8 font-bold">
            {isFahrenheit ? "°F" : "°C"}
          </span>
        </h1>
      </div>
      <p className="text-sm text-center font-bold text-gray-600 uppercase">
        {weatherData.description}
      </p>
    </div>
  );
};

export default CurrentWeather;
