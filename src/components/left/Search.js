import { useState } from "react";

export default function Search({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex space-x-2 lg:space-x-4 items-center justify-center bg-gray-100 dark:bg-black2 p-2 rounded-full mt-3 md:mt-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
        className="h-5 w-5 text-black dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <form onSubmit={(e) => handleSearch(e, searchValue)}>
        <input
          type="text"
          className="outline-none bg-transparent flex-1 md:w-full"
          placeholder="Search for place"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </form>
      <button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    </div>
  );
}
