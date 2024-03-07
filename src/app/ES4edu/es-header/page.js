"use client";
import { useState, useEffect } from "react";
import style from "../../header/style.css";
import styles from "../es-header/profile.css";
import Admin from "../AdminPage//adminHeader/page";
import EduHeader from "../edu-header/page.js";
import axios from "axios";
import Link from "next/link";
export default function Header() {
  const [user, setUser] = useState([]);
  
  const [role, setRole] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${role}`, {
          headers: { "x-access-token": token },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
console.log(user.role)
  return user.role === "admin" ? (
    <div>
      <Admin />
    </div>
  ) : (
    <EduHeader />
  );
}
