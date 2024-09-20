import { BiCurrentLocation, BiSearch } from "react-icons/bi";
const SearchBar = () => {
  return (
    <section className="flex flex-col items-center my-5 lg:my-8">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search by city.."
          className="text-black p-2 w-full shadow-md rounded-xl focus:outline-none"
        />
        <div className="relative flex justify-center items-center">
          <div className="group flex justify-center transition-all rounded-full p-1">
            <BiSearch size={20} className="cursor-pointer" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">
              search
            </span>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="group flex justify-center transition-all rounded-full p-1">
            <BiCurrentLocation size={20} className="cursor-pointer" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-7 duration-700 text-sm">
              current location
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center mt-4">
        <button className="text-xl transition ease-out hover:scale-125 font-light">
          °C
        </button>
        <p className="text-2xl mx-2 ">|</p>
        <button className="text-xl transition ease-out hover:scale-125 font-light">
          °F
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
