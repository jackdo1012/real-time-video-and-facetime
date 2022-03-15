const express = require('express');
const route = express.Router()
const authControllers = require('../controllers/AuthControllers')
route.get('/', (req, res) => {
    res.render('index')
})
route.post('/login', authControllers.login)

module.exports = route