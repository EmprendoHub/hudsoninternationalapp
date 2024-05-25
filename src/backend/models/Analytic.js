import mongoose from "mongoose";

const AnalyticSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
  },
  source: [
    {
      page: {
        type: String,
      },
      visits: {
        type: Number,
        default: 1,
      },
    },
  ],
});

export default mongoose?.models?.Analytic ||
  mongoose.model("Analytic", AnalyticSchema);
