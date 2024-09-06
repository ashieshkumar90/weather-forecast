import { useState, useEffect } from "react";
import { WEATHERAPIENDPOINT as apiEndpoint } from "./constants";
import { WEATHERAPIKEY } from "./constants";
import useFetchLocationByLatLon from "./useFetchLocationByLatLon";

const useFetchWeather = (unitGroup, searchLocation) => {
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ghaziabad?unitGroup=metric&key=${WEATHERAPIKEY}&contentType=json`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherError, setWeatherError] = useState({});
  const [cityName, cityError, latLonError] = useFetchLocationByLatLon();

  useEffect(() => {
    if (searchLocation !== "") {
      fetchWeatherData(searchLocation);
    } else if (cityName) {
      fetchWeatherData(cityName);
    }
  }, [unitGroup, searchLocation, cityName]);

  const fetchWeatherData = (location) => {
    const url = `${apiEndpoint}${location}?unitGroup=${unitGroup}&key=${WEATHERAPIKEY}&contentType=json`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((responseText) => {
            throw new Error(
              JSON.stringify({
                status: response.status,
                message: `Error while fetching weather! Http code: ${response.status} \n message: ${responseText} `,
              })
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorObject = JSON.parse(error.message);
        setWeatherError(errorObject);
      });
  };

  return [data, isLoading, weatherError, cityError, latLonError];
};

export default useFetchWeather;
