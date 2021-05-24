import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

import styles from "./dropdown.module.scss";
import locationIcon from "../../../img/loc.png";
import phoneIcon from "../../../img/phone.png";
import arrow from "../../../img/arrow.png";
import less from "../../../img/less.png";
import more from "../../../img/more.png";

const DayOne = () => {
  const { contextUser } = useContext(UserContext);
  const [open, setOpen] = useState(true);

  const openClose = () => {
    setOpen(!open);
  };

  let today = new Date();

  const pacientesPresenciales = contextUser.citas[0].today[0].presenciales.map(
    (paciente, id) => {
      return (
        <Link
          to={`/detalle-cita/${id}`}
        >
          <section key={paciente.id}>
            <div className={styles.time}>{paciente.hour}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  <img src={locationIcon} alt="location" />
                  <h5>
                    {paciente.firstName} {paciente.lastName}
                  </h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="ver cita" />
                </div>
              </div>
              <div>
                <p>
                  {paciente.street}, {paciente.city}, {paciente.country}
                </p>
              </div>
            </div>
          </section>
          <hr />
        </Link>
      );
    }
  );

  const pacientesTelefonicas = contextUser.citas[0].today[0].telefonicas.map(
    (paciente, id) => {
      return (
        <Link to={`/detalle-cita/${id}`}
        >
          <section>
            <div className={styles.time}>{paciente.hour}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  <img src={phoneIcon} alt="phone" />
                  <h5>
                    {" "}
                    {paciente.firstName} {paciente.lastName}
                  </h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="ver cita" />
                </div>
              </div>
            </div>
          </section>
          <hr />
        </Link>
      );
    }
  );

  console.log(contextUser, "user dropdown");
  return (
    <div className={styles.container}>
      <div className={styles.flex_container} onClick={openClose}>
        <div>
          <p>{today.toDateString()}</p>
        </div>
        {open ? (
          <div className={styles.more_less_icons}>
            <img src={less} alt="ver menos" />
          </div>
        ) : (
          <div className={styles.more_less_icons}>
            <img src={more} alt="ver más" />
          </div>
        )}
      </div>
      {open && (
        <>
          {pacientesPresenciales}
          {pacientesTelefonicas}
        </>
      )}
    </div>
  );
};

export default DayOne;
