const express = require("express");
const app = express();

const tripsData = require("./trips.js");

app.get("/", (req, res) => {
  res.json(tripsData);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
