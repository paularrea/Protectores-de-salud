import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";
import { UserContext } from "../../../UserContext";
import "./switchButton.css"
import { FormControlLabel, Switch } from "@material-ui/core";

const BlueSwitch = withStyles({
  switchBase: {
    color: blue[400],
    "&$checked": {
      color: green[400],
    },
    "&$checked + $track": {
      backgroundColor: green[900],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function ValidationButton({ validationDate }) {
  const [checked, setCheked] = useState(false)
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

  const handleChange = (event) => {
    setCheked(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <BlueSwitch
            checked={checked}
            onChange={handleChange}
            onClick={handleClick}
            name="switchButton"
          />
        }
        label="Validar día"
      />
    </div>
  );
}
