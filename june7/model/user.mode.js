const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    age: { type: Number },
    password: { type: String },
    isAdmin: { type: Boolean, default: false }
})


const User = mongoose.model("User", userSchema)
module.exports = { User }