const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const BlackListToken = require("../models/blackListToken.model");
const captainModel = require("../models/captain.model");


module.exports.authUser = async (req, res, next ) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]
    
        if(!token){
            throw new Error("Unautherized");
        }

        const isBlacklistToken = await BlackListToken.findOne({token});

        if(isBlacklistToken){
            throw new Error("Unautherized");
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded._id);

        if(user.$isEmpty()){
            throw new Error("User not Exist");
        }

        req.user = user;

        return next();
    } catch (error) {
       return res.status(401).json({message : "Somthing wronge "+error });
    }
}


module.exports.authCaptain = async (req, res, next ) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]
    
        if(!token){
            throw new Error("Unautherized");
        }

        const isBlacklistToken = await BlackListToken.findOne({token});

        if(isBlacklistToken){
            throw new Error("Unautherized");
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        const captain = await captainModel.findById(decoded._id);  

        if(captain.$isEmpty()){
            throw new Error("Captain not Exist");
        }

        req.captain = captain;

        return next();
    } catch (error) {
       return res.status(401).json({message : "Somthing wronge "+error });
    }
}