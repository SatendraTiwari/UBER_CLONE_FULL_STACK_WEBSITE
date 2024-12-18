const express = require("express");
const captainRoute = express.Router();
const { body } = require("express-validator")

const captainController = require("../controllers/captain.controller")
const authMiddleware = require("../middlewares/auth.middleware");

captainRoute.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 8 }).withMessage("Password must be more 8 letter"),
    body('fullName.firstName').isLength({min : 3}).withMessage("More then 3 letter in firstName"),
    body('vehicle.color').isLength({min : 3}).withMessage('Color must be at least 3 charecter'),
    body('vehicle.plateNum').isLength({min : 3}).withMessage('Color must be at least 3 charecter'),
    body('vehicle.vehicleType').isLength({min : 3}).withMessage('Color must be at least 3 charecter'),
    
],captainController.registerCaptain)


captainRoute.post('/login',[ 
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min : 8}).withMessage("Atllise 8 letter")
],captainController.loginCaptain )


captainRoute.get('/profile',authMiddleware.authCaptain,captainController.captainProfile)


module.exports = captainRoute;