const apiKey = "3b1f6a3cf426c8fo47d42200c9911tba";
const apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

function App() {
  return (
    <div className="  dark:bg-gray-800 p-5">
      <div className="px-7 shadow-sm bg-gray-200/40 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i class="fa-solid fa-sun"></i>Sunrise/Sunset
        </p>
        <h1 className="text-2xl font-bold p-1">06:00</h1>
      </div>

      <div className="px-7 shadow-sm bg-gray-200/40 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i class="fa-solid fa-glasses"></i>UV Index
        </p>
        <h1 className="text-2xl font-bold p-1">Low</h1>
      </div>

      <div className="px-7 shadow-sm bg-gray-200/40 dark:bg-gray-800 rounded-lg border border-3 border-gray-200/70 dark:border-gray-700">
        <p>
          <i class="fa-regular fa-cloud-rain"></i> Precipitaion
        </p>
        <h1 className="text-2xl font-bold p-1">10mm</h1>
      </div>
    </div>
  );
}
