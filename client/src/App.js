import React from "react";
import { Route, Switch } from "react-router-dom";
import Configurator from "./Configurator";
import { LoginPage } from "./LoginPage";
import { NotFoundPage } from "./NotFoundPage";
import { SignupPage } from "./SignupPage";
import { CheckoutPage } from "./CheckoutPage";
import { OrderPage } from "./OrderPage";
import { OrderListPage } from "./OrdersListPage";
import { Navbar } from "./NavBar";
import "./styles/base.scss";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Configurator />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/orders-list">
          <OrderListPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
