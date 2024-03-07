"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./login.css";
import Link from "next/link";

export default function Home() {
  const [loginData, setLoginData] = useState({});
  const router = useRouter();
  const routers = useRouter();
  const handleLogin = async () => {
    const { data } = await axios.post(`http://localhost:8000/login`, {
      name: loginData.name,
      password: loginData.password,
    });
    if (data?.token) {
      localStorage.setItem("token", data.token);
      router.push("../../ES4edu/es4");
    }
  };
  const Click = () => {
    routers.push("../../components/signup");
  };
  return (
    <div className="etseg-login">
      <img src="https://miro.medium.com/v2/resize:fit:1060/1*YX-M4g7d3mLIzpUf7CSfHA.jpeg" alt="" />

      <div className="main-login-card">
        <div className="login-card">
          <h1>Log-in</h1>
          <br />
          <div>
            <input
              type="text"
              name=""
              required=""
              placeholder="username"
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="password"
              name=""
              required=""
              placeholder="password"
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <button className="login-button" onClick={() => handleLogin()}>Submit</button>
          </div>

          <div className="login-help">
           <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="main-newtreh">
       
      <div className="main-login">
       
      <div className="login-box">
        <h2>Login</h2>
        <div className="main-box">
          <div className="user-box">
            <input
              type="text"
              name=""
              required=""
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              required=""
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <label>Password</label>
          </div>
          <button onClick={() => handleLogin()}>
            Submit
          </button>
        </div>
        <div className="newUser">
          <Link href="../../ES4edu/signup">
          <p>Шинээр бүртгүүлэх</p>
          </Link>
        
        </div>
      </div>
      </div>
      </div> */
}
