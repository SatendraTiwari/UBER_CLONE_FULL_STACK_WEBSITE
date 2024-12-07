const mongoose = require("mongoose");


async function connectDB () {
    try {
        const connectionInstance = await mongoose.connect(process.env.DB_CONNECT_URL)

        console.log("Connection successfully :" + connectionInstance.connection.host)
    } catch (error) {
        throw new Error("Something Want Wronge"+error)
    }
}

module.exports = connectDB;