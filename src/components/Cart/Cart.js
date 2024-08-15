import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const cartitems=
<ul className={classes['cart-items']}>
{
cartCtx.items.map((item)=>{
return(
    <li key={item.id}>
        {item.name}
    </li>
    );
    })
}</ul>
    return(
   <Modal onClose={props.onClose}>
       {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    );
}
export default Cart;