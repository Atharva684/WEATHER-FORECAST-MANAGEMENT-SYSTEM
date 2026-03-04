import express from "express";
import {
    createWeather,
    getAllWeather,
    getWeatherById,
    updateWeather,
    deleteWeather,
} from "../controllers/weatherController.js";

const router = express.Router();

router.post("/", createWeather);
router.get("/", getAllWeather);
router.get("/:id", getWeatherById);
router.put("/:id", updateWeather);
router.delete("/:id", deleteWeather);

export default  router;