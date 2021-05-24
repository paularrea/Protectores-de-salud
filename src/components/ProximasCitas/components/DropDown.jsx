import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

import styles from "./dropdown.module.scss";
import locationIcon from "../../../img/loc.png";
import phoneIcon from "../../../img/phone.png";
import arrow from "../../../img/arrow.png";
import less from "../../../img/less.png";
import more from "../../../img/more.png";

const DropDown = (e) => {
  const { contextUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);

  const handleDropdownClick = (e) => {
    setIsOpen(!isOpen);
};

  function groupBy(key) {
    return function group(array) {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, []);
    };
  }
  const groupAppointmentsByDay = groupBy("day")(contextUser.citas);
  const appointmentsByDayIds = Object.keys(groupAppointmentsByDay);
  const citasPorDia = appointmentsByDayIds.map((activityID) => ({
    id: activityID,
    citas: groupAppointmentsByDay[activityID],
  }));

  const List = citasPorDia.map((group, index) => (
    <div key={group.id} className={styles.container}>
      <div id={index} className={styles.flex_container} onClick={handleDropdownClick}>
        <div>
          <p>{group.id}</p>
        </div>
        {isOpen ? (
          <div className={styles.more_less_icons}>
            <img src={less} alt="ver menos" />
          </div>
        ) : (
          <div className={styles.more_less_icons}>
            <img src={more} alt="ver más" />
          </div>
        )}
      </div>
      {isOpen &&
        group.citas.map((cita, id) => (
          <>
          <Link to={`detalle-cita/${cita.id}`}>
            <section key={id}>
              <div className={styles.time}>{cita.hour}</div>
              <div className={styles.direction}>
                <div className={styles.flex_container_direction}>
                  <div className={styles.name}>
                    {cita.type === "presencial" ? (
                      <img src={locationIcon} alt="location" />
                    ) : (
                      <img src={phoneIcon} alt="phone" />
                    )}
                    <h5>
                      {cita.firstName} {cita.lastName}
                    </h5>
                  </div>
                  <div className={styles.arrow_container}>
                    <img src={arrow} alt="ver cita" />
                  </div>
                </div>
                {cita.type === "presencial" && (
                  <p>
                    {cita.street} {cita.city} {cita.country}
                  </p>
                )}
              </div>
            </section>
            <hr />
            </Link>
          </>
        ))}
    </div>
  ));

  return [List];
};

export default DropDown;
