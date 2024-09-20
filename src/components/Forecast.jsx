import { IoPartlySunnyOutline } from "react-icons/io5";

const Forecast = () => {
  const datadetails = [
    {
      id: 1,
      date: "Fri",
      title: "Sunny",
      Icon: IoPartlySunnyOutline,
      value: "22°",
    },
    {
      id: 2,
      date: "Fri",
      title: "Rain",
      Icon: IoPartlySunnyOutline,
      value: "32°",
    },
    {
      id: 3,
      date: "Fri",
      title: "Windy",
      Icon: IoPartlySunnyOutline,
      value: "12°",
    },
    {
      id: 4,
      date: "Mon",
      title: "Real Feel",
      Icon: IoPartlySunnyOutline,
      value: "24°",
    },
    {
      id: 5,
      date: "Thu",
      title: "Real Feel",
      Icon: IoPartlySunnyOutline,
      value: "2°",
    },
  ];
  return (
    <div className="flex flex-col space-y-2">
      <>
        <h4>3 HOURS STEP FORECAST</h4>
        <hr className="my-1" />
        <div className="flex flex-wrap justify-center gap-3 ">
          {datadetails.map(({ id, date, title, Icon, value }) => (
            <div
              key={id}
              className="w-[119px] h-60 bg-[#DCDFE4] rounded-3xl p-4 flex flex-col justify-between"
            >
              <h3 className="text-xl"> {date} </h3>
              <h4> {title} </h4>
              <div className="gap-4">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="weather icon"
                />
                <h4 className="font-sans text-3xl"> {value} </h4>
              </div>
            </div>
          ))}
        </div>
      </>
      <>
        <h4>5 DAY FORECAST</h4>
        <hr className="my-1" />
        <div className="flex flex-wrap justify-center gap-3 ">
          {datadetails.map(({ id, date, title, Icon, value }) => (
            <div
              key={id}
              className="w-[119px] h-60 bg-[#DCDFE4] rounded-3xl p-4 flex flex-col justify-between"
            >
              <h3 className="text-xl"> {date} </h3>
              <h4> {title} </h4>
              <div className="gap-4">
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="weather icon"
                />
                <h4 className="font-sans text-3xl"> {value} </h4>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Forecast;
