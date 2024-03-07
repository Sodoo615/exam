"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import style from "./signup.css";

export default function Home() {
  const [signData, setSignData] = useState({});
  const [showPass, setShowPass] = useState();
  const pressShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const router = useRouter();

  const handleSignup = async () => {
    const { data } = await axios.post(`http://localhost:8000/user`, {
      name: signData.name,
      email: signData.email,
      password: signData.password,
    });
    if (data?.user) {
      localStorage.setItem("uid", data.user.id);
    }
  };
  return (
    <div className="etseg-login">
      <img
        src="https://miro.medium.com/v2/resize:fit:1060/1*YX-M4g7d3mLIzpUf7CSfHA.jpeg"
        alt=""
      />

      <div className="main-login-card">
        <div className="login-card">
          <h1>Sign Up</h1>
          <br />
          <div>
            <input
              type="text"
              name=""
              required=""
              placeholder="username"
              onChange={(e) =>
                setSignData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="text"
              name=""
              required=""
              placeholder="E-Mail"
              onChange={(e) =>
                setSignData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <input
              type="password"
              name=""
              required=""
              placeholder="password"
              onChange={(e) =>
                setSignData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <Link href="../../ES4edu/login">
              <button className="signup-button" onClick={() => handleSignup()}>Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// div className="main-signup">
//       <div className="signup-box">
//         <h2>Sign Up</h2>
//         <div>
//           <div className="user-box">
//             <input
//               type="text"
//               name=""
//               required=""
//               onChange={(e) =>
//                 setSignData((prev) => ({ ...prev, name: e.target.value }))
//               }
//             />
//             <label>Username</label>
//           </div>
//           <div className="user-box">
//             <input
//               type="text"
//               name=""
//               required=""
//               onChange={(e) =>
//                 setSignData((prev) => ({ ...prev, email: e.target.value }))
//               }
//             />
//             <label>Email</label>
//           </div>
//           <div className="user-box">
//             <input
//               type="password"
//               name=""
//               required=""
//               onChange={(e) =>
//                 setSignData((prev) => ({
//                   ...prev,
//                   password: e.target.value,
//                 }))
//               }
//             />
//             <label>Password</label>
//           </div>
//           <Link href="../../ES4edu/login">
//             <button onClick={() => handleSignup()}>
//               Submit
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
