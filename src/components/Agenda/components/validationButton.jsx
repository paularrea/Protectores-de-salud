import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../UserContext";
import styles from "./dropdown.module.scss"

const ValidationButton = ({validationDate}) => {
  const [buttonValidationEvent, setButtonValidationEvent] = useState({});
  const { contextUser } = useContext(UserContext);

  useEffect(() => {
    setButtonValidationEvent({
      action: "VALIDATE_DAY_EVENT",
      local_date_time: new Date().toString(),
      utc_date_time: new Date().toUTCString(),
      validation_date: validationDate,
      device_user_agent: navigator.userAgent,
      user_id: contextUser && contextUser.id,
    });
  }, [contextUser, validationDate]);

  const handleClick = () => {
    console.log(buttonValidationEvent);
  };
  return <button className={styles.validate_button} onClick={handleClick}>Validar día</button>
};

export default ValidationButton;
