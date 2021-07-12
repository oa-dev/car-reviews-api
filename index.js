const express = require("express");
const app = express();
const port = process.PORT || 3000;
const { getAllVehicles, getAllUsers } = require("./utils/helpers");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
