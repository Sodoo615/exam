import style from "./style.css";
export default function Contact() {
  return (
    <div className="holboo">
      <div className="flex">
        <div className="office">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-building-bank"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M3 10l18 0" />
            <path d="M5 6l7 -3l7 3" />
            <path d="M4 10l0 11" />
            <path d="M20 10l0 11" />
            <path d="M8 14l0 3" />
            <path d="M12 14l0 3" />
            <path d="M16 14l0 3" />
          </svg>
          <div className="ourOffice">
            <h3>Our Office</h3>
            <p className="ub">
              {" "}
              Улаанбаатар хот Баянзүрх дүүрэг 6-р хороо Эрхэс төвийн оффис 701
            </p>
          </div>
        </div>
        <div className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <div className="ourMail">
            <h3>Mail us</h3>
            <p className="ub"> es4@mongoltravel-edu.com</p>
          </div>
        </div>
        <div className="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-building-bank"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M3 10l18 0" />
            <path d="M5 6l7 -3l7 3" />
            <path d="M4 10l0 11" />
            <path d="M20 10l0 11" />
            <path d="M8 14l0 3" />
            <path d="M12 14l0 3" />
            <path d="M16 14l0 3" />
          </svg>
          <div className="ourPhone">
            <h3>Call us</h3>
            <p className="dugaar"> +(976) - 99689839 , +(976) - 11457594</p>
          </div>
        </div>
      </div>
      <div className="reserved">
          <p>© Your Site Name. All Rights Reserved.</p>
        </div>
    </div>
  );
}
