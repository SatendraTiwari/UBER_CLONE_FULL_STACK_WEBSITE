const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    fullName : {
        firstName: {
            type : String,
            required: true, 
            min : [3,"More then 3 letter"]      
        },
        lastName: {
            type : String,
            min: [3,"More then 3 Letter"]
        }
    },
    email : {
        type : String,
        required: true,
        unique : true,
        min : [5, "email must be enter"]
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    socketId : {
        type: String,
    }
},{timestamps : true})



userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn : '24h'})

    return token;
}

userSchema.methods.comparePassword = async function (password) {

    console.log(password+"password and this passwor"+this.password);

    const r = await bcrypt.compare(password, this.password)
    console.log("r is : "+r);
    return r;

}


userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model("User",userSchema)

module.exports = userModel  