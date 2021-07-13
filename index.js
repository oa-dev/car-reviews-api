const express = require("express");
const app = express();
const port = process.PORT || 3000;
const { getAllVehicles, getAllUsers } = require("./utils/helpers");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
