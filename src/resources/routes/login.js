const express = require('express');
const router = express.Router();
const app = express();
const LoginController = require("../../app/controllers/LoginController");


router.post('/sign-up', LoginController.signUp)
router.post('/', LoginController.Login)
router.get("/", LoginController.login);

module.exports = router;
