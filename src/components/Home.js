import "./style.css";
import Left from "./left/Left";
import Right from "./right/Right";
import SvgIconDefinition from "./svg/SvgIconDefinition";

export default function Home({
  handleUnitGroup,
  measure,
  unitGroup,
  handleSearch,
}) {
  return (
    <div id="__next" data-reactroot="">
      <div className="min-h-screen bg-gray-100 dark:bg-black2 dark:text-white">
        <main className="md:flex max-w-screen-2xl mx-auto overflow-x-hidden">
          <SvgIconDefinition />
          <Left measure={measure} handleSearch={handleSearch} />
          <Right
            handleUnitGroup={handleUnitGroup}
            measure={measure}
            unitGroup={unitGroup}
          />
        </main>
      </div>
    </div>
  );
}
