import React from "react";
import { Card, Text, Metric, Title, Divider } from "@tremor/react";

const Skeleton = () => {
  return (
    <Card className="max-w-screen-lg mx-auto mt-5" decoration="top">
      <div role="status" className="space-y-2.5 animate-pulse max-w-full">
        <div className="flex justify-between px-2">
          <div>
            {/* Country */}
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-4"></div>

            {/* Name */}
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>

            {/* Sky condition */}
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </div>

        <Divider />

        {/* Show different particles present in air from air quality using online icons is possible */}
        <div className="px-4 mt-5 pb-0">
          <Text className="text-center">Particles present in air</Text>
          <div className="flex justify-between  px-2 pt-2">
            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>PM10</Text>
            </div>

            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>PM2.5</Text>
            </div>

            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>
                NO<sub>2</sub>
              </Text>
            </div>

            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>
                O<sub>3</sub>
              </Text>
            </div>

            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>
                SO<sub>2</sub>
              </Text>
            </div>

            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>CO</Text>
            </div>

            <div className="text-center">
              <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
              <Text>
                NH<sub>3</sub>
              </Text>
            </div>
          </div>
        </div>

        <Divider />
        <div className="flex flex-wrap justify-between mt-5">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img
              src="/icons/termo1.png"
              className="h-8 mx-auto"
              alt="temperature"
            />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Temperature</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img
              src="/icons/aqi.png"
              className="h-8 mx-auto"
              alt="air quality"
            />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Air quality</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/wind.png" className="h-8 mx-auto" alt="wind" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Wind speed</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/winddir.png" className="h-8 mx-auto" alt="wind" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Wind direction</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/sunrise.png" className="h-8 mx-auto" alt="wind" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Sun rise</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/sunset.png" className="h-8 mx-auto" alt="wind" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Sun set</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/cloud.png" className="h-8 mx-auto" alt="cloud" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Clouds</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img
              src="/icons/humidity.png"
              className="h-8 mx-auto"
              alt="humidity"
            />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Humidity</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img
              src="/icons/eye.png"
              className="h-8 mx-auto"
              alt="visibility"
            />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Visibility</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/uv.png" className="h-8 mx-auto" alt="uv" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>UV index</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img src="/icons/water.png" className="h-8 mx-auto" alt="water" />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Rainfall</Text>
          </div>

          <div className="w-1/2 md:w-1/3 lg:w-1/4 text-center my-2 p-2">
            <img
              src="/icons/snowflake.png"
              className="h-8 mx-auto"
              alt="water"
            />
            <div class="h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 w-10 mt-2 mb-1"></div>
            <Text>Snowflake</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Skeleton;
