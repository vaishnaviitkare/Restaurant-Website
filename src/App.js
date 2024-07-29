import React,{Fragment,useState}from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
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
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
