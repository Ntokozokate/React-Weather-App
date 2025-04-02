import { useState } from "react";

import "./App.css";
import Circles from "./Components/Circles";
import Header from "./Components/Header";
import CurrentWeather from "./Components/CurrentWeather";
import MoreWeather from "./Components/MoreWeather";
import Description from "./Components/Description";
import Forecast from "./Components/Forecast";

function App() {
  const [city, setCity] = useState("Bulawayo");
  return (
    <div className="relative min-h-screen text-gray-700 dark:bg-gray-800">
      <div className="absolute inset-0 z-[-1]">
        <Circles />
      </div>
      <Header setCity={setCity} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 ">
        <div className="col-span-1 md:col-span-3 space-y-6">
          <CurrentWeather city={city} />
          <MoreWeather />
          <Description />
        </div>
        <div className="col-span-1 md:col-span-2 mt-3">
          <Forecast />
        </div>
      </div>
      <div className="p-5">
        <small>
          Build with ❤️ by{" "}
          <a href="" className="text-blue-500 hover:text-blue-200">
            Ntokozo Kate Moyo
          </a>
        </small>{" "}
        <span>
          <a href="">
            <button className="bg-blue-900 text-pink-200 p-1 rounded-sm hover:bg-blue-500 ">
              More Projects{" "}
            </button>
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
