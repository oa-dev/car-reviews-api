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

// error handling
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send({
      status: err.status,
      message: err.message,
    });
  }

  if (err.status === 500) {
    res.status(500).send({
      status: err.status,
      message: err.message,
    });
  }
});

// all other route handling
app.use((req, res, next) => {
  res.status(404).send("Path not found");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
