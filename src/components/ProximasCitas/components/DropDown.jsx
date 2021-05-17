import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./dropdown.module.scss";
import locationIcon from "../../../img/loc.png";
import phoneIcon from "../../../img/phone.png";
import arrow from "../../../img/arrow.png";
import less from "../../../img/less.png";
import more from "../../../img/more.png";

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
                    <img src={locationIcon} alt="location" />
                    <h5>Juan García</h5>
                  </div>
                  <div className={styles.arrow_container}>
                    <img src={arrow} alt="ver cita" />
                  </div>
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
                  <img src={phoneIcon} alt="phone" />
                  <h5>Juan García</h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="ver cita" />
                </div>
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
