"use client";
import { useRouter, useSearchParams } from "next/navigation";
import style from "../../../header/style.css";
import styles from "../../es-header/profile.css";
import Exam from "../../examCreate/page.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function AdminHeader() {
  const [item, setItem] = useState();
  const [profile, setProfile] = useState(false);
  const [loading, setloading] = useState([false]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await axios.get(`http://localhost:8000/user`, {
          headers: { "x-access-token": token },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(" Та нэвтрэх шаардлагатай");
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);
  const logoutlogin = () => {
    try {
      localStorage.removeItem("token");
      router.push("../../ES4edu/login");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (window) {
      const uid = localStorage.getItem("uid");

      if (uid === null) {
        router.push("../../ES4edu/login");
      }
    }
  }, []);

  const createExam = () => {
    router.push("../../ES4edu/examCreate");
  };
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await axios.get(`http://localhost:8000/questions`, {
          headers: { "x-access-token": token },
        });
        setQuestions(response.data.questions);
        console.log(response.data.questions)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Та нэвтрэх шаардлагатай");
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);
  const handleCreate = (_id) => {
    router.push(`../../ES4edu/exam?_id=${_id}`)
}
  return (
    <div className="main-header">
      <div className="nav-pro">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <div className="name">
              {!error && <h2>Welcome to ,</h2>}

              {loading && (
                <div className="lds">
                  <div className="loader"></div>
                  <p style={{ color: "#000" }}>loading...</p>
                </div>
              )}
              {error && (
                <p
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    paddingTop: "10px",
                  }}
                >
                  {error}
                </p>
              )}
              <li>{user?.name}</li>
            </div>
            <Link href="../../ES4edu/typeLessons">
              <li>Хичээлүүдийн төрөл</li>
            </Link>

            <li className="tour">Зар мэдээ</li>
            <Link href="../ES4edu/createdExam">
              <li>Шалгалт </li>
            </Link>
            <Link href="../../../components/Map">
              <li>Conatct</li>
            </Link>
            <Link href="../../../ES4edu/examResult">
            <li>Шалгалтын хариу </li>
            </Link>
           
            <div className="required">
              {!error && <button onClick={() => logoutlogin()}>Гарах</button>}
              {error && (
                <Link href="../ES4edu/login">
                  <button>Нэвтрэх</button>
                </Link>
              )}
            </div>
          </ul>
        </div>
        <div className="edu44">
          <img src="/es.png" alt="" />
        </div>
        <div onClick={() => createExam()} className="createtExam">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-square-rounded-plus-filled"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#00abfb"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z"
              fill="currentColor"
              strokeWidth="0"
            />
          </svg>
        </div>
      </div>
      <div className="main">
        <div className="travels-main">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-big-left-line"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h6v6h-6z" />
            <path d="M21 15v-6" />
          </svg>
          <Link href="../../../ES4edu/es4">
            <li>Home</li>
          </Link>
        </div>

        <div className="container">
          <div className="category">
            <div>
              <ul>
                <Link href="../../ES4edu/typeLessons">
                  <li>Хичээлүүдийн төрөл</li>
                </Link>

                <li className="tour">Зар мэдээ</li>
                <img src="/es.png" alt="" />
                <div className="dropdowns">
                  <li className="dropbtn" >
                    Шалгалт{" "}
                  </li>

                  <div className="dropdown-contents">
                    {questions.map((item) => {
                      return (
                        <div key={item._id} className="mans">
                          <p onClick={() => handleCreate(item?._id)} className="title">
                            {item?.questions[0]?.questionSection}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Link href="../../../ES4edu/examResult">
            <li>Шалгалтын хариу </li>
            </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile">
          <div onClick={() => createExam()} className="creatExam">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-square-rounded-plus-filled"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
          </div>
          <div className="main-pro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>

            <p onClick={() => setProfile(!profile)}>PROFILE</p>
            {profile && <MenuItem item={item} logoutlogin={logoutlogin} />}
          </div>
        </div>
      </div>
    </div>
  );
}
const MenuItem = ({ item, logoutlogin }) => {
  const [loading, setloading] = useState([false]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await axios.get(`http://localhost:8000/user`, {
          headers: { "x-access-token": token },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(" Та нэвтрэх шаардлагатай");
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);
  console.log(user);
  return (
    <div className="dropdown">
      <ul>
        <div className="name">
          {!error && <h2>Welcome to ,</h2>}
          {loading && (
            <div className="lds">
              <div className="loader"></div>
              <p style={{ color: "#000" }}>loading...</p>
            </div>
          )}
          {error && (
            <p
              style={{
                color: "#000",
                textAlign: "center",
                fontFamily: "fantasy",
                fontSize: "20px",
                paddingTop: "10px",
              }}
            >
              {error}
            </p>
          )}
          <li>{user?.name}</li>
        </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <div className="requir">
          {!error && <button onClick={() => logoutlogin()}>Гарах</button>}

          {error && (
            <Link href="../ES4edu/login">
              <button>Нэвтрэх</button>
            </Link>
          )}
        </div>
      </ul>
    </div>
  );
};
