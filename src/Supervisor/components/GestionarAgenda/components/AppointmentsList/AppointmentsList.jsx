import React from "react";
import style from "./agendaList.module.scss";
import DayOne from "./components/DayOne";

const AppointmentsList = () => {
  return (
    <div className={style.container}>
      <DayOne />
    </div>
  );
};

export default AppointmentsList;
