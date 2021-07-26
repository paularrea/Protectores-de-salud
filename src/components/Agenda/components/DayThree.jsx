import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

import styles from "./dropdown.module.scss";
import locationIcon from "../../../img/loc.png";
import phoneIcon from "../../../img/phone.png";
import arrow from "../../../img/arrow.png";
import less from "../../../img/less.png";
import more from "../../../img/more.png";
import ValidationButton from "./validationButton";

const DayThree = () => {
  const { contextUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  const agendaDayThree =
    contextUser &&
    contextUser.agenda.day_3.interventions.map((intervention, id) => {
      return (
        <Link key={id}  to={`intervention-details-3/${intervention.intervention_id}`}>
          {" "}
          <section className={styles.intervention} >
            <div className={styles.time}>{intervention.hour}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  {intervention.intervention_type === "VISIT" ? (
                    <img src={locationIcon} alt="location" />
                  ) : (
                    <img src={phoneIcon} alt="phone" />
                  )}
                  <h5>{intervention.patient_name} {intervention.patient_middle_name} {intervention.patient_last_name} {intervention.patient_second_last_name}</h5>
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

  const date = contextUser && contextUser.agenda.day_3.date;

  return (
    <div className={styles.container}>
      <div className={styles.flex_container} onClick={openClose}>
        <div>
          <p>{date}</p>
        </div>
        <div className={styles.more_less_icons}>
          <ValidationButton validationDate={date}/>
          {open ? (
            <img src={less} alt="ver menos" />
          ) : (
            <img src={more} alt="ver más" />
          )}
        </div>
      </div>
      {open && <>{agendaDayThree}</>}
    </div>
  );
};

export default DayThree;
