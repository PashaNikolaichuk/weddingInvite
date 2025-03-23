import s from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <section className={s.sectionTwo}>
      <div className={s.container}>
        <div className={s.scaleCenter}>
          <p className={s.dataOne}>
            22<span>08</span>
            <span>25</span>
          </p>
          <p className={s.saveDate}>SAVE THE DATE</p>
        </div>
        <div className={s.titleName}>
          <p className={s.fadeInLeft}>MUKOLA</p>
          <p className={s.fadeInBck}>&</p>
          <p className={s.fadeInRight}>VALENTINA</p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
