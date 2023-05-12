const express = require('express')
const router = express.Router()

const siteController = require('../../app/controllers/SiteController')

// router.get('/search', siteController.search);
// router.get('/:slug', siteController.test)
router.get('/', siteController.home)

module.exports = router
