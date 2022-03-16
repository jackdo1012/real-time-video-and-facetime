
const express = require('express');
const ProfileUserControllers = require('../controllers/ProfileUserControllers')
const route = express.Router();

route.get('/profile', ProfileUserControllers.profileUser);

module.exports = route