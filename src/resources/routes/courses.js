const express = require('express');
const router = express.Router();
const app = express();
const CourseController = require("../../app/controllers/CoursesController");

// router.post('/save',CourseController.saveCourse)
// router.get('/learn/:slug',CourseController.courseLearn);
// router.get('/detail/:slug',CourseController.courseDetail);
router.get('/:slug',CourseController.courseLearn);
router.get("/", CourseController.allCourses);

module.exports = router;
