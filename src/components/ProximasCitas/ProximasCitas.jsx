import React from "react";
// import DropDown from "./components/DropDown";
import style from "./proximasCitas.module.scss";
import MediaQuery from "react-responsive";
import DayOne from "../ProximasCitas/components/DayOne";
import DayTwo from "../ProximasCitas/components/DayTwo";
import DayThree from "./components/DayThree";
import DayFour from "./components/DayFour";
import DayFive from "./components/DayFive";

const ProximasCitas = () => {
  return (
    <div className={style.container}>
      <MediaQuery maxWidth={1025}>
        <h3 className={style.title}>Próximas citas</h3>
      </MediaQuery>
      {/* <DropDown/> */}
      <DayOne />
      <DayTwo />
      <DayThree />
      <DayFour />
      <DayFive />
    </div>
  );
};

export default ProximasCitas;
