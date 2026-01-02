const mongoose = require('mongoose')
module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('connected database')
    } catch (error) {
        console.log(error)
    }
}