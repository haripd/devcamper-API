const mongoose = require('mongoose')

const dbConnect = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    })
    console.log(`Cloud mongo connected host : ${conn.connection.host}`.blue.bold)
}
module.exports = dbConnect