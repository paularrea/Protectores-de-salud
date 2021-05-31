import React, { useState, useEffect } from "react";
import stylesForm from "../../styles/login.module.scss";
import styles from "./form.module.scss";
import { TextField } from "@material-ui/core";

const Step1 = (props) => {
  const [details, setDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    secondLastName: "",
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>PASO {props.currentStep}</p>
      <h2>Verificar datos personales</h2> 
      </div>
      <div style={{marginTop:'13rem'}}>
      <div className={stylesForm.form_container}>
        <TextField
          className={stylesForm.input}
          id="middleName"
          label="Primer Nombre"
          variant="outlined"
          type="text"
          name="middleName"
          onChange={(e) =>
            setDetails({ ...details, middleName: e.target.value })
          }
          value={details.middleName}
        />
        <TextField
          className={stylesForm.input}
          id="lastName"
          label="Segundo Nombre"
          variant="outlined"
          type="text"
          name="lastName"
          onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
          value={details.lastName}
        />
        <TextField
          className={stylesForm.input}
          id="secondLastName"
          label="Primer Apellido"
          variant="outlined"
          type="text"
          name="secondLastName"
          onChange={(e) =>
            setDetails({ ...details, secondLastName: e.target.value })
          }
          value={details.secondLastName}
        />
        <TextField
          className={stylesForm.input}
          id="firstName"
          label="Segundo Apellido"
          variant="outlined"
          type="text"
          name="firstName"
          onChange={(e) =>
            setDetails({ ...details, firstName: e.target.value })
          }
          value={details.firstName}
        />
      </div>{" "}
    </div>
    </div>
  );
}

export default Step1;
