import React from "react";
// import DropDown from "./components/DropDown";
import DayOne from "../ProximasCitas/components/DayOne"
import DayTwo from "../ProximasCitas/components/DayTwo"
import style from "./proximasCitas.module.scss"
import DayThree from "./components/DayThree";

const ProximasCitas = () => {
  return (
    <div className={style.container}>
      <h3>Próximas citas</h3>
      {/* <DropDown/> */}
      <DayOne/>
      <DayTwo/>
      <DayThree/>
    </div>
  );
};

export default ProximasCitas;
