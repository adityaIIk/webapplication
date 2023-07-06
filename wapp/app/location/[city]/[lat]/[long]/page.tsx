import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import StartCard from "@/components/StartCard";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";



export const revalidate =  60;


type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
    
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "IST",
    },
  });

  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel 
      city ={city}
      long= {long}
      lat = {lat}
      results ={results}
      />

      <div className="flex-1 p-5 lg-p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated At:{""}
              {new Date(results.current_weather.time).toLocaleString()}(
              {results.timezone})
            </p>
          </div>

          <div className="py-2">
            <CalloutCard message = {`Hey there, folks! It's Dogey, LIVE from TESLA Headquarters, with a quick weather update for ${decodeURI(city)}.
             Maximum temperature: ${results.daily.temperature_2m_max[0].toFixed(1)}°C, minimum temperature: ${results.daily.temperature_2m_min[0].toFixed(1)}°C,
              and the chance of rain is ${results.hourly.precipitation_probability[0].toFixed(1)}%. So, grab your sunscreen, jacket, and a snorkel, because today's weather is as unpredictable as a cat in a raincoat! Stay prepared and have a splash-tastic day! `}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 py-2">
            <StartCard
              title="Maximum Temprature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`}
              color="yellow"
            />

            <StartCard
              title="Minimum Temprature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`}
              color="teal"
            />
          </div>

          <div className="flex space-x-3 py-2">
            <StartCard
              title="Wind Speed"
              metric={`${results.current_weather.windspeed.toFixed(1)} m/s`}
              color="cyan"
            />

            <StartCard
              title="Wind Direction"
              metric={`${results.current_weather.winddirection.toFixed(1)}°`}
              color="violet"
            />
          </div>           

          <div className="py-4">
            <StartCard
              title="UV Index"
              metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
              color="rose"
            />

            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CalloutCard
                warning
                message={"The UV is high today, be sure to wear SPF!"}
              />
            )}
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          <TempChart
          results={results}
          />
          <RainChart 
          results={results}
          />
          <HumidityChart

          results={results}
          />

        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
