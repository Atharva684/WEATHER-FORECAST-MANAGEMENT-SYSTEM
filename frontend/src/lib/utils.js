export const getWeatherIcon = (condition) => {
  const c = condition?.toLowerCase();
  if (c === "rain") return "Rainy";
  if (c === "sunny") return "Sunny";
  if (c === "cloudy") return "Cloudy" ;
  if (c === "storm") return "Stormy" ;
  return "Clear" ;
};