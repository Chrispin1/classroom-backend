import express from "express";
import subjectsRouter from "./routes/subjects.ts";

const app = express();

const port = 3000;

app.use(express.json());
app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send("This is the API");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
