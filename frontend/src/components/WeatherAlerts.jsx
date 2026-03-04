import React from "react";

function WeatherAlerts({ weatherList }) {
  const favouriteCities = ["Delhi", "Mumbai", "Hyderabad", "Kerala"];

  return (
    <div
      style={{
        padding: "10px 20px",
        marginBottom: "20px",
        background: "#1e3a8a",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Weather Alerts</h3>
      {favouriteCities.map((city) => {
        const cityData = weatherList.find(
          (w) => w.city.toLowerCase() === city.toLowerCase()
        );
        return (
          <p key={city} style={{ margin: "5px 0" }}>
            Tomorrow in {city}:{" "}
            {cityData?.weatherCondition || "No Data"}
          </p>
        );
      })}
    </div>
  );
}

export default WeatherAlerts;