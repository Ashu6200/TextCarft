require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const { userRouter } = require("./routes/userRouter");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    statusCode: 200,
    success: true,
    data: null,
    message: "TextCraft server is live",
  });
});
app.use("/user", userRouter);
module.exports = { app };
