import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// import { UserContext } from "../../UserContext";
import styles from "./form.module.scss";
import MediaQuery from "react-responsive";
import desktopStyle from "../../styles/workerDashboard.module.scss";
import successIcon from "../../img/success.png";
import closeIcon from "../../img/close.png";
import LayoutDesktop from "../LayoutDesktop/LayoutDesktop";

const FormSent = () => {
  const history = useHistory();
  const location = useLocation();
  // const { contextUser } = useContext(UserContext);

  const handleClose = () => {
    history.push(location.state.patientURL);
  };

  return (
    <div className={desktopStyle.container}>
      <div className={desktopStyle.flex_desktop}>
        <MediaQuery minWidth={1026}>
          <LayoutDesktop />
        </MediaQuery>
        <div className="container-mobile">
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
      </div>
    </div>
  );
};

export default FormSent;
