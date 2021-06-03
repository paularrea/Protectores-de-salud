import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import { UserContext } from "../UserContext";
import DetalleCitaDayOne from "../components/ProximasCitas/DetalleCitaDayOne";
import DetalleCitaDayTwo from "../components/ProximasCitas/DetalleCitaDayTwo";
import DetalleCitaDayThree from "../components/ProximasCitas/DetalleCitaDayThree";
import RecuperarContra from "../components/RecuperarContra.jsx";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

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
            path="/intervention-details-2/:id"
            render={(props) => <DetalleCitaDayTwo {...props} />}
          />
          <Route
            path="/intervention-details-1/:id"
            render={(props) => <DetalleCitaDayOne {...props} />}
          />
          <Route
            path="/intervention-details-3/:id"
            render={(props) => <DetalleCitaDayThree {...props} />}
          />
          <Route exact path="/form" component={MultiStepForm} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
