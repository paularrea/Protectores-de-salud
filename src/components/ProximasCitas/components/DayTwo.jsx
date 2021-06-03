import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

import styles from "./dropdown.module.scss";
import locationIcon from "../../../img/loc.png";
import phoneIcon from "../../../img/phone.png";
import arrow from "../../../img/arrow.png";
import less from "../../../img/less.png";
import more from "../../../img/more.png";

const DayTwo = () => {
  const { contextUser } = useContext(UserContext);
  const [open, setOpen] = useState(true);

  const openClose = () => {
    setOpen(!open);
  };

  const agendaDayTwo =
    contextUser &&
    contextUser.agenda.day_2.interventions.map((intervention, id) => {
      return (
        <Link key={id} to={`intervention-details-2/${intervention.intervention_id}`}>
          <section className={styles.intervention}>
            <div className={styles.time}>{intervention.hour}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  {intervention.intervention_type === "VISIT" ? (
                    <img src={locationIcon} alt="location" />
                  ) : (
                    <img src={phoneIcon} alt="phone" />
                  )}
                  <h5>{intervention.patient}</h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="see intervention details" />
                </div>
              </div>
              {intervention.intervention_type === "VISIT" && (
                <p>
                  {intervention.address} {intervention.city}{" "}
                  {intervention.country}
                </p>
              )}
            </div>
          </section>
        </Link>
      );
    });

  const date = contextUser && contextUser.agenda.day_2.date;

  return (
    <div className={styles.container}>
      <div className={styles.flex_container} onClick={openClose}>
        <div>
          <p>{date}</p>
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
      {open && <>{agendaDayTwo}</>}
    </div>
  );
};

export default DayTwo;
