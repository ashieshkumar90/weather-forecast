import SvgWindStatus from "../svg/SvgWindStatus";
import { ApiContext } from "../../Contexts";
import { useContext } from "react";
import useFormatTimeInAMPM from "../../utils/useFormatTimeInAMPM";

export default function TodaysHighlight({ measure }) {
  const ApiRes = useContext(ApiContext);
  const {
    currentConditions: {
      uvindex,
      windspeed,
      sunriseEpoch,
      sunsetEpoch,
      humidity,
      visibility,
      winddir,
    },
  } = ApiRes;

  const sunRise = new Date(sunriseEpoch * 1000);
  const sunSet = new Date(sunsetEpoch * 1000);

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-bold">Today's Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center space-y-4">
          <p className="text-gray-400 w-full">UV Index</p>
          <img src="./uv.png" className="w-20" alt="" />
          <div className="flex justify-between items-center space-x-2">
            <p className="text-gray-200 dark:text-white/60 text-md">
              {uvindex - 2}
            </p>
            <p className="text-gray-300 dark:text-white/80 text-xl">
              {uvindex - 1}
            </p>
            <p className="text-2xl font-bold">{uvindex}</p>
            <p className="text-gray-300 dark:text-white/80 text-xl">
              {uvindex + 1}
            </p>
            <p className="text-gray-200 dark:text-white/60 text-md">
              {uvindex + 2}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center space-y-4 relative">
          <p className="text-gray-400 w-full">Wind Staus</p>
          <SvgWindStatus />
          <div className="flex items-end">
            <p className="text-[4rem] font-light">{windspeed}</p>
            <div className="mb-5">{measure.distance}/h</div>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center space-y-6">
          <p className="text-gray-400 w-full">Sunrise &amp; Sunset</p>
          <div className="flex space-x-4">
            <figure>
              <svg className="icon h-9 w-9" viewBox="0 0 100 100">
                <use xlinkHref="#sun" />
              </svg>
            </figure>
            <div>
              <p>{useFormatTimeInAMPM(sunRise)}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <figure>
              <svg className="icon h-9 w-9" viewBox="0 0 100 100">
                <use xlinkHref="#moon" x={-15} />
                <use
                  xlinkHref="#star"
                  x={42}
                  y={30}
                  className="stars animated infinite flash"
                />
                <use
                  xlinkHref="#star"
                  x={61}
                  y={32}
                  className="stars animated infinite flash delay-1s"
                />
                <use
                  xlinkHref="#star"
                  x={55}
                  y={50}
                  className="stars animated infinite flash delay-2s"
                />
              </svg>
            </figure>
            <div>
              <p>{useFormatTimeInAMPM(sunSet)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-4 h-56 flex flex-col space-y-4">
          <p className="text-gray-400">Humidity</p>
          <div className="flex items-top">
            <p className="text-[4rem] font-light">{humidity}</p>
            <div className="mt-5">%</div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
            <p className="w-full">No data</p>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-4 h-56 flex flex-col space-y-4">
          <p className="text-gray-400">Visibility</p>
          <div className="flex items-top">
            <p className="text-[4rem] font-light">{visibility}</p>
            <div className="mt-5">{measure.distance}</div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
            <p className="w-full">No data</p>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-2xl shadow-sm p-4 h-56 flex flex-col space-y-4">
          <p className="text-gray-400">Air Quality</p>
          <div className="flex items-top">
            <p className="text-[4rem] font-light">{winddir}</p>
            <div className="mt-5" />
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
            <p className="w-full">No data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
