const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
        
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    list_course:[{
        ref: 'Course',
       type: Schema.Types.ObjectId
    }],


})


const User = mongoose.model('User', userSchema)

module.exports = User