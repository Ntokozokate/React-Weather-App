import "./App.css";
import Circles from "./Circles";

import WeatherApp from "./Components/Weather";
function App() {
  return (
    <div className="  min-h-screen">
      <h1>My Weather App</h1>
      <div>
        <Circles />
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
