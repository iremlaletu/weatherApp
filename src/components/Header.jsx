const Header = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "New York" },
    { id: 3, name: "Sydney" },
    { id: 4, name: "Tokyo" },
    { id: 5, name: "Paris" },
    { id: 6, name: "Istanbul" },
  ];

  return (
    <>
      <h6 className=" font-serif text-center text-2xl">Weather Forecast</h6>
      <div className="flex flex-wrap justify-center my-2">
        {cities.map((city) => (
          <button
            key={city.id}
            className="border-b mx-8 my-1 min-w-[100px] p-2 text-center"
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
