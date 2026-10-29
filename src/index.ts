import express from "express";
import subjectsRouter from "./routes/subjects.ts";
import cors from "cors";

const app = express();

const port = 3000;

app.use(express.json());
app.use("/api/subjects", subjectsRouter);
if (!process.env.FRONTEND_URL)
  throw new Error("FRONTEND_URL is missibg in the .env file");
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("This is the API");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
