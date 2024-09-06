import { useState, useEffect } from "react";
import "./App.css";
import useFetchWeather from "./utils/useFetchWeather";
import Home from "./components/Home";
import { ApiContext } from "./Contexts";
import toast, { Toaster } from "react-hot-toast";
import Shimmer from "./components/Shimmer";
import useDebouncedSearch from "./utils/useDebouncedSearch";

function App() {
  const [unitGroup, setUnitGroup] = useState("metric");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedSearch(search);

  const [data, isLoading, weatherError, cityError, latLonError] =
    useFetchWeather(unitGroup, debouncedSearch);
  const [measure, setMeasure] = useState({
    temprature: "C",
    distance: "km",
  });

  useEffect(() => {
    if (weatherError.status === 400) {
      toast.error("Invalid City Name");
    } else if (weatherError.status === 401) {
      toast.error("Something went wrong!!");
    }
    if (latLonError) {
      toast.error("Please Allow Location Access ");
    }
  }, [weatherError, cityError, latLonError]);

  const handleUnitGroup = (unit) => {
    const unitValue = unit === "celcius" ? "metric" : "us";
    const metricMeasure = {
      temprature: "C",
      distance: "km",
    };
    const usMeasure = {
      temprature: "F",
      distance: "mi",
    };
    const measure = unit === "celcius" ? metricMeasure : usMeasure;
    setUnitGroup(unitValue);
    setMeasure(measure);
  };

  const handleSearch = (searchInput) => {
    setSearch(searchInput);
  };

  if (isLoading)
    return (
      <>
        <Shimmer />
        <Toaster position="top-right" reverseOrder={false} />
      </>
    );

  return (
    <ApiContext.Provider value={data}>
      <Home
        handleUnitGroup={handleUnitGroup}
        measure={measure}
        unitGroup={unitGroup}
        handleSearch={handleSearch}
      />
      {/* <button onClick={notify}>Click</button> */}
      <Toaster position="top-right" reverseOrder={false} />
    </ApiContext.Provider>
  );
}

export default App;
