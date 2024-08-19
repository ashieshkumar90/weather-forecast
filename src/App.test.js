// d:\js\react\weather-forcast\src\App.test.js

import { render } from "@testing-library/react";
import App from "./App";
import useFetchWeather from "./utils/useFetchWeather";

jest.mock("./utils/useFetchWeather");

test("Should render loading state when data is still loading", () => {
  useFetchWeather.mockReturnValue([null, true]);

  const { getByText } = render(<App />);
  expect(getByText("Loading....")).toBeInTheDocument();
});
test("Should handle error when API request fails", () => {
  useFetchWeather.mockImplementation(() => {
    throw new Error("API request failed");
  });

  const { getByText } = render(<App />);
  expect(getByText("API request failed")).toBeInTheDocument();
});
