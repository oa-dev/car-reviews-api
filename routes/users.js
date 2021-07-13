const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../utils/helpers");

router.get("/", (req, res) => {
  res.status(200).send(getAllUsers());
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const user = getUserById(id);

  if (user.length) {
    res.status(200).send(user);
  } else {
    const error = new Error("ID Not Found");
    error.status = 404;
    next(error);
  }
});

module.exports = router;
