import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/axios";

function WeatherDetail() {
  const { id } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    api.get(`/weather/${id}`).then(res => setWeather(res.data));
  }, [id]);

  if (!weather) return <p>Loading...</p>;

  return (
    <div style={{padding:"20px"}}>
      <h2>{weather.city}</h2>
      <p>  Temperature: {weather.temperature}°C</p>
      <p>  Humidity: {weather.humidity}%</p>
      <p>  Condition: {weather.weatherCondition}</p>
      <p>  Wind Speed: {weather.windSpeed} km/h</p>
      <p>  Forecast Date: {weather.forecastDate}</p>
    </div>
  );
}

export default WeatherDetail;