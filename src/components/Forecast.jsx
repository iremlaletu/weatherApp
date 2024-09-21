const Forecast = ({ title, data }) => {
  return (
    <>
      <h4> {title} </h4>
      <hr className="my-1" />
      <div className="flex flex-wrap justify-center gap-3 ">
        {data.map((d, index) => (
          <div
            key={index}
            className="w-[119px] h-60 bg-[#DCDFE4] rounded-3xl p-4 flex flex-col justify-between"
          >
            <h3 className="text-l"> {d.title} </h3>

            <div className="gap-4">
              <img src={d.icon} alt="weather icon" />
              <h4 className="font-sans text-3xl"> {`${d.temp.toFixed()}`} </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
