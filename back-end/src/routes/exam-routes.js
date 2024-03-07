import {
  getAllQuestions,
  createQuiz,
  getAllQuiz,
} from "../controllers/exam-controller.js";
import {
  createResult,
  getAllQuestionsResult,
} from "../controllers/result-controller.js";
import { verifyToken } from "../middleware/auth.js";
import express from "express";
export const quizRouter = express.Router();
quizRouter.get("/questions", verifyToken, getAllQuestions);
quizRouter.get("/questionss", verifyToken, getAllQuiz);
quizRouter.post("/question", verifyToken, createQuiz);
quizRouter.post("/result", createResult);
quizRouter.get("/resultShow", verifyToken, getAllQuestionsResult);
