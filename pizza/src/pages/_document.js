import { Html, Head, Main, NextScript } from "next/document";
// import App from "./_app.js";

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

export default function Document() {

  const a = "abc";
  const b = null;
  console.log(a && null, "a && null")
  console.log(a && "abf", "a && abf")
  console.log(b && "abf", "b && abf");
  const arr = [1,2,3,4]; 


  return (
    <Html lang="en">
      <Head />
      <body>

        {/* <App /> */}

        {/* {b && (
          <div>abc</div>
        )}
        {b ? (
          <div>abc</div>
        ): (
          <div>def</div>
        )} */}
        <Main className="main" width="30px"/>
        {/* {
          pizzaData.map((objpizza, index)=>{
            return <>
              <div className={index==1?"pp":""}>{objpizza.name}</div>
              <div className={index==1?"pp":""}>{objpizza.ingredients}</div>
            </>
            
            
          })
        } */}
        <NextScript />
      </body>
    </Html>
  );
}

