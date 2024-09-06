import { useState, useEffect } from "react";
import { LOCATIONCONVERTERAPIENDPOINT as apiEndpoint } from "./constants";

export default function useFetchCityName(latitude, longitude) {
  const [cityName, setCityName] = useState("");
  const [cityError, setCityError] = useState(null);

  useEffect(() => {
    if (latitude && longitude) fetchCityName();
  }, [latitude, longitude]);

  const fetchCityName = () => {
    // https://us1.locationiq.com/v1/reverse?key=${key}&lat=28.6385374&lon=77.3587472&format=json&
    const url = `${apiEndpoint}lat=${latitude}&lon=${longitude}&format=json&`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(
              JSON.stringify({
                status: response.status,
                message: data.error,
              })
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        const {
          address: { suburb, city, state, country },
        } = data;
        setCityName(`${suburb}, ${city}, ${state}, ${country}`);
        setCityError(null);
      })
      .catch((error) => {
        const errorObject = JSON.parse(error.message);
        setCityError(errorObject);
        setCityName("");
      });
  };

  return [cityName, cityError];
}
