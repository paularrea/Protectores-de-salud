import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./dropdown.module.scss";
import locationIcon from "../../../img/loc.png";
import phoneIcon from "../../../img/phone.png";

const DropDown = ({ userData }) => {
  const [open, setOpen] = useState(true);

  const openClose = () => {
    setOpen(!open);
  };

  console.log(userData, "user dropdown");
  return (
    <div className={styles.container}>
      <div className={styles.flex_container} onClick={openClose}>
        <div>
          <p>Hoy, martes 30 de marzo</p>
        </div>
        {open ? <div>-</div> : <div>+</div>}
      </div>
      {open && (
        <>
          <Link
            userData={userData}
            to={{
              pathname: "/detalle-cita",
              state: { fromDashboard: true },
            }}
          >
            <section>
              <div className={styles.time}>12:00 a.m.</div>
              <div className={styles.direction}>
                <div className={styles.flex_container_direction}>
                  <div className={styles.name}>
                    <img src={locationIcon} alt="" />
                    <h5>Juan García</h5>
                  </div>
                  <div>{">"}</div>
                </div>
                <p>Calle Lalaá 23, 08083, Puerto Rico</p>
              </div>
            </section>
          </Link>
          <hr />
          <section>
            <div className={styles.time}>12:00 a.m.</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  <img src={phoneIcon} alt="" />
                  <h5>Juan García</h5>
                </div>
                <div>{">"}</div>
              </div>
              <p>Calle Lalaá 23, 08083, Puerto Rico</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default DropDown;
