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
  const firstName1 = contextUser.citas[0].presenciales[0].firstName;
  const lastName1 = contextUser.citas[0].presenciales[0].lastName;
  const hour1 = contextUser.citas[0].presenciales[0].hour;
  const street1 = contextUser.citas[0].presenciales[0].street;
  const city1 = contextUser.citas[0].presenciales[0].city;
  const country1 = contextUser.citas[0].presenciales[0].country;
  const fullDirection1 = (
    <p>
      {street1}, {city1}, {country1}
    </p>
  );

  const firstName2 = contextUser.citas[0].telefonicas[0].firstName;
  const lastName2 = contextUser.citas[0].telefonicas[0].lastName;
  const hour2 = contextUser.citas[0].telefonicas[0].hour;

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
          <Link
            to={{
              pathname: "/detalle-cita",
              state: { fromDashboard: true },
            }}
          >
            <section>
              <div className={styles.time}>{hour1}</div>
              <div className={styles.direction}>
                <div className={styles.flex_container_direction}>
                  <div className={styles.name}>
                    <img src={locationIcon} alt="location" />
                    <h5>
                      {" "}
                      {firstName1} {lastName1}
                    </h5>
                  </div>
                  <div className={styles.arrow_container}>
                    <img src={arrow} alt="ver cita" />
                  </div>
                </div>
                <div>{fullDirection1}</div>
              </div>
            </section>
          </Link>
          <hr />
          <section>
            <div className={styles.time}>{hour2}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  <img src={phoneIcon} alt="phone" />
                  <h5>
                    {" "}
                    {firstName2} {lastName2}
                  </h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="ver cita" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default DayOne;
