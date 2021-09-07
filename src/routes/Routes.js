import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import { UserContext } from "../UserContext";
import DetalleCitaDayOne from "../components/Agenda/DetalleCitaDayOne";
import DetalleCitaDayTwo from "../components/Agenda/DetalleCitaDayTwo";
import DetalleCitaDayThree from "../components/Agenda/DetalleCitaDayThree";
import DetalleCitaDayFour from "../components/Agenda/DetalleCitaDayFour";
import DetalleCitaDayFive from "../components/Agenda/DetalleCitaDayFive";
import RecuperarContra from "../components/RecuperarContra.jsx";
import InterventionForm from "../components/Forms/Intervention";
import FormSent from "../components/Forms/formSent";
import EvaluationForm from "../components/Forms/Evaluation";
import EditProfile from "../components/Navigation/components/editProfile";
import Inicio from "../Supervisor/pages/Inicio";
import GestionarAgenda from "../Supervisor/pages/GestionarAgenda";
import DashboardPDS from "../Supervisor/pages/DashboardPDS";
import DashboardPacientes from "../Supervisor/pages/DashboardPacientes";
import Navigation from "../Supervisor/Navigation/Navigation";
import WorkerDashboard from "../pages/WorkerDashboard";
import Agenda from "../Supervisor/components/GestionarAgenda/Agenda";
import AppointmentSuggestion from "../components/Forms/AppointmentSuggestion.jsx";
import IntervencionesPendientes from "../Supervisor/components/GestionarAgenda/IntervencionesPendientes";
import NuevaIntervencion from "../Supervisor/components/GestionarAgenda/NuevaIntervencion";
const Routes = () => {
  const [contextUser, setContextUser] = useState();

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/v2-dynamic-content"
      // "http://localhost:3004/users"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContextUser(data[1]);
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ contextUser, setContextUser }}>
          <Route exact path="/" component={Login} />
          <Route exact path="/community-worker" component={WorkerDashboard} />

          {/* Community worker dashboard */}
          <Route path="/recuperar-contraseña" component={RecuperarContra} />
          <Route
            path="/intervention-details-1/:id"
            render={(props) => <DetalleCitaDayOne {...props} />}
          />
          <Route
            path="/intervention-details-2/:id"
            render={(props) => <DetalleCitaDayTwo {...props} />}
          />
          <Route
            path="/intervention-details-3/:id"
            render={(props) => <DetalleCitaDayThree {...props} />}
          />
          <Route
            path="/intervention-details-4/:id"
            render={(props) => <DetalleCitaDayFour {...props} />}
          />
          <Route
            path="/intervention-details-5/:id"
            render={(props) => <DetalleCitaDayFive {...props} />}
          />
          <Route exact path="/pds-form" component={InterventionForm} />
          <Route
            exact
            path="/appointment-suggestion"
            component={AppointmentSuggestion}
          />
          <Route exact path="/evaluation-form" component={EvaluationForm} />
          <Route exact path="/success-form" component={FormSent} />
          <Route exact path="/edit-profile" component={EditProfile} />

          {/* Supervisor dashboard */}
          <RouteWrapper
            exact
            path="/supervisor"
            component={Inicio}
            layout={Navigation}
          />
          <RouteWrapper
            exact
            path="/gestionar-agenda"
            component={GestionarAgenda}
            layout={Navigation}
          />
          <RouteWrapper
            exact
            path="/dashboard-pds"
            component={DashboardPDS}
            layout={Navigation}
          />
          <RouteWrapper
            exact
            path="/dashboard-pacientes"
            component={DashboardPacientes}
            layout={Navigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/agenda"
            component={Agenda}
            layout={Navigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/intervenciones-pendientes"
            component={IntervencionesPendientes}
            layout={Navigation}
          />
          <RouteWrapper
            path="/gestionar-agenda/nueva-intervencion"
            component={NuevaIntervencion}
            layout={Navigation}
          />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default Routes;
