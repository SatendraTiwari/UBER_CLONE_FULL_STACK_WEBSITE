const { renderToStaticMarkup } = require("react-dom/server");
const captainModel = require("../models/captain.model");

const captainService = require("../servicees/captain.service")

const { validationResult } = require("express-validator");
const BlackListTokenModel = require("../models/blackListToken.model");

module.exports.registerCaptain = async (req, res, next ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const {fullName,email, password,vehicle} = req.body;

    const isAlreadyCaptianExit = await captainModel.findOne({email});

    if(isAlreadyCaptianExit){
        return res.status(400).json({message: "Captain already exist with this email"})
    }

    const hashPassword = await captainModel.hashPassword(password);

    const user = await captainService.createCaptain({
        firstName : fullName.firstName,
        lastName : fullName.lastName,
        email,
        password : hashPassword ,
        color : vehicle.color,
        plateNum : vehicle.plateNum,
        capacity : vehicle.capacity,
        vehicleType : vehicle.vehicleType,
    })


    console.log(user);

    const token = await user.generatAuthToken();

    res.cookie('token',token);

    res.status(201).json({
        token : token,
        message : "Captain is Register succcess fully",
        data : user
    })

}

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select("+password")

    if(!captain){
        return res.status(400).json({message : "Invalid email or password"})
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(400).json({message : "Invalid email or password"})
    }

    const token = await captain.generatAuthToken()

    res.cookie('token', token);

    res.status(201).json({
        token : token,
        mesaage : "Captain is Login successfully",
        data : captain
    })
}


module.exports.captainProfile = async (req, res) => {
    try {
        const captain = req.captain;
        res.status(200).json({
            message : "Captain Profile",
            data : captain,
        })
    } catch (error) {
        res.status(401).json({
            message : "Something Want Wrong " +error,
        })
    }
}


module.exports.logoutCaptain = async (req, res) => {
    try {

        const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

        await BlackListTokenModel.create({token});

        res.clearCookie(token);

        res.status(200).json({
            message : "Logout successfully "
        })
        
    } catch (error) {
        res.status(401).json({
            message : "someThing Want Wronge" + error,
        })
    }
}

