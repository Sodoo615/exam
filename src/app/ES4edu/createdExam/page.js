// 'use client'
// import { useRouter, } from "next/navigation";
// import { useEffect, useState, } from "react"
// import style from "./createdExam.css"
// import Link from "next/link"    
// import axios from "axios"

// export default function Home() {
//     const [questions, setQuestions] = useState([]);
//     const [loading, setloading] = useState([false]);
//     const [error, setError] = useState(null);
//     const [search, setSearch] = useState('')
//     const [deleteSuccess, setDeleteSuccess] = useState(false)
//     const router = useRouter();
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         const fetchData = async () => {
//             setloading(true)
//             try {
//                 const response = await axios.get(`http://localhost:8000/questions`, { headers: { 'x-access-token': token }, });
//                 setQuestions(response.data.questions);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setError("Та нэвтрэх шаардлагатай")
//             } finally {
//                 setloading(false)
//             }
//         };
//         fetchData();
//     }, []);

//     const routers = useRouter()
//     const handleCreate = (_id) => {
//         routers.push(`../../ES4edu/exam?_id=${_id}`)
//     }

//     return (
//         <div className="gre">
//             {loading &&
//                 <div className="lds">
//                     <div className="loader">

//                     </div>
//                     <p style={{ color: "white" }}>loading...</p>
//                 </div>
//             }
//             {error && <p style={{ color: "#000", textAlign: "center" }} >{error}</p>}
//             <div className="bak">
//             <Link href="../../ES4edu/es4">
//                     <button className="back" >Back</button>
//                 </Link>
//             </div>
//             <div className="lessons">

          
//             <p>Хичээлүүдийн төрөл</p>
//             <div className="crequizs">
            
//                 {questions
//                 .map((item) => {
//                     return (
//                         <div key={item._id} className="mans" >
//                             <div className="images">
//                                 {/* <img src="https://cache.careers360.mobi/media/presets/1000X757/article_images/2022/9/5/INI-CET-Exam-Date-2023.webp" alt="" /> */}
//                                 <p className="title" >{item?.questions[0]?.questionSection}</p>
                                 
//                                 <button className="plyButton" onClick={() => handleCreate(item?._id)}>Start now</button>
                            
//                             </div>
                           
//                         </div>
//                     )
//                 })}
//                 </div>
//                 </div>
//         </div>
//     )
// }