import React from "react";
import { OptionsGroup } from "./components/OptionsGroup";
import { Button } from "./components/Button";
import { PIZZA_OPTIONS, INITIAL_PIZZA_CONFIG } from "./configData";
import { totalCostCalc } from "./totalCostCalc";
import { reducer } from "./reducers";
import { useHistory } from "react-router-dom";
import * as ROUTES from "./Routes";

export default function Configurator() {
  const history = useHistory();
  const [pizzaConfig, setPizzaConfig] = React.useReducer(
    reducer,
    INITIAL_PIZZA_CONFIG
  );

  const totalCost = totalCostCalc(pizzaConfig);

  const handleCheckout = e => {
    e.preventDefault();
    history.push(ROUTES.CHECKOUT);
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleCheckout}>
        <fieldset>
          <legend>Pizza Configurator</legend>
          <div>
            {Object.keys(PIZZA_OPTIONS).map(item => (
              <OptionsGroup
                key={item}
                groupName={item}
                options={PIZZA_OPTIONS[item]}
                setPizzaConfig={setPizzaConfig}
              />
            ))}
            <div className="container">
              <Button className="checkout-button">
                Checkout {totalCost} RUB
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
