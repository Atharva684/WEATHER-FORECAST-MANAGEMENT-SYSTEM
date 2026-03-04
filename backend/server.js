import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import weatherRoutes from"./routes/weatherRoutes.js";
import n from "node:dns/promises";
import cors from "cors";

dotenv.config();
const app = express();
const port=process.env.PORT || 3001
n.setServers(["1.1.1.1","8.8.8.8"
])
// // app.get('/',(req,res)=>{
// //    res.status(200).json("Welcome to Weather Forecast Management System")
// //    console.log("Welcome to Weather Forecast Management System")
// // })
// app.listen(port,()=>{
//    console.log(`http://localhost:${port}`)
// })
app.use(cors())
app.use(express.json())
app.use("/weather", weatherRoutes);

connectDB().then(()=>{
    app.listen(port,()=>{
          console.log(`http://localhost:${port}/weather`)
    })
})
