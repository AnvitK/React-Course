import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const startEditHandler = () => {
        setIsEdit(true);
    };

    const stopEditHandler = () => {
        setIsEdit(false);
    };

    const onSaveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log('In NewExpense.js', expenseData);
        props.onAddExpense(expenseData);
    };

    let expenseForm;
    if(isEdit) {
        expenseForm = <ExpenseForm onStop={stopEditHandler} onSaveExpenseData={onSaveExpenseDatahandler} />;
    } 
    
    return (
        <div className="new-expense">
            <button onClick={startEditHandler}>Add New Expense</button>
            {/* <ExpenseForm onSaveExpenseData={onSaveExpenseDatahandler} /> */}
            {expenseForm}
        </div>
    );
};

export default NewExpense;
