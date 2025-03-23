import s from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <section className={s.sectionTwo}>
      <div className={s.container}>
        <div className={s.animation}>
          <p>Дорогі друзі!</p>
          <p>
            Запрошуємо відсвяткувати найважливішу подію у нашому житті – день
            нашого весілля!
          </p>
          <p className={s.data}>22.08.2025</p>
          <p> Ми будемо раді бачити вас у колі наших гостей!</p>
          <p> Микола та Валентина</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
