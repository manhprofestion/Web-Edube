const Course = require('../models/Course')
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const lecture = require('../models/lecture')
class CourseController {
    courseLearn(req,res,next){
        Course.findOne({ slug: req.params.slug })
        .populate({
            path:'lecture',
              })
        .then((course) =>{
          res.render("courses/courseLearn",{
            course : mongooseToObject(course),
          })
          // res.render("test3",{layout:false,course:mongooseToObject(course)})
        //   res.json(course)
        })
        .catch(next);
    }



    allCourses(req,res,next){
        Course.find({})
    .then((courses) => {
      res.render("courses/coursePage", {
        courses: mutipleMongooseToObject(courses),
      });
    })
    .catch(next);
    }
    
}
module.exports = new CourseController();