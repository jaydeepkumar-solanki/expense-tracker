import React from 'react'

function ExpenseItem({item,onDelete}) {

  return (
    <div>
      <div className="expense-item">
        <span>{item.title}</span>
        <span>{item.amount}</span>
        <button onClick={()=> onDelete(item.id)}>❌</button>
      </div>
    </div>
  )
}

export default ExpenseItem
