const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        required : true,
        unique : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires : 86400 // 24 h in second
    }
})


const  BlackListTokenModel = mongoose.model("BlackListToken",blackListTokenSchema)

module.exports = BlackListTokenModel;