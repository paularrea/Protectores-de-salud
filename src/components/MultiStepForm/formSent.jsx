import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./form.module.scss";
import MediaQuery from "react-responsive"
import desktopStyle from "../../styles/dashboard.module.scss"
import successIcon from "../../img/success.png";
import closeIcon from "../../img/close.png";
import IntroNotis from "../IntroNotis/IntroNotis";

const FormSent = () => {
  const history = useHistory();
  const { contextUser } = useContext(UserContext);

  const handleClose = () => {
    history.push("/");
  };

  return (
    <div className={desktopStyle.container}>
    <div className={desktopStyle.flex_desktop}>
      <MediaQuery minWidth={1026}>
        <IntroNotis/>
      </MediaQuery>
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
    </div>
    </div>
  );
};

export default FormSent;
