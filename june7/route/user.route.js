const userRoute = require("express").Router()
const userController = require("../controller/user.controller")
const { isValidateUser } = require("../middleware/isValidateUser.middleware")




userRoute.route("/").get(userController.getUsers)

userRoute.route("/add").post(isValidateUser, userController.addUser)

userRoute.route("/update/:id").patch(userController.updateUser)

userRoute.route("/delete/:id").delete(userController.deleteUser)


module.exports = { userRoute }