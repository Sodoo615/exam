"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./exam-result.css"
import Link from "next/link";
export default function ResultShow() {
  const [resultShow, setResultShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/resultShow", {
          headers: { "x-access-token": token },
        });
        setResultShow(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
      <div className="mainResult">
          <Link href="../../ES4edu/es4">
            <button>Back</button>
          </Link>
          {resultShow?.map((item) => {
              return (
                <table className="styled-table">
                <tr>
                  <th>LessonType</th>
                  <th>Name</th>
                  <th>Point</th>
                </tr>
                <tr>
                          <td>{ item?.typeLessons}</td>
                  <td>{ item?.username}</td>
                  <td>{ item?.result}</td>
                </tr>
              </table>
          )
      })}
    </div>
  );
}
