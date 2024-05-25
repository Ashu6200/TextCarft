const { default: mongoose } = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    subscriptionType: {
      type: String,
      required: true,
      default: "Basic",
      enum: ["Basic", "Monthly", "Quartly", "Yearly"],
    },
    activatedDays: {
      type: Number,
      default: 5,
      enum: [5, 30, 180, 365],
    },
  },
  {
    timestamps: true,
  }
);

const SubscriptionModel = mongoose.model("Subscription", subscriptionSchema);
module.exports = SubscriptionModel;
