import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import { UserContext } from "../UserContext";
import DetalleCita from "../components/ProximasCitas/DetalleCita";
import RecuperarContra from "../components/RecuperarContra.jsx";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";

const Routes = () => {
  const [contextUser, setContextUser] = useState();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/paularrea/json-repo/users")
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
          <Route path="/detalle-cita/:id" render={(props) => <DetalleCita {...props} />} />
          <Route exact path="/form" component={MultiStepForm} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
