import React from "react";
import { Button } from "../components/Button";
import * as ROUTES from "../Routes";
import { Link } from "react-router-dom";
import { usePizza } from "../PizzaContext";

export const CheckoutPage = () => {
  const { pizzaConfig, totalCost } = usePizza();
  const { SIZE, DOUGH, SAUCE, CHEESE, VEGGIES, MEAT } = pizzaConfig;
  return (
    <div className="container">
      <div>
        <span className="order-item-name">Size: </span>
        <span>{SIZE}</span>
      </div>
      <div>
        <span className="order-item-name">Dough: </span>
        <span>{DOUGH}</span>
      </div>
      <div>
        <span className="order-item-name">Sauce: </span>
        <span>{SAUCE}</span>
      </div>
      <div>
        <span className="order-item-name">Cheese: </span>
        <span>{CHEESE.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Veggies: </span>
        <span>{VEGGIES.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Meat: </span>
        <span>{MEAT.join(", ")}</span>
      </div>
      <div>
        <span className="order-item-name">Total cost: </span>
        <span>{totalCost} RUB</span>
      </div>
      <div className="container">
        <Link to={ROUTES.ORDER}>
          <Button className="order-button">Order</Button>
        </Link>
      </div>
    </div>
  );
};
