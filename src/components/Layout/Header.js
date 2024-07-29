import React from "react";
import logo from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeadCartButton from "./HeaderCartButton";
const Header=(props)=>{
    return(
        <React.Fragment>
       <header className={classes.head}>
        <h1>ReactMeals</h1>
       <HeadCartButton onClick={props.onShowCart}/>
       </header>
       {/*here in main-image name - is present so we can't use .main-image here we use in []*/}
       <div className={classes['main-image']}>
       <img src={logo} alt="A table full of delicious food!"/>
       </div>
       </React.Fragment>

    );

}
export default Header;