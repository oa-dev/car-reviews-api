const express = require("express");
const helmet = require("helmet");
const userRoutes = require("./routes/users");

const app = express();
const port = process.PORT || 3000;

// middleware
app.use(helmet());

// routes
app.get("/", (req, res, next) => {
  res.send("root");
});

app.use("/users", userRoutes);

// all other non-route handling
app.use((req, res, next) => {
  res.status(404).send({
    status: res.statusCode,
    message: "Page not found!",
  });
});

// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
