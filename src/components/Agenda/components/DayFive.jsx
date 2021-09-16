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

const DayOne = () => {
  const { contextUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };

  const agendaDayOne =
    contextUser &&
    contextUser.agenda.day_4.list_of_events.map((intervention, id) => {
      return (
        <Link
          key={id}
          to={`intervention-details-5/${intervention.agenda_event_id}`}
        >
          <section className={styles.intervention}>
            <div className={styles.time}>{intervention.local_time_12h}</div>
            <div className={styles.direction}>
              <div className={styles.flex_container_direction}>
                <div className={styles.name}>
                  {intervention.intervention_type === "VISIT" ? (
                    <img src={locationIcon} alt="location" />
                  ) : (
                    <img src={phoneIcon} alt="phone" />
                  )}
                  <h5>
                    {intervention.patient_info.patient_first_name}{" "}
                    {intervention.patient_info.patient_middle_name}{" "}
                    {intervention.patient_info.patient_last_name}{" "}
                    {intervention.patient_info.patient_second_last_name}
                  </h5>
                </div>
                <div className={styles.arrow_container}>
                  <img src={arrow} alt="see intervention details" />
                </div>
              </div>
              {intervention.intervention_type === "VISIT" && (
                <p>
                  {intervention.patient_info.residence_address},{" "}
                  {intervention.patient_info.residence_postal_code}{" "}
                  {intervention.patient_info.residence_city}{" "}
                  {intervention.patient_info.residence_state},{" "}
                  {intervention.patient_info.residence_country_name}
                </p>
              )}
            </div>
          </section>
        </Link>
      );
    });

  const date = contextUser && contextUser.agenda.day_4.date_as_text;

  return (
    <div className={styles.container}>
      <div className={styles.flex_container}>
        <div onClick={openClose}>
          <p>{date}</p>
        </div>
        <div className={styles.more_less_icons}>
          <ValidationButton validationDate={date} />
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
