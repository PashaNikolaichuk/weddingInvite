import s from "./Main.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className={s.videoContainer}>
      <video src="/IMG_2221.MP4" autoPlay loop muted></video>
      <div className={s.text}>
        <h2>Wedding day</h2>
        <h1 className={s.title}>MUKOLA & VALENTINA</h1>
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
