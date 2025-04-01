import React from "react";

const Header = () => {
  return (
    <header className=" relative flex max-w-full justify-between items-center p-2 shadow-sm bg-gray-100/50 dark:bg-gray-800  rounded-lg border border-2 border-gray-100/50 dark:border-gray-700   ">
      <div>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/783/original/weather-log.jpg?1743366949"
          alt="Logo"
          className="h-6"
        />
      </div>
      <div className="flex items-center space-x-2  border border-gray-500/50 pl-2  rounded-lg">
        <form
          action=""
          id="city-input-form"
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            aria-label=""
            placeholder="Enter your city... "
            className="w-50 p-1 text-sm  bg-transparent border-gray-400 border-b-1"
            id="city-input"
          />
        </form>
        <button
          type="submit"
          className="bg-gray-600/50  px-2  py-1  rounded-r-lg "
        >
          <i className="fa-solid fa-magnifying-glass text-gray-100"></i>
        </button>
      </div>
      <div>
        <small className="bg-blue-900 px-3 py-2 text-gray-200 rounded-sm cursor-pointer hover:bg-blue-500 ">
          <span className="mr-1"> 🌚</span> DarkMode
        </small>
      </div>
    </header>
  );
};
export default Header;
