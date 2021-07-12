const data = require("../data/fake-users/users-posts.json");

const getAllVehicles = () => data.map((profile) => profile.vehicle);
