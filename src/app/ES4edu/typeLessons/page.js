import style from "./typeLessons.css";
import Header from "../es-header/page";
import Social from "../../components/socials/net.js";
import Link from "next/link";
export default function TypeLessons() {
  return (
    <div className="window">
      <Social />
      <Header />
      <div className="bolowsrol">
        <h1>Боловсрол төсөл ES4 </h1>
      </div>
      <div className="type">
        <Link href="../../ES4edu/typeLessons/english">
          <div className="english">
            <img
              src="/english-1920-x-1080-wallpaper-wjr0dary1d2bxyld.jpg"
              alt=""
            />
            <p>English</p>
          </div>
        </Link>

        <div className="mat">
          <img src="/1600w-afOo-216E1Y.webp" alt="" />
          <p>Mathematic</p>
        </div>
        <div className="setgelzvich">
          <img
            src="/psychology-psychotherapy-practice-psychological-help-psychiatrist-consulting-patient-psychologist-online-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg"
            alt=""
          />
          <p>Psychology</p>
        </div>
        <div className="shatar">
          <img src="/Chessfigures-for-Game-PPT-Backgrounds.jpg" alt="" />
          <p>Chess</p>
        </div>
      </div>
    </div>
  );
}
