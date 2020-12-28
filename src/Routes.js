import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Netflixapp from "./Netflixapp";
import Whatsapp from "./Whatsapp";
import App from "./App";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/netflix" component={Netflixapp} exact />
        <Route path="/whatsapp" component={Whatsapp} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
