import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  result: { type: Number, required: true },
  typeLessons: { type: String, required: true },
});

export const Result = mongoose.model("result", userSchema);
