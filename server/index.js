const express = require("express");
const cors = require('cors');
const app = express();

const tripsData = require("./trips.js");

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.json(tripsData);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
