import WeatherInfo from "./WeatherInfo";
import { useState, useEffect } from "react";

const Hero = () => {
  const [weather, setWeather] = useState({});
  const [airQuality, setAirQuality] = useState({});
  const [emergencyNumber, setEmergencyNumber] = useState(102);

  // ask for the location and get the weather as well as the air quality
  const fetchLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAirQuality(data);
        });

      const username = "aashishpanthi";

      // Construct the API URL
      const apiUrl = `http://api.geonames.org/extendedFindNearbyJSON?lat=${latitude}&lng=${longitude}&username=${username}`;

      // Make the API request
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Extract the emergency contact number from the API response
          const emergencyNumber = data.geonames[0].emergency;
          if (emergencyNumber) {
            setEmergencyNumber(emergencyNumber);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <form className="max-w-screen-lg mx-auto mt-5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by city name..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <WeatherInfo
        weather={weather}
        airQuality={airQuality}
        emergencyNumber={emergencyNumber}
      />

      <div className="flex flex-wrap justify-between mt-5">
        {/* Recommend to wear a mask */}
      </div>
    </div>
  );
};

export default Hero;
