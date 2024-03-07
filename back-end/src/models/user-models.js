import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  createdOn: Date,
});

export const UserModel = mongoose.model("user", userSchema);
