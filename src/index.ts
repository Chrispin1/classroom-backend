import express from "express";
import subjectsRouter from "./routes/subjects.ts";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = 3000;

if (!process.env.FRONTEND_URL)
  throw new Error("FRONTEND_URL is missibg in the .env file");
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send("This is the API");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
