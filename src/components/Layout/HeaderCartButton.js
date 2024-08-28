import React, { useState,useContext,useEffect} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeadCartButton=(props)=>{
   const [btnIsHighlighted,setBtnIsHighlighted]=useState(false);
   const cartCtx=useContext(CartContext);
   const { items }=cartCtx;
   //item array contain item information but we just need the total amount added so use reduce function
   const numberOfCartItems=items.reduce((total,item)=>{
      return total+item.amount;
   },0);
   
   const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(()=>{
      if(items.length===0){
         return;
      }
        setBtnIsHighlighted(true);
        const timer=setTimeout(()=>{
           setBtnIsHighlighted(false);
        },300);
        return()=>{
         clearTimeout(timer);
        };
    },[items]);
   return(
       <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
           <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
       </button>
    )

}
export default HeadCartButton;