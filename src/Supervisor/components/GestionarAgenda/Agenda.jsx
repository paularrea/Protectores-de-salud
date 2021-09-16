import React from "react";
import styles from "./agenda.module.scss";
// import AppointmentsList from "./components/AppointmentsList/AppointmentsList";
import SelectPatient from "./components/SelectPatient";
import SelectPDS from "./components/SelectPds";

const Agenda = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown_container}>
        <h2>Ver agenda</h2>
        <p>Selecciona la agenda de un Protector de Salud o un Paciente</p>
        <SelectPDS />
        <SelectPatient />
      </div>
      <div className={styles.agenda}>
        <h4>Próximas intervenciones</h4>
        <div className="container-mobile">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <p
              style={{
                color: "gray",
                fontSize: "25px",
                width: "50%",
                textAlign: "center",
              }}
            >
              Selecciona un PDS o Paciente para acceder a su agenda.
            </p>
          </div>
          {/* <AppointmentsList /> */}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
