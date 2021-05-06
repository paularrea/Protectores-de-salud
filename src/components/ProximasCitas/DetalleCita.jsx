import React from "react";

import notificationStyles from "../Notificaciones/notificaciones.module.scss";

const DetalleCita = ({userData}) => {
  console.log(userData, 'from Detalle')
  return (
    <div className="container-mobile">
        {/* <button onClick={goBack}>X</button> */}
      <div
        style={{
          backgroundColor: "#4283f332",
          borderLeft: "2px solid #4284F3",
        }}
        className={notificationStyles.notificaciones_container}
      >
        <p>Notificacion</p>

        <a href="">Ok, entendido.</a>
        <div className={notificationStyles.icon}>
          <img src={alert} alt="" />
        </div>
      </div>
      <div>
        <div><img src="" alt=""/> user</div>
        <div>Nombre Cliente</div>
      </div>
      <div>Telefono cliente</div>
      <div>Dirección cliente</div>

      <div>Acciones requeridas</div>
      <div>
        <h5>Listo para empezar?</h5>
        <botton>Empezar visita</botton>
      </div>
    </div>
  );
};

export default DetalleCita;
