import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Button from './Button'
import './ExpenseItem.css';
import Card from './Card'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
      setTitle('Updated')

    }
    return (
        <Card className='expense-item'>
          <ExpenseDate date ={props.date}/>
          <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
          </div>
          <Button onClick={clickHandler}></Button>
        </Card>
    );
}

export default ExpenseItem;