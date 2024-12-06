import "@/styles/globals.css";
import { useState } from "react"
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";


export const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App({ Component, pageProps }) {
  const [pizzaMenu, setPizzaMenu] = useState(pizzaData)
  const [selectedPizzaindex, setSelectedPizzaindex] = useState(null)
  const selectedPizza = selectedPizzaindex!=null? pizzaMenu[selectedPizzaindex]:null

  const handleOrder = () => {
    if (selectedPizza) {
      const updateMenu = pizzaMenu.map( (pizza, index) => {
        if (index == selectedPizzaindex) {
          return {...pizza, soldOut: true}
        }
        return pizza
      } )
      setPizzaMenu(updateMenu)
      setSelectedPizzaindex(null)
    }
  }


  function selectPizza(index) {
    setSelectedPizzaindex(index)
    console.log("pizza.name", index)
  }
  return <div className="flex flex-col my-0 gap-[4.8rem] ">
      <Header />
      <Menu selectPizza={selectPizza} selectedPizzaindex={selectedPizzaindex} menu={pizzaMenu}/>
      <Footer selectedPizza={selectedPizza} handleOrder={handleOrder}/>
    </div>;
  // MAIN {...pageProps} = {className="main", width="30px"}      <--------- destrukturyzacja
  // return "luiyvhvnjk  hbvgikluhjbn mgghkjnm"
}

