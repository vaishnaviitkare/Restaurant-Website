import React from "react";
import classes from "./Input.module.css";
const Input=(props)=>{
    {/*here we add spread operator in input because we receive object as key value pair for any input element
    as input={type:text} means each time we give input object with some attributes*/}
return(  
<div className={classes.input}>
<label htmlFor={props.input.id}>{props.label}</label>
<input
{...props.input}
/>
</div>
);
}
export default Input;