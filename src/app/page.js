"use client";

import Header from "./header/page.js";
import Travels from "./components/travels/page.js";
import ImageSlider from "./components/slider/page.js";
import ScrollToTopButton from "./components/scroll/page.js";
import Social from "./components/socials/net.js";
export default function Home() {
  const images = [
    "dalai.jpeg",
    "khuvsgul-3.jpg",
    "kazak.avif",
    "otgontenger.jpeg",
    "zavi.jpeg",
  ];
  return (
    <div>
      <Social/>
      <Header></Header>
      <div>
        {/* <Socials></Socials> */}
        <ImageSlider images={images} />
      </div>
      <div>
        <Travels></Travels>
        <ScrollToTopButton />
      </div>
    </div>
  );
}
