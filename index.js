import express from "express";
import { handler } from "./build/handler.js";

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send({ secret: "The cake is a lie" });
});

app.use(handler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`localhost:${port}`);
});
