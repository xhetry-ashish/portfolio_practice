const express = require('express')
const route = express.Router();
const userController = require('../controllers/userProfile')


route.get('/', userController.getProfile)
route.post('/', userController.addProfile)
route.patch('/', userController.editProfile)
route.delete('/', userController.deleteProfile)


module.exports = route;