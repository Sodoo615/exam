"use client";
import { useState } from "react";
import Contact from "../../components/contact/page.js";
import Star from "../../components/star/paje.js";
import styleTr from "../../components/travels/travel.css";
import Link from "next/link";
export default function Travels() {
  return (
    <div className="main-travel">
      <div className="recent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-plane-departure"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ff9300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727z" />
          <path d="M3 21h18" />
        </svg>
        <h1>Recent Travels</h1>
      </div>
      <div className="travel">
        <div className="cards">
          <div className="card">
            <Link href="../../components/travels/ice">
              <img src="https://nomadictrails.com/wp-content/uploads/2021/09/Horse-sledding-at-Khuvsgul-lake.jpg" />
            </Link>
            <div className="day">
              <p className="tarif"> 2300$</p>
              <div className="calendar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-clock"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(18, 47, 94)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h10" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M18 16.5v1.5l.5 .5" />
                </svg>
                <p>15 days/14 nights</p>
              </div>
            </div>

            <div className="loc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pin-filled"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h4>ICE FESTIVAL ON THE LAKE KHUV...</h4>
            </div>
            <Star></Star>
          </div>
          <div className="card">
            <img src="https://nomadictrails.com/wp-content/uploads/2022/11/Camel-Riders.jpg" />
            <div className="day">
              <p className="tarif"> 2300$</p>
              <div className="calendar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-clock"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(18, 47, 94)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h10" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M18 16.5v1.5l.5 .5" />
                </svg>
                <p>15 days/14 nights</p>
              </div>
            </div>
            <div className="loc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pin-filled"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h4>TRAVEL IN UVS PROVINCE</h4>
            </div>
            <Star></Star>
          </div>
          <div className="card">
            <img src="https://lp-cms-production.imgix.net/2023-08/shutterstock4176595.jpg?auto=format&w=1440&h=810&fit=crop&q=75" />
            <div className="day">
              <p className="tarif"> 2300$</p>
              <div className="calendar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-clock"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(18, 47, 94)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h10" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M18 16.5v1.5l.5 .5" />
                </svg>
                <p>15 days/14 nights</p>
              </div>
            </div>
            <div className="loc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pin-filled"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h4>HORSE TRAVEL</h4>
            </div>
            <Star></Star>
          </div>
          <div className="card">
            <img src="https://pbs.twimg.com/media/EvyJ-djVcAIceBO.jpg" />
            <div className="day">
              <p className="tarif"> 2300$</p>
              <div className="calendar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-clock"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(18, 47, 94)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h10" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M18 16.5v1.5l.5 .5" />
                </svg>
                <p>15 days/14 nights</p>
              </div>
            </div>
            <div className="loc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pin-filled"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h4>ULAAN GOM PROVINCE</h4>
            </div>
            <Star></Star>
          </div>
          <div className="card">
            <img src="https://xanadutravel.mn/uploads/img/2019/04/02/c3944ed1ba4717957f8fff8625edc135.jpg" />
            <div className="day">
              <p className="tarif"> 2300$</p>
              <div className="calendar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-clock"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(18, 47, 94)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h10" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M18 16.5v1.5l.5 .5" />
                </svg>
                <p>15 days/14 nights</p>
              </div>
            </div>
            <div className="loc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pin-filled"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h4>MONGOLIAN NAADAM FESTIVAL</h4>
            </div>
            <Star></Star>
          </div>
          <div className="card">
            <img src="https://www.discovermongolia.mn/uploads/tsaatan-reindeer.jpg" />
            <div className="day">
              <p className="tarif"> 2300$</p>
              <div className="calendar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-clock"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(18, 47, 94)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h10" />
                  <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M18 16.5v1.5l.5 .5" />
                </svg>
                <p>15 days/14 nights</p>
              </div>
            </div>
            <div className="loc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pin-filled"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <h4>Hustai Tour</h4>
            </div>
            <Star></Star>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
}
