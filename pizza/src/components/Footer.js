export function Footer({ selectedPizza, handleOrder }) {
  const X = 9
  const Y = 21
  const currenthour = new Date().getHours()


  return <footer className="footer">
    { currenthour >= X && currenthour < Y ? (
      <div className="order">
        <Order open={X} close={Y} selectPizza={selectedPizza} handleOrder={handleOrder}/>
      </div>
      ):(
        <div className="order">
          <p>We're open from {X}:00 to {Y}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
          <p>We are closed now.</p>
        </div>
      )
    }
    </footer>;
}
function Order({open, close, selectPizza, handleOrder}){

    return <>
    { selectPizza == null && selectPizza !== 1 ? (
      <div className="order">
        <p>We're open from {open}:00 to {close}:00. Come visit us or order online.</p>
          <button onClick={()=>handleOrder() } className="btn">Order</button>
            <div>
              <p>Please select a pizza to order.</p>
            </div>
      </div>
      ):(
        <div className="order">
          <p>We're open from {open}:00 to {close}:00. Come visit us or order online.</p>
            <button onClick={()=>handleOrder() } className="btn">Order</button>
            <div>
              <p>You ordered: {selectPizza?.name}</p>
              <p>Total price: {selectPizza?.price} USD</p>
            </div>
        </div>
      )
    }


  </>}
