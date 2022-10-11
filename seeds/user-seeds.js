const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const { User } = require('../models');

const userdata =
[
  {
    "username": "Emily",
    "password": "password123"
  },
  {
    "username": "Stewart",
    "password": "password123"
  },
  {
    "username": "Kukwa",
    "password": "password123"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
