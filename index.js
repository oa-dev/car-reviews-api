const express = require("express");
const helmet = require("helmet");
const app = express();
const port = process.PORT || 3000;
const { getAllVehicles, getAllUsers } = require("./utils/helpers");

app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).render("error", { error: err });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
