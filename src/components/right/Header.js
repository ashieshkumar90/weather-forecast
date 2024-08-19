import { useState, useEffect } from "react";

export default function Header({ handleUnitGroup, unitGroup }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  const celciusClass =
    unitGroup === "metric"
      ? "bg-black text-white dark:bg-white dark:text-black"
      : "bg-white text-black dark:bg-black dark:text-white";
  const fahrenheitClass =
    unitGroup === "us"
      ? "bg-black text-white dark:bg-white dark:text-black"
      : "bg-white text-black dark:bg-black dark:text-white";

  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="sm:flex justify-between items-center">
      <div className="flex flex-1 space-x-8 items-center">
        <p className="text-2xl font-black">WeatherNow</p>
      </div>
      <div className="flex items-center space-x-8 justify-between mt-5 sm:mt-0">
        <div className="flex items-center space-x-4">
          <button
            className={`${celciusClass} hover:scale-110 rounded-full p-1 h-8 w-10 shadow-md flex justify-center items-center`}
            onClick={() => handleUnitGroup("celcius")}
          >
            °C
          </button>
          <button
            className={`${fahrenheitClass} hover:scale-110 rounded-full p-1 h-8 w-10 shadow-md flex justify-center items-center`}
            onClick={() => handleUnitGroup("fahrenheit")}
          >
            °F
          </button>
        </div>
        <button className="" onClick={handleDarkMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="w-6 h-6 hidden dark:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="w-6 h-6 dark:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
