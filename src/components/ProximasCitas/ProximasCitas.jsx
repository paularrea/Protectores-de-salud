import React from "react";
import DropDown from "./components/DropDown";
import style from "./proximasCitas.module.scss"

const ProximasCitas = ({ userData }) => {

  // useEffect(() => {
  //   fetch("http://localhost:8000/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCitasPresenciales(data[0].citas[0].presenciales);
  //       setCitasTelefonicas(data[0].citas[0].telefonicas);
  //       console.log(citasPresenciales, "citas Presenciales");
  //       console.log(citasTelefonicas, "citas Telefonicas");
  //     });
  // }, []);

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
      <DropDown userData={userData}/>
      <DropDown userData={userData}/>
      <DropDown userData={userData}/>
    </div>
  );
};

export default ProximasCitas;
