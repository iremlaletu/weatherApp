const Forecast = ({ title, data }) => {
  return (
    <>
      <h4> {title} </h4>
      <hr className=" isolate my-1 border-black " />
      <div className="flex flex-wrap justify-start gap-3 ">
        {data.map((d, index) => (
          <div
            key={index}
            className="w-[119px] h-60 bg-white/10 backdrop-blur-sm ring-1 ring-black/5  rounded-3xl p-4 flex flex-col justify-between"
          >
            <h3> {d.title} </h3>
            <h6> {d.desc} </h6>
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
