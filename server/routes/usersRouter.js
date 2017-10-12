const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.post('/signup', usersController.signup)
router.get('/users', usersController.getAllUsers)

module.exports = router
