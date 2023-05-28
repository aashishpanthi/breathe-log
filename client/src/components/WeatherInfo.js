import { Card, Text, Metric, Title } from "@tremor/react";
import { Link } from "react-router-dom";

const WeatherInfo = () => {
  return (
    <Card className="max-w-screen-lg mx-auto mt-5" decoration="top">
      <div className="flex justify-between px-2">
        <div>
          <Text>NP</Text>
          <Metric>Butwal</Metric>
          <Text>Clear Sky</Text>
        </div>

        <div>
          <Text>Wear a mask</Text>
          <a href={`tel:879889`} className="text-center">
            87989
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-5">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img
            src="/icons/termo1.png"
            className="h-8 mx-auto"
            alt="temperature"
          />
          <Title>30°C</Title>
          <Text>Temperature</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/aqi.png" className="h-8 mx-auto" alt="air quality" />
          <Title>175</Title>
          <Text>Air quality</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/wind.png" className="h-8 mx-auto" alt="wind" />
          <Title>20%</Title>
          <Text>Wind speed</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/winddir.png" className="h-8 mx-auto" alt="wind" />
          <Title>NE</Title>
          <Text>Wind direction</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/sunrise.png" className="h-8 mx-auto" alt="wind" />
          <Title>20%</Title>
          <Text>Sun rise</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/sunset.png" className="h-8 mx-auto" alt="wind" />
          <Title>20%</Title>
          <Text>Sun set</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/cloud.png" className="h-8 mx-auto" alt="cloud" />
          <Title>20%</Title>
          <Text>Clouds</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img
            src="/icons/humidity.png"
            className="h-8 mx-auto"
            alt="humidity"
          />
          <Title>20%</Title>
          <Text>Humidity</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/eye.png" className="h-8 mx-auto" alt="visibility" />
          <Title>20%</Title>
          <Text>Visibility</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/uv.png" className="h-8 mx-auto" alt="uv" />
          <Title>20%</Title>
          <Text>UV index</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/water.png" className="h-8 mx-auto" alt="water" />
          <Title>0%</Title>
          <Text>Rainfall</Text>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
          <img src="/icons/snowflake.png" className="h-8 mx-auto" alt="water" />
          <Title>0%</Title>
          <Text>Snowflake</Text>
        </div>
      </div>
    </Card>
  );
};
export default WeatherInfo;
