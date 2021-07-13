const express = require("express");
const helmet = require("helmet");
const { getAllVehicles, getAllUsers } = require("./utils/helpers");

const app = express();
const port = process.PORT || 3000;

// middleware
app.use(helmet());

// routes
app.get("/", (req, res) => {
  res.send("hello world!");
});

// all other route handling
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// error handling
app.use((err, req, res, next) => {
  res.status(500).render("error", { error: err });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
