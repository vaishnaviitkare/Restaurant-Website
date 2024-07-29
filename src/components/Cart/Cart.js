import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart=()=>{
    const cartitems=<ul className={classes['cart-items']}>
{
[{id:"cl",name:"Sushi",amount:2,price:12.99}].map((item)=>{
return(
    <li>
        {item.name}
    </li>
    );
    })
}</ul>
    return(
   <Modal>
       {cartitems}
        <div>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    );
}
export default Cart;