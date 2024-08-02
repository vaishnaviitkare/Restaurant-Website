import React,{useState}from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  //here we have two states one is cart is shown and other is cart is close so use usestate
  const[cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
setCartIsShown(true);
  };
  const hideCartHandler=()=>{
    setCartIsShown(false);

  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;
