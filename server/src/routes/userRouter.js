const userRouter = require("express").Router();
const { registerUser } = require("../controllers/userController");

userRouter.post("/register", registerUser);

module.exports = { userRouter };
