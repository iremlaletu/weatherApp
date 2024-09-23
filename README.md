### Weather App

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

https://theweatherapp-seven.vercel.app

##### Overview

The Weather App is built with **React JS** and **Tailwind CSS** using the **OpenWeatherMap API** to provide real-time weather data. Users can search by city or use their current location to get detailed weather metrics.

##### Features

- Current weather data (temperature, humidity, etc.)
- Hourly and daily forecasts
- City search with autocomplete using GeoDB API
- Current location weather
- Responsive design
- Local time display
- User notifications with `react-toastify`

##### Technologies

- JavaScript
- React
- Tailwind CSS
- Luxon
- React Icons
- React-Toastify
- OpenWeatherMap API
- GeoDB API

##### API Info

- OpenWeatherMap API for weather data: `/weather?q={city name}&appid={API key}`
- Forecast Data: `/forecast?q={city name}&appid={API key}`

- GeoDB API for autocomplete: `Autocomplete: /places/autocomplete?query={city name}`
