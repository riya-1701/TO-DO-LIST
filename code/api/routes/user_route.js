const express = require('express');
const route = express();

const userController = require('../controllers/user_controller');

route.post('/login',userController.login);

module.exports = route;