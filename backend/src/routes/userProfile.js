const express = require('express')
const router = express.Router();
const userController = require('../controllers/userProfile')


router.get('/', userController.getProfile)
router.post('/', userController.addProfile)
router.put('/', userController.editProfile)
router.delete('/', userController.deleteProfile)


module.exports = router;