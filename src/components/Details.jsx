import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { LuThermometerSun } from "react-icons/lu";
import Forecast from "./Forecast";
import Time from "./Time";

const Details = ({
  weather,
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunset,
    sunrise,
    speed,
    humidity,
    feels_like,
    formattedLocalTime,
    name,
    country,
  },
  units,
}) => {
  const datadetails = [
    {
      id: 1,
      Icon: LuThermometerSun,
      title: "Real Feel",
      value: `${feels_like.toFixed()}° ${units === "metric" ? "" : "F"} `,
    },
    {
      id: 2,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
    {
      id: 3,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowUp,
      title: "Highest",
      value: `${temp_max.toFixed()}°  ${units === "metric" ? "" : "F"} `,
    },
    {
      id: 5,
      Icon: MdKeyboardArrowDown,
      title: "Lowest",
      value: `${temp_min.toFixed()}°  ${units === "metric" ? "" : "F"} `,
    },
    {
      id: 6,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 7,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
  ];
  return (
    <section className="flex flex-col xl:flex-row justify-center items-center gap-5">
      <div className="w-full h-fit max-w-sm">
        <Time
          formattedLocalTime={formattedLocalTime}
          name={name}
          country={country}
        />
        <div className=" bg-white/10 backdrop-blur-sm ring-1 ring-black/5 rounded-xl p-4 shadow-lg ">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">Today</h3>
              <h4 className="text-gray-600"> {details} </h4>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon} className="w-16 h-16" alt="weather icon" />
              <h4 className="text-5xl font-sans mt-2">{`${temp.toFixed()}°  ${
                units === "metric" ? "" : "F"
              } `}</h4>
            </div>
          </div>

          <div className="space-y-4 w-2/3 xl:mt-10">
            {datadetails.map(({ id, Icon, title, value }) => (
              <div key={id} className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Icon size={18} />
                  <span>{`${title}: `}:</span>
                </div>
                <span className="font-mono text-l">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Forecast title="3 Hour Forecast" data={weather.hourly} />
        <Forecast title="5 Day Forecast" data={weather.daily} />
      </div>
    </section>
  );
};

export default Details;
