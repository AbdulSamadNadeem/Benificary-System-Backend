const express = require('express')
const Router = express.Router()
const SeekerHandlers = require('../RouteHandlers/SeekerHandler')
const AuthHandlers = require('../RouteHandlers/AuthHandler')

//Auth Routes

Router.route('/auth/signup').post(AuthHandlers.Signup)
Router.route('/auth/signin').post(AuthHandlers.Login)


//Receptionist Routes
Router.route('/createseeker').post(SeekerHandlers.createSeeker)
Router.route('/getallseekers').get(SeekerHandlers.getAllSeeker)


module.exports = Router