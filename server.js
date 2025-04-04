import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
const PORT = 3001;

dotenv.config();
// create an express instance
const app = express();

// enable cors for all the routes
app.use(cors());

app.get("/weather", async (req, res) => {
  const searchQuery = req.query.q || "oslo";
  try {
    // Forecase weather request
    const forecastResponse = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${searchQuery}&days=3`
    );
    const forecastResult = await forecastResponse.json();
    console.log(forecastResult);

    res.json(forecastResult);
  } catch (error) {
    console.log(error, "Error fetching the data");
  }
});

// create a server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
