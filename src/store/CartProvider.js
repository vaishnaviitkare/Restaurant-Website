import React,{useReducer} from "react";
import CartContext from "./cart-context";
//to manage state we use useReducer
const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
          //check if cart item is already present or not
         const existingCartItemIndex=state.items.findIndex(((item)=>{
            return item.id===action.item.id;
         }))
         const existingCartItem=state.items[existingCartItemIndex];
         let updatedItems;
         if(existingCartItem){
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
         }
         else{
             //unlike push method of array concat add and return new array
         updatedItems=state.items.concat(action.item);
         }
       
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
         }
        }
  return defaultCartState;
}


const CartProvider=(props)=>{
    //when addItem is called then if item is already present then we just update it with price and when
    //it is not present add it so for this we manage state using reducer hook
     const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
    //we use this CartProvider component to wrap all components that need access to the cart
    //we create seperate CartProvider component to keep the app component(or any component from where we pass data to cart context)
    //lean and don't have to put cart management logic there
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item});

    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id});

    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;