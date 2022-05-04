const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('database connect successfull!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;