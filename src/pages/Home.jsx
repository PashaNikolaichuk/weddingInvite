import s from "./Home.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <section className={s.sectionOne}>
      <h2 className={s.titleHome}>Location</h2>
      <p className={s.paragrap}>for you</p>
      <div className="carousel rounded-box w-64">
        <div className="carousel-item w-full">
          <img
            src="../../public/img/img3.jpg"
            className="w-full"
            alt="wendding"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../public/img/img2.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="/img/img1.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../public/img/img3.jpg"
            className="w-full"
            alt="wendding"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../public/img/img2.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="/img/img1.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
