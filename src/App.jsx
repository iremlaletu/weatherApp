import { useEffect, useState, useCallback } from "react";
import Details from "./components/Details";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "istanbul" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = useCallback(async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${cityName}`);

    try {
      const data = await getFormattedWeatherData({ ...query, units });
      toast.success(`Fetch Completed ${data.name}, ${data.country}`);
      setWeather(data);
    } catch (error) {
      toast.error(`City not found: ${cityName} ${error.message}`);
    }
  }, [query, units]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div className="bg-custom-bg bg-cover bg-center min-h-screen">
      <div className="mx-auto max-w-screen-lg">
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
    </div>
  );
};

export default App;
