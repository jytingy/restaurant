import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "../config/db.js"; 
import restaurantRoutes from './routes/restaurant.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middleware - function that runs before sending response back to client
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json()); // allows us to accept JSON data in req.body


app.use("/api/restaurants", restaurantRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at:', PORT)
})

