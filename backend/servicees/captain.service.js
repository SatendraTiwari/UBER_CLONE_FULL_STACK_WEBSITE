const CaptainModel = require("../models/captain.model")

module.exports.createCaptain = async ({
    firstName,lastName, email, password, color, plateNum,capacity,vehicleType
}) => {

    if(!firstName || !email || !password || !color || !plateNum || !capacity || !vehicleType){
        throw new Error("All fields Are required");
    }

    const captain = await CaptainModel.create({
        fullName : {
            firstName,
            lastName
        },
        email,
        password,
        vehicle : {
            color,
            plateNum,
            capacity,
            vehicleType
        }
    })

    return captain;
}