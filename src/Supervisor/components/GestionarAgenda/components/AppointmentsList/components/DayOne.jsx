import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../../../UserContext";

import styles from "./dropdown.module.scss";
import locationIcon from "../../../../../../img/loc.png";
import phoneIcon from "../../../../../../img/phone.png";
import arrow from "../../../../../../img/arrow.png";
import less from "../../../../../../img/less.png";
import more from "../../../../../../img/more.png";

const DayOne = () => {
  const { contextUser } = useContext(UserContext);
  const [open, setOpen] = useState(true);

  const openClose = () => {
    setOpen(!open);
  };

  console.log(contextUser, 'context')

  const agendaDayOne =
    contextUser &&
    contextUser.agenda.day_0.interventions.map((intervention, id) => {
      return (
        <Link
          key={id}
          to={`intervention-details-1/${intervention.intervention_id}`}
        >
          <section className={styles.intervention}>
            <div className={styles.time}>{intervention.intervention_time}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  {intervention.intervention_type === "VISIT" ? (
                    <img src={locationIcon} alt="location" />
                  ) : (
                    <img src={phoneIcon} alt="phone" />
                  )}
                  <h5>
                    {intervention.patient_first_name}{" "}
                    {intervention.patient_middle_name}{" "}
                    {intervention.patient_last_name}{" "}
                    {intervention.patient_second_last_name}
                  </h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="see intervention details" />
                </div>
              </div>
              {intervention.intervention_type === "VISIT" && (
                <p>
                  {intervention.residence_address}, {intervention.residence_postal_code} {intervention.residence_city}{" "}
                  {intervention.residence_state}, {intervention.residence_country_name}
                </p>
              )}
            </div>
          </section>
        </Link>
      );
    });

  const date = contextUser && contextUser.agenda.day_0.date;

  return (
    <div className={styles.container}>
      <div className={styles.flex_container}>
        <div onClick={openClose}>
          <p>{date}</p>
        </div>
        <div className={styles.more_less_icons}>
          <div onClick={openClose}>
            {open ? (
              <img src={less} alt="ver menos" />
            ) : (
              <img src={more} alt="ver más" />
            )}
          </div>
        </div>
      </div>
      {open && <>{agendaDayOne}</>}
    </div>
  );
};

export default DayOne;
