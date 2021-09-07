import React, { useContext } from "react";
import ProximasCitas from "../components/Agenda/Agenda.jsx";
import styles from "../styles/workerDashboard.module.scss";
import MediaQuery from "react-responsive";
import "../styles/App.scss";
import Navbar from "../components/Navigation/navbar.jsx";
import { UserContext } from "../UserContext.js";
import LayoutDesktop from "../components/LayoutDesktop/LayoutDesktop.jsx";

const WorkerDashboard = () => {
  const { contextUser } = useContext(UserContext);

  return (
    <>
      <div className={styles.container}>
        <Navbar user={contextUser} />
        <div className={styles.flex_desktop}>
          <LayoutDesktop />
          <section>
            <MediaQuery minWidth={1026}>
              <h3 style={{ marginBottom: "1rem" }}>Próximas citas</h3>
              <div className="container-mobile">
                <ProximasCitas user={contextUser} />
              </div>
            </MediaQuery>
          </section>
        </div>

        <MediaQuery maxWidth={1025}>
          <ProximasCitas user={contextUser} />
        </MediaQuery>
      </div>
    </>
  );
};

export default WorkerDashboard;
