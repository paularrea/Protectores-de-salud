import React, { useContext } from "react";
import ProximasCitas from "../components/ProximasCitas/ProximasCitas.jsx";
import styles from "../styles/dashboard.module.scss";
import MediaQuery from "react-responsive";
import "../styles/App.scss";
import Navbar from "../components/Nav/navbar.jsx";
import { UserContext } from "../UserContext.js";
import IntroNotis from "../components/IntroNotis/IntroNotis.jsx";

const Dashboard = ({ Logout }) => {
  const { contextUser } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <Navbar Logout={Logout} />
      <div className={styles.flex_desktop}>
        <IntroNotis />
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
  );
};

export default Dashboard;
