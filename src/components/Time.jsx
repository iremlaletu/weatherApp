const Time = ({ formattedLocalTime, name, country }) => {
  return (
    <section className="flex flex-col space-y-3 mb-5">
      <p className="text-4xl">{` ${name}, ${country} `}</p>
      <p className="text-l font-extralight">{formattedLocalTime}</p>
    </section>
  );
};

export default Time;
