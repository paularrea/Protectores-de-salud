import React, { useContext } from "react";
import ProximasCitas from "../components/ProximasCitas/ProximasCitas.jsx";
import styles from "../styles/dashboard.module.scss";
import MediaQuery from "react-responsive";
import "../styles/App.scss";
import Navbar from "../components/Navigation/navbar.jsx";
import { UserContext } from "../UserContext.js";
// import useCurrentLocation from "../hooks/useCurrentLocation.js";
import LayoutDesktop from "../components/LayoutDesktop/LayoutDesktop.jsx";

// const geolocationOptions = {
//   // Using this option you can define when should the location request timeout and
//   // call the error callback with timeout message.
//   timeout: 1000 * 60 * 1 // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
// };

const Dashboard = ({ Logout }) => {
  const { contextUser } = useContext(UserContext);
  // const { location, error } = useCurrentLocation(geolocationOptions);


  // const userAgent = navigator.userAgent;

  // console.log(location, error, 'location')


  return (
    <>
        <div className={styles.container}>
          <Navbar user={contextUser} Logout={Logout} />
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

export default Dashboard;
