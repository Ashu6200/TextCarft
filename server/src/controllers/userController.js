const { UserModel } = require("../models/userModel");
const { ApiError } = require("../utils/ApiError");
const { asyncHandler } = require("../utils/AsyncHandler");
const { accessTokenOptions, refreshTokenOptions } = require("../utils/token");


const resgister = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const isUserExisted = await UserModel.findOne({ email: email, })
    if (isUserExisted) {
      return res.status(200).json({ success: true, message: "User already exists" })
    }
    const user = await UserModel.create({ name: name, email: email, password: password })


  } catch (error) {
    return next(new ApiError(500, error.message || "Internal Server Error"));
  }

})

const socialLoginUser = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, avatar } = req.body;
    let user = await UserModel.findOne({ email: email, })
    if (!user) {
      user = await UserModel.create({ name: name, email: email, atar: avatar });
    }
    const accessToken = user.SignAccessToken();
    const refreshToken = user.SignRefreshToken();

    if (process.env.NODE_ENV === "production") {
      accessTokenOptions.secure = true;
    }
    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);
    return res.status(statusCode).json({
      success: true,
      user: user,
      accessToken,
      message: "User Successfully loggend in"
    });
  } catch (error) {
    return next(new ApiError(500, error.message || "Internal Server Error"));
  }
});
const logout = asyncHandler(async (req, res, next) => {
  try {
    res.cookie("access_token", "", { maxAge: 1 });
    res.cookie("refresh_token", "", { maxAge: 1 });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return next(new ApiError(500, error.message || "Internal Server Error"));
  }
});

module.exports = { resgister, logout, socialLoginUser };

