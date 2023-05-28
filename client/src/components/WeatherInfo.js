import { Card, Text, Metric, Title } from "@tremor/react";
import { Link } from "react-router-dom";

const WeatherInfo = ({ weather, airQuality, emergencyNumber }) => {
  function generateAirQualityDescription(airQuality) {
    let description = "";
    let colorCode = "";

    // Check the air quality index (AQI) value
    if (airQuality >= 0 && airQuality <= 50) {
      description = "Air quality is good. Enjoy the fresh air!";
      colorCode = "text-green-500"; // Tailwind CSS class for green color
    } else if (airQuality > 50 && airQuality <= 100) {
      description = "Air quality is moderate. No major restrictions.";
      colorCode = "text-yellow-500"; // Tailwind CSS class for yellow color
    } else if (airQuality > 100 && airQuality <= 150) {
      description =
        "Air quality is unhealthy for sensitive groups. Consider wearing a mask.";
      colorCode = "text-orange-500"; // Tailwind CSS class for orange color
    } else if (airQuality > 150 && airQuality <= 200) {
      description =
        "Air quality is unhealthy. It's recommended to avoid prolonged outdoor activities.";
      colorCode = "text-red-500"; // Tailwind CSS class for red color
    } else if (airQuality > 200 && airQuality <= 300) {
      description =
        "Air quality is very unhealthy. Stay indoors and use air purifiers if available.";
      colorCode = "text-purple-500"; // Tailwind CSS class for purple color
    } else if (airQuality > 300) {
      description =
        "Air quality is hazardous. Stay indoors and keep windows closed.";
      colorCode = "text-gray-900"; // Tailwind CSS class for dark gray color
    } else {
      description = "Unable to determine air quality information.";
      colorCode = "text-gray-500"; // Tailwind CSS class for light gray color
    }

    return {
      description,
      colorCode,
    };
  }

  // Generate the air quality description and color code
  const { description, colorCode } = generateAirQualityDescription(
    airQuality?.list?.[0]?.main?.aqi
  );

  const direction = () => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];

    return directions[Math.round((weather?.wind?.deg - 11.25) / 22.5)];
  };

  return (
    <Card className="max-w-screen-lg mx-auto mt-5" decoration="top">
      <div className="flex justify-between px-2">
        <div>
          {/* Country */}
          <Text>
            {weather?.sys?.country ??
              (weather?.sys?.country === "US" ? "USA" : "Unknown")}
          </Text>

          {/* Name */}
          <Metric>{weather?.name}</Metric>

          {/* Sky condition */}
          <Text>
            {weather?.weather?.[0]?.description.charAt(0).toUpperCase() +
              weather?.weather?.[0]?.description.slice(1)}
          </Text>
        </div>

        <div className="text-center">
          <a href={`tel:${emergencyNumber}`}>
            {`Emergency number: ` + emergencyNumber}
          </a>
          <Text className={colorCode}>{description}</Text>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-5">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img
            src="/icons/termo1.png"
            className="h-8 mx-auto"
            alt="temperature"
          />
          <Title>
            {
              // Convert temperature from Kelvin to Celsius
              Math.round(weather?.main?.temp - 273.15)
            }
            °C
          </Title>
          <Text>Temperature</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/aqi.png" className="h-8 mx-auto" alt="air quality" />
          <Title>
            {airQuality?.list?.[0]?.main?.aqi ??
              (airQuality?.list?.[0]?.main?.aqi === "US" ? "USA" : "Unknown")}
          </Title>
          <Text>Air quality</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/wind.png" className="h-8 mx-auto" alt="wind" />
          <Title>
            {
              // Convert wind speed from m/s to km/h
              Math.round(weather?.wind?.speed * 3.6) + " km/h"
            }
          </Title>
          <Text>Wind speed</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/winddir.png" className="h-8 mx-auto" alt="wind" />
          <Title>{direction()}</Title>
          <Text>Wind direction</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/sunrise.png" className="h-8 mx-auto" alt="wind" />
          <Title>
            {
              // Convert UNIX timestamp to local time
              new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )
            }
          </Title>
          <Text>Sun rise</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/sunset.png" className="h-8 mx-auto" alt="wind" />
          <Title>
            {
              // Convert UNIX timestamp to local time
              new Date(weather?.sys?.sunset * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )
            }
          </Title>
          <Text>Sun set</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/cloud.png" className="h-8 mx-auto" alt="cloud" />
          <Title>{weather?.clouds?.all}</Title>
          <Text>Clouds</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img
            src="/icons/humidity.png"
            className="h-8 mx-auto"
            alt="humidity"
          />
          <Title>
            {
              // Convert humidity from percentage to absolute value
              Math.round(weather?.main?.humidity) + "%"
            }
          </Title>
          <Text>Humidity</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/eye.png" className="h-8 mx-auto" alt="visibility" />
          <Title>
            {
              // Convert visibility from meters to kilometers
              Math.round(weather?.visibility / 1000) + " km"
            }
          </Title>
          <Text>Visibility</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/uv.png" className="h-8 mx-auto" alt="uv" />
          <Title>
            {
              // Show UV index
              weather?.uvi
                ? // Show "N/A" if UV index is not available
                  weather?.uvi
                : "N/A"
            }
          </Title>
          <Text>UV index</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/water.png" className="h-8 mx-auto" alt="water" />
          <Title>
            {
              // Convert rainfall from millimeters to centimeters and show "N/A" if rainfall is not available

              weather?.rain?.["1h"]
                ? Math.round(weather?.rain?.["1h"] * 10) / 10 + " cm"
                : "N/A"
            }
          </Title>
          <Text>Rainfall</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/snowflake.png" className="h-8 mx-auto" alt="water" />
          <Title>
            {
              // Convert snowfall from millimeters to centimeters and show "N/A" if snowfall is not available
              weather?.snow?.["1h"]
                ? Math.round(weather?.snow?.["1h"] * 10) / 10 + " cm"
                : "N/A"
            }
          </Title>
          <Text>Snowflake</Text>
        </div>
      </div>
    </Card>
  );
};
export default WeatherInfo;
