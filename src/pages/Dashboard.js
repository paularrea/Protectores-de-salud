import React, { useContext } from "react";
import ProximasCitas from "../components/Agenda/Agenda.jsx";
import styles from "../styles/dashboard.module.scss";
import MediaQuery from "react-responsive";
import "../styles/App.scss";
import Navbar from "../components/Navigation/navbar.jsx";
import { UserContext } from "../UserContext.js";

import LayoutDesktop from "../components/LayoutDesktop/LayoutDesktop.jsx";
import { useGeolocation } from "../hooks/useGeolocation.js";

// const geolocationOptions = {
//   // Using this option you can define when should the location request timeout and
//   // call the error callback with timeout message.
//   timeout: 1000 * 60 * 1 // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
// };

const Dashboard = ({ Logout }) => {
  const { contextUser } = useContext(UserContext);
  const { location } = useGeolocation;
  // const [coordinates, setCoordinates] = useState({});

  // const getCoordinates = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setCoordinates({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     });
  //   });
  // };
  // const getLocation = () => {
  //   console.log(location && location, "location");
  // };
  return (
    <>
      <div className={styles.container}>
        <Navbar user={contextUser} Logout={Logout} />
        <div className={styles.flex_desktop}>
          <LayoutDesktop />
          {/* <button onClick={getCoordinates}>Show my location</button> */}
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
