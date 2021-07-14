const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllUsersNames,
  getUserById,
} = require("../utils/helpers");

router.get("/", (req, res, next) => {
  const users = getAllUsers();
  if (users.length) {
    res.status(200).send(users);
  } else {
    const error = new Error("No users found!");
    error.status = 404;
    next(error);
  }
});

router.get("/names", (req, res) => {
  res.status(200).send(getAllUsersNames());
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
