const captainModel = require("../models/captain.model");

const captainService = require("../servicees/captain.service")

const { validationResult } = require("express-validator");

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