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
        <h3 className={style.title}>Próximas intervenciones</h3>
      </MediaQuery>
      <div style={{ borderBottom: "1px solid white" }}>
        <DayOne />
      </div>
      <div style={{ borderBottom: "1px solid white" }}>
        {" "}
        <DayTwo />
      </div>
      <div style={{ borderBottom: "1px solid white" }}>
        {" "}
        <DayThree />
      </div>
      <div style={{ borderBottom: "1px solid white" }}>
        {" "}
        <DayFour />
      </div>
      <div style={{ borderBottom: "1px solid white" }}>
        {" "}
        <DayFive />
      </div>
    </div>
  );
};

export default Agenda;
