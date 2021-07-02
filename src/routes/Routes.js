import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import { UserContext } from "../UserContext";
import DetalleCitaDayOne from "../components/ProximasCitas/DetalleCitaDayOne";
import DetalleCitaDayTwo from "../components/ProximasCitas/DetalleCitaDayTwo";
import DetalleCitaDayThree from "../components/ProximasCitas/DetalleCitaDayThree";
import DetalleCitaDayFour from "../components/ProximasCitas/DetalleCitaDayFour";
import DetalleCitaDayFive from "../components/ProximasCitas/DetalleCitaDayFive";
import RecuperarContra from "../components/RecuperarContra.jsx";
import InterventionForm from "../components/Forms/InterventionForm";
import FormSent from "../components/Forms/formSent";
import EvaluationForm from "../components/Forms/EvaluationForm";
import EditProfile from "../components/Navigation/components/editProfile";

const Routes = () => {
  const [contextUser, setContextUser] = useState();

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/web_dynamic_content"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setContextUser(data[0]);
      });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ contextUser, setContextUser }}>
          <Route exact path="/" component={Login} />
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
          <Route exact path="/evaluation-form" component={EvaluationForm} />
          <Route exact path="/success-form" component={FormSent} />
          <Route exact path="/edit-profile" component={EditProfile} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
