import { useState, useEffect } from "react";
import api from "../lib/axios";
import { useNavigate, useLocation } from "react-router";

function CreatePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const [form, setForm] = useState({
    city: "",
    temperature: "",
    humidity: "",
    weatherCondition: "",
    windSpeed: "",
    forecastDate: "",
    isFavourite: false,
  });

  useEffect(() => {
    if (id) {
      api.get(`/weather/${id}`).then(res => setForm(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await api.put(`/weather/${id}`, form);
    } else {
      await api.post("/weather", form);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input placeholder="City" value={form.city}
        onChange={(e)=>setForm({...form, city:e.target.value})}/>
      <input type="number" placeholder="Temperature"
        value={form.temperature}
        onChange={(e)=>setForm({...form, temperature:e.target.value})}/>
      <input type="number" placeholder="Humidity"
        value={form.humidity}
        onChange={(e)=>setForm({...form, humidity:e.target.value})}/>
      <input placeholder="Weather Condition"
        value={form.weatherCondition}
        onChange={(e)=>setForm({...form, weatherCondition:e.target.value})}/>
      <input type="number" placeholder="Wind Speed"
        value={form.windSpeed}
        onChange={(e)=>setForm({...form, windSpeed:e.target.value})}/>
      <input type="date"
        value={form.forecastDate}
        onChange={(e)=>setForm({...form, forecastDate:e.target.value})}/>

      <label>
        Favourite
        <input type="checkbox"
          checked={form.isFavourite}
          onChange={(e)=>setForm({...form, isFavourite:e.target.checked})}/>
      </label>

      <button type="submit">
        {id ? "Update Forecast" : "Add Forecast"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:"20px"
  }
};

export default CreatePage;