import React from "react";
import "../styles/App.scss";

const LegalAdvise = ({ accept, setAccept }) => {
  const handleAccept = () => {
    setAccept(true);
    sessionStorage.setItem("Legal advise", 'accepted');
  };
  return (
    <div>
      {!accept && (
        <div className="legal-text">
          <div>
            <h5>
              CERTIFICACIÓN DE EMPLEADO DE ITINERARIO Y RESPONSABILIDADES DEL
              DÍA
            </h5>
            <p>
              Como empleado/contratista de Neighborhood Health Solutions (NHS),
              certifico que he revisado el itinerario y responsabilidades del
              día (Plan) según detallado en la aplicación de Protectores de
              Salud. Me comprometo a cumplir con el Plan conforme a las reglas,
              reglamentos, políticas, procedimientos, manual de empleados,
              Código de Conducta y Programa de Cumplimiento de NHS (Normas).
              Entiendo que cualquier incumplimiento con el Plan o violación a
              las Normas de NHS es una razón para una acción disciplinaria, que
              hasta podría incluir la terminación del empleo.
            </p>
            <button className="green-button" onClick={handleAccept}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalAdvise;
