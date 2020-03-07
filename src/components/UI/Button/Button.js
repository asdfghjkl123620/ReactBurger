import React from "react";
import classes from "./Button.module.css";
const btn =(props)=>(
    <button
    onClick={props.clicked}
    className={[classes.Button,classes[props.btnType]].join(" ")}
    >{props.children}</button>
);

export default btn;