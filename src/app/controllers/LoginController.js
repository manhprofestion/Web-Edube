const User = require('../models/User')
const mongoose = require('mongoose'); 

class LoginController {

    //[POST] /login
    Login(req,res,next){
        const {email,password} = req.body
        User.findOne({email: email, password: password})
        .then((data)=>{
            
            if(!data){
                res.redirect('/login')
            }
            else{
                res.redirect(`/?email=${email}&name=${data.name}`);
            }
        })
    }

    //[POST] /login/sign-up 
    signUp(req,res,next){
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        //save to DB
        newUser.save()
            .then(() => {
            // Render success page with username
            res.json(name);
            })
            .catch(err => {
            // Handle any errors
            console.error(err);
            res.status(500).send('Internal Server Error');
            }) 
    }

    //[GET] /login
    login(req,res){
        res.render('login-signIn',{layout: false})
    }
}
module.exports = new LoginController();