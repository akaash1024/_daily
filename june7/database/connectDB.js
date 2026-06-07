const mongoose = require("mongoose")
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

let DB_URI = `mongodb+srv://manu:manu@cluster0.aw4sq.mongodb.net/User`
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Database has been connected ... `);


    } catch (error) {
        console.error("Failed to connect the server database", error.message)
        process.exit(1)
    }
}


module.exports = { connectDB }


