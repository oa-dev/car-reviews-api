const data = require("../../data/fake-users/users-posts.json");

const getAllVehicles = () => data.map((profile) => profile.vehicle);

const getAllUsers = () => data.map((profile) => profile);

const getAllUsersNames = () =>
  data.map((profile) => `${profile.firstName} ${profile.lastName}`);

const getUserById = (id) => {
  return data.filter((profile) => {
    return profile.id.toString() === id;
  });
};
// console.log(getUserById(6.327475));

module.exports = { getAllVehicles, getAllUsers, getAllUsersNames, getUserById };
