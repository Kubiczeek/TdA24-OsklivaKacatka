const express = require("express");
const path = require("path");

const app = express();
const port = 3001;

app.get("/api", (req, res) => {
  res.send({ secret: "The cake is a lie" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`https://localhost:${port}`);
});
