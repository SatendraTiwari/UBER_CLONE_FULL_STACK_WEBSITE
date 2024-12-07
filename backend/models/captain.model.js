const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { MongoOIDCError } = require('mongodb');



const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            min: [3, 'FirstName must be at 3 characters long']
        },
        lastName : {
            type: String,
            min: [3, 'LastName must be at 3 characters long']
        }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    },
    socketId : {
        type : String,
    },
    status : {
        type : String,
        enum : ['active', 'inactive'],
        default : 'inactive',
    },
    vehicle : {
        color: {
            type: String,
            required: true,
            min : [3, "Color must be at least 3 characters long"]
        },
        plateNum: {
            type: String,
            required: true,
            min : [3, "Plate must be at least 3 characters long"]
        },
        capacity : {
            type : Number,
            required : true,
            min : [1, "Capacity must be at least 1"],
            max : [10, "Capacity must be at most 10"],
        },
        vehicleType : {
            type: String,
            required : true,
            enum : ['car','motorcycle','auto']
        }
    },

    location : {
        lat : {
            type : Number,
        },
        lng : {
            type : Number,
        }
    }

})



captainSchema.methods.generatAuthToken = async function () {
    const token = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn : '24h'})

    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compareSync(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10)
}

const captainModel = mongoose.model('CaptainModel ',captainSchema)

module.exports = captainModel;