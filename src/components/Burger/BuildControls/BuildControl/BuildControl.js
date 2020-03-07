import React from "react";
import classes from "./BuildControl.module.css";
const buildControl = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
        className={classes.Less}
        onClick={props.removedClick}
        disabled={props.disabled}
        >減少</button>
        <button 
        className={classes.More}
        onClick={props.addedClick}
        >增加</button>

    </div>
);

export default buildControl;