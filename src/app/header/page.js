"use client";
import style from "./style.css";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="main-header">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="../components/aboutMongolia">
                  <li>About Mongonia</li>
                </Link>

          <li onClick={() => setOpenMenu(!openMenu)}>Tours</li>
          {openMenu && (
            <div className="oncli">
              <Menu />
            </div>
          )}
          <li>Conatct</li>

          <Link href="../ES4edu/es4">
                  <li>ES4</li>
                </Link>
        </ul>
      </div>
      <div className="main">
        <div className="container">
          <h1>TRAVEL</h1>
          <div className="category">
            <div>
              <ul>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="../components/aboutMongolia">
                  <li>About Mongonia</li>
                </Link>

                <li className="tour">Tours</li>
                <li>Contact</li>
                <Link href="../ES4edu/es4">
                  <li>ES4</li>
                </Link>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
const Menu = () => {
  return (
    <div className="lists">
      <ul>
        <li>Naadam cultural festival</li>
        <li>Western Mongolia</li>
        <li>Winter festival</li>
        <li>Around Ulanbator</li>
      </ul>
    </div>
  );
};
