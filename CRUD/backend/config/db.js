const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = awaitmongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline)
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;