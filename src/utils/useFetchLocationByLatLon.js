import { useState, useEffect } from "react";
import useFetchCityName from "./useFetchCityName";

export default function useFetchLocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [latLonError, setLatLonError] = useState("");
  const [cityName, cityError] = useFetchCityName(
    location.latitude,
    location.longitude
  );

  // console.log(cityName, cityError);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLatLonError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(successFn, errorFn);
  }, []);

  const successFn = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  const errorFn = () => {
    setLatLonError("Unable to find the location");
  };

  return [cityName, cityError, latLonError];
}
