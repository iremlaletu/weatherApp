import { useEffect, useState } from "react";
import Details from "./components/Details";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "adana" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(` Fetching weather data for ${cityName} `);
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(` Fetch Completed ${data.name}, ${data.country} `);
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-3">
        <Header setQuery={setQuery} />
        <SearchBar setQuery={setQuery} setUnits={setUnits} />
      </div>

      <div className="mx-auto max-w-screen-xl px-1">
        {weather && <Details weather={weather} units={units} />}
      </div>
      <ToastContainer
        autoClose={2500}
        hideProgressBar={false}
        theme="colored"
      />
    </>
  );
};

export default App;
