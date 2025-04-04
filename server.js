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
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${searchQuery}`
    );
    const result = await response.json();
    console.log(result);

    res.json(result);
  } catch (error) {
    console.log(error, "Error fetching the data");
  }
});

// create a server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
