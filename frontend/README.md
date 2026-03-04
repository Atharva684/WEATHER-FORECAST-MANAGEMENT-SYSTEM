# Weather Forecast Management System

## Project Overview
This is a web application where users can *view, add, edit, and delete weather forecasts* for multiple cities.  
Users can also *mark favourite cities* and receive *weather alerts* for key cities.

---

## Features
- Add, edit, and delete weather data:
  - City
  - Temperature
  - Humidity
  - Wind Speed
  - Date
  - Weather Condition
- Favourite cities feature with *premium look* (golden glow + badge + zoom effect)
- Weather alerts for selected cities: Delhi, Mumbai, Hyderabad, Kerala
- Cards display *side-by-side* and are editable
- Responsive and modern UI

---

## Tech Stack
- *Frontend:* React, Axios, Tailwind CSS / DaisyUI  
- *Backend:* Node.js, Express, MongoDB  
- *Deployment:* Render.com, GitHub 

### Backend
```bash
cd backend
npm install
npm start
📁 Frontend Project Structure 
frontend/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CreatePage.jsx
│   │   ├── WeatherDetail.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherAlerts.jsx
│   │   ├── WeatherNotFound.jsx
│   │
│   ├── lib/
│   │   ├── axios.js
│   │   ├── utils.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
 📁 Backend Project Structure
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── weatherController.js
│
├── models/
│   └── weather.js
│
├── routes/
│   └── weatherRoutes.js
│
├── .env
├── server.js
├── package.json
└── package-lock.json

Backend runs on http://localhost:3000

CRUD API endpoints:
GET /weather → Get all weather data
POST /weather → Add new weather
PUT /weather/:id → Update weather
DELETE /weather/:id → Delete weather

Frontend
cd frontend
npm install
npm start

Frontend runs on http://localhost:5173
Connects to backend using Axios

📌 How It Works
User adds weather details from Create Page.
Data is stored in backend database.
Home Page displays weather cards.
Each card contains:
City Name
Temperature
Weather Condition
Edit Button
Delete Button
Clicking on a card shows detailed weather information.

🔑 Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
WEATHER_API_KEY=your_api_key

🎯 Future Enhancements
User authentication system
7-day forecast display
Weather alerts & notification
Deployment on cloud platform

👨‍💻 Author
Atharva Chavan

Built using the MERN Stack.