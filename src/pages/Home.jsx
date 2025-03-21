import s from "./Home.module.css";

const Home = () => {
  return (
    <section className={s.sectionOne}>
      <h2 className={s.weddingData}>Дорогі гості!</h2>

      <p>
        У нашому житті настає щасливі зміни! Ми хочемо, щоб в цей день ви були
        поряд біля нас найближчі і дорогі для нас люди. Будемо розділяти з вами
        чудове свято в день нашого весілля, яке відбудеться: 23 СЕРПНЯ 2025 РОКУ
        З любов'ю, Микола та Валентина.
      </p>
    </section>
  );
};

export default Home;
