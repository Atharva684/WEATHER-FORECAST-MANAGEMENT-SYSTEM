import mongoose from "mongoose";
const weatherSchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true,
        },
        temperature: {
            type: Number,
            required: true,
        },
        humidity: {
            type: Number,
            required: true,
        },
        windSpeed: {
            type: Number,
            required: true,
        },
        weatherCondition: {
            type: String,
            required: true,
        },
        forecastDate: {
            type: Date,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true
    }
)
const Weather = mongoose.model("Weather", weatherSchema)
export default Weather