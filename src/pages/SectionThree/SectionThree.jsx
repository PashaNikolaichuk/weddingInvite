import s from "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <section className={s.sectionOne}>
      <div className={s.container}>
        <h2 className={s.titleHome}>Location</h2>
        <p className={s.paragrap}>for you</p>
        <div className="carousel rounded-box w-64">
          <div className="carousel-item w-full">
            <img src="/img/img3.jpg" className="w-full" alt="wendding" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="/img/img2.jpg"
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
            <img src="/img/img3.jpg" className="w-full" alt="wendding" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="/img/img2.jpg"
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
        <p className={s.adress}>Чекаємо вас за адресу:</p>
        <a
          className={s.adressLocation}
          href="https://www.google.com.ua/maps/place/Holuboe+Ozero/@51.3657991,28.8286746,16.9z/data=!4m6!3m5!1s0x472989d0a9e4b311:0xe34b59a6c82ddbe9!8m2!3d51.3658199!4d28.831457!16s%2Fg%2F11h28bj9b9?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
        >
          ПЕРЕЙТИ НА КАРТУ З ЛОКАЦІЄЮ
        </a>
      </div>
    </section>
  );
};

export default SectionThree;
