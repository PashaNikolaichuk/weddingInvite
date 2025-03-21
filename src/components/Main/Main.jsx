import s from "./Main.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className={s.videoContainer}>
      <video src="../../public/IMG_2221.MP4" autoPlay loop></video>
      <div className={s.text}>
        <h2>Wendding day</h2>
        <h1>Mykola and Valentina</h1>
      </div>
      <nav>
        <NavLink to="/home">
          <Button />
        </NavLink>
      </nav>
    </div>
  );
};

export default Main;
