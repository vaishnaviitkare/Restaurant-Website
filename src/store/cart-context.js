import React from "react";
//here we create cart context because cart items are used in overall project 
const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{

    },
    removeItem:(id)=>{

    }

})
export default CartContext;