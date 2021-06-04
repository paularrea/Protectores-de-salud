import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./form.module.scss";
import successIcon from "../../img/success.png";
import closeIcon from "../../img/close.png";

const FormSent = () => {
  const history = useHistory();
  const { contextUser } = useContext(UserContext);

  const handleClose = () => {
    history.push("/");
  };

  return (
    <div className="container-mobile">
      <div className={styles.success_container}>
        <div className={styles.close}>
          <button onClick={handleClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <img src={successIcon} alt="success" />
        <h3>Intervención enviada correctamente.</h3>
        <p>
          Muchas gracias por enviar tu intervención,{" "}
          {contextUser.supervisor_name}. Recibirás confirmación también en tu
          correo electrónico.
        </p>
      </div>
    </div>
  );
};

export default FormSent;
