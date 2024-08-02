import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeadCartButton=(props)=>{
   const cartCtx=useContext(CartContext);
   //item array contain item information but we just need the total amount added so use reduce function
   const numberOfCartItems=cartCtx.items.reduce((total,item)=>{
      return total+item.amount;
   },0);
    return(
       <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
           <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
       </button>
    )

}
export default HeadCartButton;