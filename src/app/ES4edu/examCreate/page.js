"use client";

import React, { useState } from "react";
import style from "./exam.css";
import CreatedExam from "../../ES4edu/createdExam/page.js";
import Link from "next/link";
import axios from "axios";

const AddQuestionForm = () => {
  const [section, setSection] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      answerOptions: [
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: true },
      ],
    },
   
    {
      questionText: "",
      answerOptions: [
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: true },
      ],
    },
  ]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const questionsWithCommonInfo = questions.map((question) => ({
        ...question,
        questionSection: section,
      }));
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:8000/question`, {
        token: token,
        body: questionsWithCommonInfo,
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error adding questions:", error);
    }
  };
  console.log(questions);
  return (
    <div className="containerss">
      <div className="bk">
        <Link href="../../ES4edu/es4">
          <button>back</button>
        </Link>
      </div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <label>
            <h3 style={{ color: "#000" }}>Section</h3>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
          </label>

          {questions.map((question, questionIndex) => (
            <div className="containersss" key={questionIndex}>
              <label>
                <h3>Асуултын текст</h3>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) =>
                    setQuestions((prevQuestions) =>
                      prevQuestions.map((prevQuestion, index) =>
                        index === questionIndex
                          ? { ...prevQuestion, questionText: e.target.value }
                          : prevQuestion
                      )
                    )
                  }
                />
              </label>
              {question.answerOptions.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label>
                    <h3>Хариултын текст</h3>
                    <input
                      type="text"
                      value={option.answerText}
                      onChange={(e) =>
                        setQuestions((prevQuestions) =>
                          prevQuestions.map((prevQuestion, qIndex) =>
                            qIndex === questionIndex
                              ? {
                                  ...prevQuestion,
                                  answerOptions: prevQuestion.answerOptions.map(
                                    (prevOption, oIndex) =>
                                      oIndex === optionIndex
                                        ? {
                                            ...prevOption,
                                            answerText: e.target.value,
                                          }
                                        : prevOption
                                  ),
                                }
                              : prevQuestion
                          )
                        )
                      }
                    />
                  </label>

                  <label style={{ paddingLeft: "20px" }}>
                    зөв хариулт
                    <input
                      type="checkbox"
                      checked={option.isCorrect}
                      onChange={(e) =>
                        setQuestions((prevQuestions) =>
                          prevQuestions.map((prevQuestion, qIndex) =>
                            qIndex === questionIndex
                              ? {
                                  ...prevQuestion,
                                  answerOptions: prevQuestion.answerOptions.map(
                                    (prevOption, oIndex) =>
                                      oIndex === optionIndex
                                        ? { ...prevOption, isCorrect: true } // Check the current option
                                        : { ...prevOption, isCorrect: false } // Uncheck other options
                                  ),
                                }
                              : prevQuestion
                          )
                        )
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          ))}

          <div className="wwe">
            <button className="buttonSubmit" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 style={{ color: "#000" }}>successfly</h3>
        </div>
      )}
    </div>
  );
};

export default AddQuestionForm;
