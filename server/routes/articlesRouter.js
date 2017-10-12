const express = require('express')
const router = express.Router()
const articlesController = require('../controllers/articlesController')
const authHelper = require('../helpers/authHelper')

router.post('/', authHelper.checkLogin, authHelper.checkAuth, articlesController.create)
router.get('/', articlesController.getAllArticles)
router.get('/:id', articlesController.getOne)


module.exports = router
