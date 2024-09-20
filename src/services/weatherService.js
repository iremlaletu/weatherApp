import { DateTime } from "luxon";

const API_KEY = "7fe99d6dedc5319fb93db9bd3a50906c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// modifying the url
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

// icon code to url for show if rain or sunny img etc
const iconUrlFromCode = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png"`;

// belirli bir zaman dilimine göre UTC zamanını yerel zaman formatına dönüştürme
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd, LLL yyyy' | Local time: 'hh:mm a"
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
  console.log(data);

  const { main: details, icon } = weather[0];
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
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);
  return { ...formattedCurrentWeather };
};

export default getFormattedWeatherData;
