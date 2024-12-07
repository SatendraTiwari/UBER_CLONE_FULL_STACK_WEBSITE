const express = require("express");
const { body } = require("express-validator");

const userRoute = express.Router();

const userController = require("../controllers/user.controller");
const { authUser } = require("../middlewares/auth.middleware");

userRoute.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 8 }).withMessage("Password must be more 8 letter"),
    body('fullName.firstName').isLength({min : 3}).withMessage("More then 3 letter in firstName")
],userController.registerUser)


userRoute.post('/login',[
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min : 8}).withMessage("Atllise 8 letter")
],userController.loginUser)


userRoute.get('/profile',authUser,userController.userProfile)

userRoute.get('/logout',authUser, userController.logoutUser)



module.exports = userRoute