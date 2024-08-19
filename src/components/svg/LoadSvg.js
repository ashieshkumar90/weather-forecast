import SvgPartlyCloudyDay from "./SvgPartlyCloudyDay";
import SvgCloudy from "./SvgCloudy";
import {
  CLEARDAYICON,
  CLEARNIGHTICON,
  RAINICON,
  PARTLYCLOUDYDAYICON,
  PARTLYCLOUDYNIGHTICON,
} from "../../utils/constants";

import SvgClearDay from "./SvgClearDay";
import SvgClearNight from "./SvgClearNight";
import SvgPartlyCloudyNight from "./SvgPartlyCloudyNight";
import SvgRain from "./SvgRain";

export default function LoadSvg({ icon, iconSize }) {
  switch (icon) {
    case CLEARDAYICON:
      return <SvgClearDay iconSize={iconSize} />;

    case CLEARNIGHTICON:
      return <SvgClearNight iconSize={iconSize} />;

    case RAINICON:
      return <SvgRain iconSize={iconSize} />;

    case PARTLYCLOUDYDAYICON:
      return <SvgPartlyCloudyDay iconSize={iconSize} />;

    case PARTLYCLOUDYNIGHTICON:
      return <SvgPartlyCloudyNight iconSize={iconSize} />;

    default: {
      return <SvgCloudy iconSize={iconSize} />;
    }
  }
}
