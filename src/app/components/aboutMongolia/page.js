"use client";
import style from "./about.css";
import Header from "../../header/page.js";
export default function AboutMonglia() {
  return (
    <div>
      <Header></Header>

      <div className="mongolabout">
        <h2>ABOUT MONGOLIA</h2>
      </div>
      <div className="flag">
        <img src="/flags.png" alt="" />
      </div>
      <div className="aboutMongol">
        <div className="col">
          <div className="tuhai">
            <h3>ABOUT</h3>

            <div className="falgs">
              <img src="/flags.png" alt="" />
            </div>
          </div>
          <div className="mongol">
            <h3>MONGOLIA</h3>
          </div>
        </div>
        <div className="medeelel">
          <p>
            Mongolia, the country of adventure, land of steppe nomads with real
            freedom and great history behind. Pieceful Mongol nation tribes here
            in Central Asia for thousands of years. Mongolians are welcome
            hospitality nation to introduce our nomadic lifestyle to you and
            proud to share their amazing history with you.{" "}
          </p>
        </div>
      </div>
      <div className="mountain">
        <h3>
          Mongolia beautiful <span>PLACES</span>{" "}
        </h3>
        <p>
          Here you will find the brief information about Mongolia. See the
          info-graphic of Mongolia we create for every travelers to Mongolia.{" "}
        </p>
      </div>

      <div className="mountainType">
        <div className="type1">
          <p>Delgerkhaan</p>
        </div>

        <div className="type2">
          <p>Kharkhiraa Turgen mountains</p>
        </div>
        <div className="type3">
          <p>Khermen Tsav</p>
        </div>
        <div className="type4">
          <p>The Tsambagarav Mountain</p>
        </div>
        <div className="type5">
          <p>Lake Khvwsgvl</p>
        </div>
        <div className="type6">
          <p>Khetsuu Khad</p>
        </div>
      </div>
      <div className="mountain">
        <h3>
          Mongolian <span>HISTORY</span>{" "}
        </h3>
      </div>
      <div className="mainHistory">
        
        <div className="History">
          <div className="khaan">
            <img src="/khaanG.png" alt="" />
            <p>
              Genghis Khan (born Temüjin; c. 1162 – 25 August 1227), also
              Chinggis Khan,[a] was the founder and first khan of the Mongol
              Empire, which he ruled from 1206 until his death in 1227; it later
              became the largest contiguous empire in history. After spending
              most of his life uniting the Mongol tribes, he launched a series
              of military campaigns, conquering large parts of China and Central
              Asia.
            </p>
          </div>

          <div className="oldFlag">
          <div className="flagOld">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b8935066-822d-4bad-a233-0908fe570342/dfzigk0-e41e16af-bf7c-41fe-acea-f64cee38474a.png/v1/fill/w_800,h_387/flag_map_of_mongol_empire__1206_1368__svg_by_thinhvkm_dfzigk0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzg3IiwicGF0aCI6IlwvZlwvYjg5MzUwNjYtODIyZC00YmFkLWEyMzMtMDkwOGZlNTcwMzQyXC9kZnppZ2swLWU0MWUxNmFmLWJmN2MtNDFmZS1hY2VhLWY2NGNlZTM4NDc0YS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.px_cs6QCVx-Hodbduhi_yTKX6h9Z8VQQgfDi5wCu-Ho"
            alt=""
          />
        </div>
            <p>
              The Mongol Empire's territory extended from present-day Poland in
              the west to the Korean peninsula in the east, from Siberia in the
              north to the Arab peninsula and Vietnam in the south, covering
              approximately 33 million square kilometers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
