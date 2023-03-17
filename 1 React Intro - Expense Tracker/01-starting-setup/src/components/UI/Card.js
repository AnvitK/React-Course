import React from "react";
import './Card.css';

const Card= (props) => {  // Wrapper component
    const classes = "card " + props.className;
    // return <div className="card">{props.children}</div>;
    return <div className={classes}>{props.children}</div>;   // composition
}

export default Card;