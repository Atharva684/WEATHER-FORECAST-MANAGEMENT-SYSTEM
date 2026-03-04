import { useState } from "react";
import api from "../lib/axios";

function WeatherCard({ weather, refresh }) {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    city: weather.city || "",
    temperature: weather.temperature || "",
    weatherCondition: weather.weatherCondition || "",
    humidity: weather.humidity || "",
    windSpeed: weather.windSpeed || "",
    date: weather.date || "",
    isFavourite: weather.isFavourite || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/weather/${weather._id}`, formData);
      refresh();
      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/weather/${weather._id}`);
      refresh();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        background: formData.isFavourite ? "#fff8dc" : "white",
        padding: "20px",
        borderRadius: "12px",
        border: formData.isFavourite ? "2px solid gold" : "1px solid #ddd",
        boxShadow: formData.isFavourite
          ? "0 0 15px rgba(255,215,0,0.6)"
          : "0 4px 10px rgba(0,0,0,0.1)",
        transform: formData.isFavourite ? "scale(1.03)" : "scale(1)",
        transition: "0.3s ease",
      }}
    >
      {formData.isFavourite && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "gold",
            color: "black",
            padding: "4px 8px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
           Favourite
        </div>
      )}

      {isEditing ? (
        <>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />

          <input
            name="temperature"
            type="number"
            value={formData.temperature}
            onChange={handleChange}
            placeholder="Temperature"
          />

          <select
            name="weatherCondition"
            value={formData.weatherCondition}
            onChange={handleChange}
          >
            <option value="">Select Condition</option>
            <option value="Sunny">Sunny </option>
            <option value="Cloudy">Cloudy </option>
            <option value="Rainy">Rainy </option>
            <option value="Stormy">Stormy </option>
            <option value="Snowy">Snowy </option>
          </select>

          <input
            name="humidity"
            type="number"
            value={formData.humidity}
            onChange={handleChange}
            placeholder="Humidity %"
          />

          <input
            name="windSpeed"
            type="number"
            value={formData.windSpeed}
            onChange={handleChange}
            placeholder="Wind Speed km/h"
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />

          <label style={{ display: "block", marginTop: "8px" }}>
            <input
              type="checkbox"
              name="isFavourite"
              checked={formData.isFavourite}
              onChange={handleChange}
            />
            Favourite
          </label>

          <button onClick={handleUpdate} style={{ marginTop: "10px" }}>
            Save
          </button>
        </>
      ) : (
        <>
          <h2>{weather.city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} km/h</p>
          <p>Condition: {weather.weatherCondition}</p>
          <p>Date: {weather.date}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: "8px" }}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default WeatherCard;