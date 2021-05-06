import React, {useState, useEffect} from "react";
import "../styles/App.scss"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import DetalleCita from "../components/ProximasCitas/DetalleCita"
import RecuperarContra from "../components/RecuperarContra.jsx"

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/recuperar-contraseña" component={RecuperarContra} />
        <Route path="/detalle-cita" component={DetalleCita} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
