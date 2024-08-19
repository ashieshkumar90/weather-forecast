import { useContext } from "react";
import { SMALLICON as smallIcon } from "../../utils/constants";
import { ApiContext } from "../../Contexts";
import { WEEKDAYS } from "../../utils/constants";
import LoadSvg from "../svg/LoadSvg";

export default function FutureForcast() {
  const { days } = useContext(ApiContext);
  const nextSixDays = days.slice(1, 7);

  const futureDaysTile = nextSixDays.map((value) => {
    const { datetimeEpoch, temp, icon } = value;
    const date = new Date(datetimeEpoch * 1000);
    const day = WEEKDAYS[date.getDay()];
    const shortDay = day.slice(0, 3);

    return (
      <div
        key={datetimeEpoch}
        className="flex flex-col space-y-2 m-2 bg-white dark:bg-black shadow-lg py-6 px-9 rounded-lg justify-center items-center transition-all hover:translate-y-5"
      >
        <p>{shortDay}</p>
        <LoadSvg icon={icon} iconSize={smallIcon} />
        <div className="flex items-center">
          <p className="font-medium">
            {temp}
            {/* */}°
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-between overflow-x-scroll w-screen md:w-full p-2 md:p-6 pl-0">
      {futureDaysTile}
    </div>
  );
}
