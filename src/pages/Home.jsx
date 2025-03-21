import s from "./Home.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Кількість зображень, що показуються одночасно
    slidesToScroll: 1,
  };

  return (
    <section className={s.sectionOne}>
      <Slider {...settings}>
        <div>
          <img src="../../public/IMAGE 2025-03-20 20:37:58.jpg" alt="image1" />
        </div>
        <div>
          <img src="../../public/IMAGE 2025-03-20 20:37:58.jpg" alt="image2" />
        </div>
        <div>
          <img src="../../public/IMAGE 2025-03-20 20:37:58.jpg" alt="image3" />
        </div>
        <div>
          <img src="../../public/IMAGE 2025-03-20 20:37:58.jpg" alt="image1" />
        </div>
        <div>
          <img src="../../public/IMAGE 2025-03-20 20:37:58.jpg" alt="image2" />
        </div>
        <div>
          <img src="../../public/IMAGE 2025-03-20 20:37:58.jpg" alt="image3" />
        </div>
        {/* Додайте інші зображення */}
      </Slider>
    </section>
  );
};

export default Home;
