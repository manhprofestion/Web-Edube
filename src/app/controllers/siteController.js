// const Course = require('../models/Course');
// const { mutipleMongooseToObject } = require('../../util/mongoose');
// const { mongooseToObject } = require('../../util/mongoose')
class SiteController {
 //GET /
  home(req, res,next) {
    const name = req.query.name
    const email = req.query.email
    res.render('index',{name,email})
    
    
  }
    
}

module.exports = new SiteController();