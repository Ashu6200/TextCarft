const { default: mongoose } = require("mongoose");

const pricingSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true }
);
