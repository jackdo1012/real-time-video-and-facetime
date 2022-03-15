
const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const ProfileUserControllers = require('../controllers/ProfileUserControllers')
const route = express.Router();

route.get('/profile',requiresAuth(), ProfileUserControllers.profileUser);

module.exports = route