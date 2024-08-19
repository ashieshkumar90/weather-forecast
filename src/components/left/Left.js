import { useContext } from "react";
import { ApiContext } from "../../Contexts";
import { WEEKDAYS as weekDays } from "../../utils/constants";
import { MONTHS as months } from "../../utils/constants";
import Search from "./Search";
import LoadSvg from "../svg/LoadSvg";
import { LARGEICON as largeIcon } from "../../utils/constants";
import useFormatTimeInAMPM from "../../utils/useFormatTimeInAMPM";

export default function Left({ measure, handleSearch }) {
  const apiRes = useContext(ApiContext);
  const {
    // address,
    resolvedAddress,
    currentConditions: { temp, datetimeEpoch, conditions, icon },
  } = apiRes;

  const date = new Date(datetimeEpoch * 1000);

  const day = weekDays[date.getDay()];
  const month = months[date.getMonth()];
  const shortDate = date.getDate();
  const time = useFormatTimeInAMPM(date);

  return (
    <div className="md:w-1/3 p-3 md:py-5 md:px-5 lg:px-10 md:rounded-r-3xl md:rounded-s-3xl bg-white dark:bg-black">
      <Search handleSearch={handleSearch} />
      <div className="flex flex-col py-2 md:py-8 space-y-4 px-4 lg:px-12">
        <div className="flex md:flex-col justify-between mt-5 md:mt-0">
          <LoadSvg icon={icon} iconSize={largeIcon} />

          <div className="flex text-[4rem] md:text-[6rem] font-extralight">
            <h2>{temp}</h2>
            <p className="text-[3rem] md:text-[4rem] md:leading-normal">
              °{/* */}
              {measure.temprature}
            </p>
          </div>
        </div>
        <div className="grid lg:flex justify-between">
          <h1 className="text-xl font-bold">
            {/* {address.charAt(0).toUpperCase() + address.substring(1)} */}
            {resolvedAddress}
          </h1>
          <div className="flex">
            <h2 className="text-lg font-medium">{day}, </h2>
            <p className="text-lg font-thin">
              {month} {shortDate}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <h3 className="flex-1">{conditions}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="flex-1">{time}</h3>
        </div>
      </div>
    </div>
  );
}
