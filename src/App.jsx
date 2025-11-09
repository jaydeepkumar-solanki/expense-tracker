import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses,setExpenses] = useState(()=>{
      try {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
        localStorage.removeItem("expenses");
        return [];
      }
  });

  // Save to LocalStorage whenever expenses change
  useEffect(()=>{
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses]);

  // Add New Expense in Expenses State variable
  const addExpenses = (expenses) => {
    setExpenses((prev)=>[...prev,expenses]);
  }

  // Delete Expense
  const deleteExpenses = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id != id) )
  }


  const totalExpenses  = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (
	<div className="app-container">
		<h1>💰 Expense Tracker</h1>
		<ExpenseForm onAddExpense={addExpenses}/>
    <h3 className="total">Total Expense: ₹{totalExpenses}</h3>
    <ExpenseList expenses={expenses} onDelete={deleteExpenses}/>
	</div>
  
  )
}

export default App
