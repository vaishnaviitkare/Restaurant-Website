import React,{useRef,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm=(props)=>{
    const[amountIsValid,setAmountIsValid]=useState(true);
    const amountInputRef=useRef();
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
       if(enteredAmount.trim().length===0||
       enteredAmountNumber<1||
       enteredAmountNumber>5){
        setAmountIsValid(false);
        return;
       }
       //cart need name price etc and here this are not present so we pass amount to mealitem 
       //where all presents and there we call addItem function of context
       props.onAddToCart(enteredAmountNumber);

    }
    //In Input we pass object but we take {{}} one is for jsx syntax and other for object
    return(
       <form className={classes.form} onSubmit={submitHandler}>
       <Input 
       ref={amountInputRef}
       label="Amount"
       input={{
        id:"amount",
        type:"number",
        min:"1",
        max:"5",
        step:"1",
        defaultValue:"1"
       }}
       />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
       </form>
    );
}
export default MealItemForm;