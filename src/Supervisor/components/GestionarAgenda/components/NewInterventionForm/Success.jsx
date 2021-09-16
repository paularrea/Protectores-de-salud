import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../../../../styles/form.module.scss";
import successIcon from "../../../../../img/success.png";
import closeIcon from "../../../../../img/close.png";

const Success = () => {
  const history = useHistory();

  const handleClose = () => {
    history.push("/gestionar-agenda");
  };

  return (
    <div style={{marginTop:'4rem'}} className="container-mobile">
      <div className={styles.success_container}>
        <div className={styles.close}>
          <button onClick={handleClose}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <img src={successIcon} alt="success" />
        <h3>Información enviada correctamente.</h3>
        <p>
          Muchas gracias.
        </p>
      </div>
    </div>
  );
};

export default Success;
