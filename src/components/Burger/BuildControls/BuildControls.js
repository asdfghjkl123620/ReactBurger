import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
    { label:"salad", type:"salad"},
    { label:"bacon", type:"bacon"},
    { label:"cheese", type:"cheese"},
    { label:"meat", type:"meat"}

];
const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>目前金額:{props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            addedClick={() => props.ingredientAdded(ctrl.type)}
            removedClick={() => props.ingredientRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled = {!props.purchasable}
        onClick={props.ordered}
        >現在點單</button>
    </div>
        
);

export default buildControls;