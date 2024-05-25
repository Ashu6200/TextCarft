require("dotenv").config();

const accessTokenExpire = Number.parseInt(
    process.env.ACCESS_TOKEN_EXPIRE || "300",
    10
);
const refreshTokenExpire = Number.parseInt(
    process.env.REFRESH_TOKEN_EXPIRE || "1200",
    10
);

const accessTokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};
const refreshTokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
};

module.exports = {
    accessTokenExpire,
    refreshTokenExpire,
    accessTokenOptions,
    refreshTokenOptions,
};
