const express = require("express")

const userService = require("../servicees/user.service");
const userModel = require("../models/user.model");

const {validationResult, cookie} = require('express-validator');
const BlackListToken = require("../models/blackListToken.model");

module.exports.registerUser = async (req, res, next) => {

    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }

    const {fullName, email, password} = req.body;

    const hashPassword = await userModel.hashPassword(password)


    const user = await userService.createUser({
        firstName : fullName.firstName,
        lastName : fullName.lastName,
        email,
        password : hashPassword
    })

    const token = await user.generateAuthToken();
    console.log(token)
    res.json({
        token : token,
        data : user,
    })


}


module.exports.loginUser = async (req, res,next) => {

    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    
    const {email, password } = req.body

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(501).json({
            message : "invalid Email and password"
        })
    }

    const isMatch = await user.comparePassword(password);


    if(!isMatch){
        return res.status(401).json({
            message: "password wrong"
        })
    }

    const token  = await user.generateAuthToken()


    res.cookie("token",token);

    res.status(200).json({
        token : token,
        message : "user Login successfully ",
        data: user,
    })
}



module.exports.userProfile = async (req, res, next) => {

    const user = req.user
    res.status(200).json({
        message : "User profile",
        data : user
    })

}

module.exports.logoutUser = async (req, res,next ) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]
    await BlackListToken.create({token});

    res.clearCookie('token');
    res.status(200).json({
        message : " Successfully logout",
    })
}