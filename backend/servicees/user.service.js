const userModel = require('../models/user.model')


module.exports.createUser = async ({
    firstName, lastName, email, password,
}) => {
    if(!firstName || !password || !email){
        throw new Error("All field are required")
    }

    const user = userModel.create({
        fullName : {
            firstName,
            lastName
        },
        email,
        password,
    })

    return user;
    
}