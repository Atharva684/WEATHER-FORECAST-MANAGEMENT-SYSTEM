import { useEffect, useState } from "react";
import api from "../lib/axios";
import WeatherCard from "../components/WeatherCard";
import WeatherAlerts from "../components/WeatherAlerts";
import WeatherNotFound from "../components/WeatherNotFound";

function HomePage() {
  const [weatherList, setWeatherList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const res = await api.get("/weather");
      setWeatherList(res.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  const filtered = weatherList.filter((w) =>
    w.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Notifications */}
      <WeatherAlerts weatherList={weatherList} />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search city..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Weather Cards */}
      <div className="card-grid">
        {filtered.length === 0 ? (
          <WeatherNotFound />
        ) : (
          filtered.map((weather) => (
            <WeatherCard
              key={weather._id}
              weather={weather}
              refresh={fetchWeather}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
