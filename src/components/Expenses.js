import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
import Card from './Card';
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';
import './ExpenseDate.css';
import './ExpenseItem.css';
import './ExpensesFilter.css'
import './ExpenseList.css'


function Expenses(props){
  const [filteredYear, setFilterdYear] = useState('2022')

  const filterChangeHandler = selectedYear => {
    setFilterdYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }) 
  console.log(filteredExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 ? (
          <p className="expenses-list__fallback">No expenses found</p>
        ) : filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
    )
}

export default Expenses;