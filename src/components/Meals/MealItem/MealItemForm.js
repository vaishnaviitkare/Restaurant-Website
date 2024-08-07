import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm=(props)=>{
    //In Input we pass object but we take {{}} one is for jsx syntax and other for object
    return(
       <form className={classes.form}>
       <Input 
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
       </form>
    );
}
export default MealItemForm;