import FutureForcast from "./FutureForcast";
import Header from "./Header";
import TodaysHighlight from "./TodaysHighlight";

export default function Right({ handleUnitGroup, measure, unitGroup }) {
  return (
    <div className="md:w-2/3 bg-gray-100 dark:bg-black2 py-5 px-5 lg:px-10 md:overflow-y-scroll">
      <div className="text-black dark:text-white space-y-16">
        <Header handleUnitGroup={handleUnitGroup} unitGroup={unitGroup} />
        <FutureForcast />
        <TodaysHighlight measure={measure} />
      </div>
    </div>
  );
}
