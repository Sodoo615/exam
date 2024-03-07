import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user-routes.js";
import { quizRouter } from "./routes/exam-routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter);


const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://edu:8888@edu.vztorx7.mongodb.net/"
  );
  console.log("database connected");
};
connectDb();
app.listen(8000, () => {
  console.log(`Your server running on: http://localhost:8000`);
});
