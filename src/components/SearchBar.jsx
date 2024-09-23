import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { GEO_API_URL, geoApiOptions } from "../services/cityService";
import { AsyncPaginate } from "react-select-async-paginate";

const SearchBar = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");

  const handleCitySearch = (searchCity) => {
    setCity(searchCity);
    if (searchCity !== "") setQuery({ q: searchCity.label });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          alert(
            "Location information could not be obtained. Please allow access."
          );
        }
      );
    } else {
      alert("Your browser does not support location services.");
    }
  };

  // Modifies the URL to fetch city data
  const loadOptions = (inputValue) => {
    return fetch(
      ` ${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue} `,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: ` ${city.name}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="mx-auto p-2 w-full flex flex-col lg:flex-row items-center justify-center my-5 lg:my-8 space-y-4 lg:space-y-0 space-x-2">
      <AsyncPaginate
        placeholder="Search by city.."
        debounceTimeout={600}
        value={city}
        loadOptions={loadOptions}
        onChange={handleCitySearch}
        className="text-black w-11/12 shadow-md rounded-xl"
      />
      <div className="relative flex justify-center items-center">
        <div className="group flex justify-center transition-all rounded-full p-1">
          <BiCurrentLocation
            size={20}
            className="cursor-pointer"
            onClick={handleLocationClick}
          />
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-x-10 lg:group-hover:translate-x-0 lg:group-hover:translate-y-7  duration-700 text-sm">
            current location
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <button
          className="text-lg transition ease-out hover:scale-125 font-light"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-2xl mx-2">|</p>
        <button
          className="text-lg transition ease-out hover:scale-125 font-light"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
