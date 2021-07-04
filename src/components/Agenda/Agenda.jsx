import React from "react";
import style from "./agenda.module.scss";
import MediaQuery from "react-responsive";
import DayOne from "../Agenda/components/DayOne";
import DayTwo from "../Agenda/components/DayTwo";
import DayThree from "./components/DayThree";
import DayFour from "./components/DayFour";
import DayFive from "./components/DayFive";

const Agenda = () => {
  return (
    <div className={style.container}>
      <MediaQuery maxWidth={1025}>
        <h3 className={style.title}>Próximas citas</h3>
      </MediaQuery>
      <DayOne />
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
    </div>
  );
};

export default Agenda;
