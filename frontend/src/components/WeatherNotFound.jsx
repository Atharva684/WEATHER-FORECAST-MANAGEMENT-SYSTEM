import React from "react";

function WeatherNotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.icon}>🌪</h1>
        <h2>No Weather Data Found</h2>
        <p>Please add a forecast or try searching another city.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  card: {
    textAlign: "center",
    padding: "30px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "300px",
  },
  icon: {
    fontSize: "50px",
  },
};

export default WeatherNotFound;