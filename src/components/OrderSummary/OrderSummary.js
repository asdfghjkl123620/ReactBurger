import React from "react";

import Aux from "../../hoc/Auxilliary";
import Button from "../UI/Button/Button";
const orderSummary = (props) => {
    const ingredientSummary =Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });
    return (
        <Aux>
            <h3>你的點單如下:</h3>
            <p>以下是您客製化美味漢堡</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>總共金額:{props.price.toFixed(2)}</strong></p>
            <p>繼續結帳?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>取消</Button>
            <Button  btnType="Success" clicked={props.purchaseContinute}>繼續</Button>
        </Aux>
    );

};

export default orderSummary;