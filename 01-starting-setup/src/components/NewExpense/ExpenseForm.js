import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [newExpenseButton, setNewExpenseButton] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const buttonHandler = () => {
        setNewExpenseButton(!newExpenseButton);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                {newExpenseButton && (
                  <button type="button" onClick={buttonHandler}>Add New Expense</button>
                )}

                {!newExpenseButton && (
                  <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                          type="text"
                          value={enteredTitle}
                          onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min="2021-01-01" max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}/>
                    </div>
                  </div>
                  )}
                {!newExpenseButton && (
                  <div className="new-expense__actions">
                      <button type="submit">Add Expense</button>
                      <button type="button" onClick={buttonHandler}>Cancel</button>
                  </div>
                )}
            </div>
        </form>
    )
};

export default ExpenseForm;