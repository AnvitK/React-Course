// import React, { useState } from "react";
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // console.log(props);
    // const [title, setTitle] = useState(props.title);    // first -> currValu, second -> updateFunction for that currValu, useState always returns the latest value/snapshot of that currValu 
    // console.log('ExpenseItem evaluated by React');

    // let title = props.title;

    // const clickHandler = () => {
    //     // title = 'Title Updated!';       // regular way will NOT change the title state
    //     setTitle('Title Updated!');
    //     console.log(title);
    // };

    return (
        // <div className="expense-item">
        //     <ExpenseDate date={props.date} />
        //     <div className="expense-item__description">
        //         <h2>{props.title}</h2>
        //         <div className="expense-item__price">Rs.{props.amount}</div>
        //     </div>
        // </div>
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">₹{props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;
