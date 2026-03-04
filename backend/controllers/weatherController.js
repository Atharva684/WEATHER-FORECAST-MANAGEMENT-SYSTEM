import Weather from "../models/weather.js";
// CREATE Weather
export const createWeather = async (req, res) => {
    try {
        const weather = await Weather.create(req.body);
        res.status(201).json(weather);
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// READ ALL Weather
export const getAllWeather = async (req, res) => {
    try {
        const data = await Weather.find();
        res.status(200).json(data);
    }catch (error)  {
        res.status(500).json({ message: error.message });
    }
};
// READ Weather By ID
export const getWeatherById = async (req, res) => {
    try {
        const weather = await Weather.findById(req.params.id);
        if (!weather) {
            return
        res.status(404).json({ message: "Weather not found" });
          }
        res.status(200).json(weather);
    }catch (error) {
        res.status(400).json({ message: "Weather not found" });
    } 
}; 
// UPDATE Weather
export const updateWeather = async (req, res) => {
    try {
        const updatedWeather = await Weather.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Weather updated Successfully", data: updatedWeather});
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// DELETE Weather
export const deleteWeather = async (req, res) => {
    try {
        await Weather.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Weather data deleted successfully" });
    }catch (error) {
        res.status(404).json({ message: error.message });
    }
};