import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// modifying the url
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      console.error(`Error ${data.cod}: ${data.message}`);
      throw new Error(`Error ${data.cod}: ${data.message}`);
    }
    return data;
  });
};

// icon code to url for show if rain or sunny img etc
const iconUrlFromCode = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

// belirli bir zaman dilimine göre UTC zamanını yerel zaman formatına dönüştürme Luxon "convert"
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

// Apı'dan gelen dataları destructing yapma
const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { feels_like, humidity, temp, temp_max, temp_min },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  // console.log(data);

  const { main: details, icon } = weather[0];

  // Storing the formatted epoch time
  const formattedLocalTime = formatToLocalTime(dt, timezone);
  return {
    feels_like,
    humidity,
    temp,
    temp_max,
    temp_min,
    country,
    name,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconUrlFromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};
const formatTheForecastWeather = (secs, offset, data) => {
  //hourly
  const hourly = data
    .filter((f) => f.dt > secs)
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconUrlFromCode(f.weather[0].icon),
      date: f.dt_txt,
      desc: f.weather[0].description,
    }))
    .slice(0, 5);

  //daily
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      icon: iconUrlFromCode(f.weather[0].icon),
      date: f.dt_txt,
      desc: f.weather[0].description,
    }));

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrent);

    const { dt, lat, lon, timezone } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("forecast", {
      lat,
      lon,
      units: searchParams.units,
    }).then((d) => formatTheForecastWeather(dt, timezone, d.list));

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

export default getFormattedWeatherData;
