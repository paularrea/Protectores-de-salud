import React, { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import style from "./proximasCitas.module.scss"


const ProximasCitas = () => {
  const [citasPresenciales, setCitasPresenciales] = useState();
  const [citasTelefonicas, setCitasTelefonicas] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCitasPresenciales(data[0].citas[0].presenciales);
        setCitasTelefonicas(data[0].citas[0].telefonicas);
        console.log(citasPresenciales, "citas Presenciales");
        console.log(citasTelefonicas, "citas Telefonicas");
      });
  }, []);

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
      <DropDown/>
      <DropDown/>
      <DropDown/>
      {/* <div>
        <h5>{today.toDateString()}</h5>
        <p></p>
      </div>
      <div>
        <h5>{tomorrow.toDateString()}</h5>
      </div>
      <div>
        <h5>{TwoDaysFromToday.toDateString()}</h5>
      </div>
      <div>
        <h5>{ThreeDaysFromToday.toDateString()}</h5>
      </div> */}
    </div>
  );
};

export default ProximasCitas;
