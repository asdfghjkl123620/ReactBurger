import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./Navigation/NavigationItem";

const navigation = (props) => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>建構漢堡</NavigationItem>
    <NavigationItem link="/">結帳</NavigationItem>

    </ul>
);

export default navigation;