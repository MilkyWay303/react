import { pizzaData } from "../pages/_app";
import { Pizzaitem } from "./Pizzaitem";

export function Menu({ selectPizza, selectedPizzaindex, menu }) {
  
  return <div className="menu">
    <h2>OUR MENU</h2>
    <p>Autentyczna kuchnia włoska. Do wyboru 6 kreatywnych dań. Wszystko z naszego kamiennego pieca, wszystko organiczne, wszystko pyszne.</p>
    <ul className="pizzas">
      {menu.map((objpizza, index) => {
        return <Pizzaitem pizza={objpizza} key={index} selectPizza={selectPizza} index={index} selectedPizzaindex={selectedPizzaindex}/>;
      })}
    </ul>
  </div>;
}
