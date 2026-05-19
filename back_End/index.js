import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/server/server.js";
import route from "./src/router/userRoute.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});