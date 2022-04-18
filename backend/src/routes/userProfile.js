const express = require('express')
const route = express.Router();
const userController = require('../controllers/userProfile')


route.get('/:id', userController.getSingleProfile)
route.get('/', userController.getAllProfiles)
route.post('/', userController.addProfile)
route.patch('/:id', userController.editProfile)
route.delete('/:id', userController.deleteProfile)


module.exports = route;