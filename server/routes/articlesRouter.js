const express = require('express')
const router = express.Router()
const articlesController = require('../controllers/articlesController')
const authHelper = require('../helpers/authHelper')

router.post('/', authHelper.checkLogin, authHelper.checkAuth, articlesController.create)


module.exports = router
