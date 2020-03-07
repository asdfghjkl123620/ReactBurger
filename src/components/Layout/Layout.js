import React from "react";

import Aux from "../../hoc/Auxilliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/sideDrawer/SideDrawer";

const layout = (props)=>(
<Aux>
<Toolbar/>
<SideDrawer/>
<main className={classes.Content}>
    {props.children}
</main>
</Aux>
);

export default layout;