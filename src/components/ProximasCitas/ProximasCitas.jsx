import React from "react";
import DayOne from "./components/DayOne";
import DayTwo from "./components/DayTwo";
import DropDown from "./components/DropDown";
import style from "./proximasCitas.module.scss"


const ProximasCitas = () => {

  let today = new Date();
  let tomorrow = new Date();
  let TwoDaysFromToday = new Date();
  let ThreeDaysFromToday = new Date();
  tomorrow.setDate(today.getDate() + 1);
  TwoDaysFromToday.setDate(today.getDate() + 2);
  ThreeDaysFromToday.setDate(today.getDate() + 3);

  console.log(today.toDateString(), "today date");

  return (
    <div className={style.container}>
      <h3>Próximas citas</h3>
      <DayOne/>
      <DayTwo/>
    </div>
  );
};

export default ProximasCitas;
