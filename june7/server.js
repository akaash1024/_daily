require("dotenv").config()
const express = require("express")
const { connectDB } = require("./database/connectDB")
const { userRoute } = require("./route/user.route")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.use("/api/user", userRoute)








app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: `Server is working`
    })
})

const PORT = 3000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    });
})