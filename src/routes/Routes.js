import React, {useEffect} from "react";
import "../styles/App.scss"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import RecuperarContra from "../components/RecuperarContra.jsx"

const Routes = () => {

  useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/recuperar-contraseña" component={RecuperarContra} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
