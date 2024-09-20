import Details from "./components/Details";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const getWeather = async () => {
    const data = await getFormattedWeatherData({ q: "berlin" });
    console.log(data);
  };
  getWeather();
  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-3">
        <Header />
        <SearchBar />
      </div>

      <div className="mx-auto max-w-screen-xl px-1">
        <Details />
      </div>
    </>
  );
};

export default App;
