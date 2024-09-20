import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { LuThermometerSun } from "react-icons/lu";
import Forecast from "./Forecast";
import Time from "./Time";

const Details = () => {
  const datadetails = [
    {
      id: 1,
      Icon: LuThermometerSun,
      title: "Real Feel",
      value: "22°",
    },
    {
      id: 2,
      Icon: FiWind,
      title: "Wind",
      value: "2 km/h",
    },
    {
      id: 3,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "90%",
    },
    {
      id: 4,
      Icon: MdKeyboardArrowUp,
      title: "Highest",
      value: "10°",
    },
    {
      id: 5,
      Icon: MdKeyboardArrowDown,
      title: "Lowest",
      value: "2°",
    },
    {
      id: 6,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "6:00 AM",
    },
    {
      id: 7,
      Icon: GiSunset,
      title: "Sunset",
      value: "8:00 PM",
    },
  ];
  return (
    <section className="flex flex-col xl:flex-row justify-center items-center gap-5">
      <div className="w-full h-fit max-w-sm">
        <Time />
        <div className="bg-[#DCDFE4] rounded-3xl p-4 shadow-lg ">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">Today</h3>
              <h4 className="text-gray-600">Sunny</h4>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-16 h-16"
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="weather icon"
              />
              <h4 className="text-5xl font-sans mt-2">6°</h4>
            </div>
          </div>

          <div className="space-y-4 w-2/3 xl:mt-10">
            {datadetails.map(({ id, Icon, title, value }) => (
              <div key={id} className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Icon size={18} />
                  <span>{title}:</span>
                </div>
                <span className="font-mono text-l">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Forecast />
    </section>
  );
};

export default Details;
