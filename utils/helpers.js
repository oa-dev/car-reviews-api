const data = require("../../data/fake-users/users-posts.json");

const getAllVehicles = () => data.map((profile) => profile.vehicle);

const getAllUsers = () => data.map((profile) => profile);

const getAllUsersNames = () =>
  data.map((profile) => `${profile.firstName} ${profile.lastName}`);

const getUserById = (id) =>
  data.filter((profile) => profile.id.toString() === id);

module.exports = { getAllVehicles, getAllUsers, getAllUsersNames, getUserById };
