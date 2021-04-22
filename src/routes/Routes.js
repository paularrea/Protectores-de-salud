import React, {useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {

  useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
