export function Pizzaitem({ pizza, selectPizza, index, selectedPizzaindex}) {
  
  const isSelected = selectedPizzaindex == index

  console.log(pizza, "oijkfdgejoipfgajiopgf")
  return <li onClick={()=>!pizza.soldOut && selectPizza(index)} className={`pizza p-2 ${pizza.soldOut ? "sold-out" : ""} ${isSelected ? "selected" : ""}`}>
    <img src={pizza.photoName} />
    <div><h2>{pizza.name}</h2><p>{pizza.ingredients}</p><span>{pizza.soldOut ? "Sold-Out" : pizza.price}</span></div>
  </li>;
}
