"use client";
import Headers from "../../ES4edu/es-header/page.js";
import Contact from "../../components/contact/page.js";
import Anket from "../../ES4edu/anket/page.js";
import Ontslog from "../../ES4edu/edu-ontslog/page.js"
import Social from "../../components/socials/net.js";
import LevelType from "../../ES4edu/typeLessons/english/page.js";
import ScrollToTopButton from "../../components/scroll/page.js";
import style from "./es4.css";
export default function ES4() {
  const data = {
    labels: ['English', 'Math', 'Chess'],
    values: [50, 30, 20],
    colors: ['#ff6384', '#36a2eb', '#cc65fe'],
  };
  return (  
    <div>
       <Social/>
      <Headers></Headers>

      <div className="edu">
      </div>
      <div className="taniltsuulga">
        <div className="main-taniltsuulga">
          <div className="logo">
            <img src="/es.png" alt="" />
            <h2 className="es">“ES4” Боловсрол төсөл хөтөлбөр</h2>
          </div>
          <div className="tani">
            <h2 className="tanilts">Танилцуулга :</h2>
            <div className="tanilts1">
              <p>Танилцуулга :</p>
              <p className="t1">
                Тус боловсрол төсөл хөтөлбөр нь 2021 оны 6-р сарын 1-ний өдөр
                “ES4 Боловсрол аялал” ХХК компанийн нэр доор үндэслэн
                байгуулагдсан.
              </p>
            </div>
            <div className="tanilts2">
              <p>Алсын хараа :</p>
              <p className="t2">
                Зөв хүүхдээс эрдэм мэдлэг, ур чадвартай иргэн болж эх орондоо
                үнэт зүйлийг бүтээнэ.
              </p>
            </div>
            <div className="tanilts3">
              <p className="erhem"> Эрхэм зорилго :</p>
              <p className="t3">
                EQ чадвараараа онцгойрсон хувь хүнийг хөгжүүлж, дэлхийн
                чансаатай их сургуульд 100%-ийн тэтгэлэгтэй суралцуулах
                боловсролыг эзэмшлүүлнэ
              </p>
            </div>
            <div className="zorilt">
              <p className="health">Эрүүл мэнд</p>
              <p className="hamt">Хамтын зүтгэл</p>
              <p> Хүндэтгэл</p>
              <p className="erdem"> Эрдэм мэдлэг</p>
              <p className="togs"> Төгс иргэн</p>
              <p>Боловсрол</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
      <Anket data={data} />
      </div> */}
      <Ontslog />
      <LevelType/>
      <ScrollToTopButton></ScrollToTopButton>
      <Contact></Contact>
    </div>
  );
}
