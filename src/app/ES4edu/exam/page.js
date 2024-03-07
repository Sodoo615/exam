"use client";
import exam from "./exam.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Quiz({ searchParams }) {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);
  const [backgroundColor, setBackgroundColor] = useState("");

  const { _id } = searchParams;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/questionss?_id=${_id}`,
          { headers: { "x-access-token": token } }
        );
        setQuestions(response.data.questions);
        // console.log(response.data.questions)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // console.log("qq", questions)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user`, {
          headers: { "x-access-token": token },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSub = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8000/result`, {
        username: user.name,
        result: score,
        typeLessons: questions[0]?.questions[currentQuestion]?.questionSection,
      });
      console.log("Submission successful");
    } catch (error) {
      console.error("Error submitting result:", error);
    }
  };

  useEffect(() => {
    let interval;
    if (!showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [showScore]);

  useEffect(() => {
    if (timer === 0) {
      handleAnswerClick(false);
    }
  }, [timer]);

  const handleAnswerClick = (isCorrect) => {
    // clearInterval(timer);
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
      setBackgroundColor("green");
    } else {
      setBackgroundColor("red");
    }

    setTimeout(() => {
      setBackgroundColor("white");
    }, 500);

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions[0]?.questions.length) {
        setCurrentQuestion(nextQuestion);
        setTimer(20);
        setBackgroundColor("");
      } else {
        setShowScore(true);
        handleSub();
      }
    }, 1000);
  };
  return (
    <div className="bigs">
      {showScore ? (
        <div className="emailSub">
          <Link href="../../ES4edu/es4">
            <button>Back</button>
          </Link>
          <div className="hariu">
            <h2>
              Your Score: {score} out of {questions[0]?.questions.length}
            </h2>
          </div>
        </div>
      ) : (
        <div className="ques">
          <div className="answr">
            <p>
              Time left: {timer} seconds
              <br />
              {questions[0]?.questions[currentQuestion]?.questionText}
            </p>
            <ul>
              {questions[0]?.questions[currentQuestion]?.answerOptions.map(
                (answerOption, index) => (
                  <li key={index}>
                    <button
                      className="correctButton"
                      style={{ backgroundColor }}
                      onClick={() => handleAnswerClick(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
