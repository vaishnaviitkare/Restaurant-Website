import CartContext from "./cart-context";
const CartProvider=(props)=>{
    //we use this CartProvider component to wrap all components that need access to the cart
    //we create seperate CartProvider component to keep the app component(or any component from where we pass data to cart context)
    //lean and don't have to put cart management logic there
    const addItemToCartHandler=(item)=>{

    }
    const removeItemFromCartHandler=(id)=>{

    }
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;