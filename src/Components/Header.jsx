import React, { useState } from "react";

const Header = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      setCity(input); // Update city in App.js
      setInput(""); //clear input field after submiting
    }
  };

  return (
    <header className=" relative flex max-w-full justify-between items-center p-2 shadow-sm bg-gray-100/50 dark:bg-gray-800  rounded-lg border border-2 border-gray-100/50 dark:border-gray-700   ">
      <div>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/161/783/original/weather-log.jpg?1743366949"
          alt="Logo"
          className="h-6"
        />
      </div>
      <div className="flex items-center space-x-2  border border-gray-500/50 pl-2  rounded-xl">
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter city... "
            className="w-60 p-1 text-sm  bg-transparent border-gray-400 border-b-1"
            value={input}
            onChange={(e) => setInput(e.target.value)} // updating the input state here
            id="city-input"
          />

          <button
            type="submit"
            className="bg-sky-600  px-2  py-1  rounded-r-lg hover:bg-sky-500 "
          >
            <i className="fa-solid fa-magnifying-glass text-gray-100"></i>
          </button>
        </form>
      </div>
      <div>
        <small className="bg-blue-900 px-3 py-2 text-pink-200 rounded-sm cursor-pointer hover:bg-sky-400 ">
          <span className="mr-1"> 🌚</span> DarkMode
        </small>
      </div>
    </header>
  );
};
export default Header;
