require("dotenv").config();
const { app } = require("./app");
const { connectDB } = require("./configs/db");

const port = process.env.PORT;
app.listen(port, async () => {
  await connectDB();
  console.log(`Server listening on port http://localhost:${port}`);
});
