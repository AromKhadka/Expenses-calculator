// src/App.js

import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateExpense = (expense) => {
    if (editingIndex !== null) {
      const updated = [...expenses];
      updated[editingIndex] = expense;
      setExpenses(updated);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (index) => {
    const filtered = expenses.filter((_, i) => i !== index);
    setExpenses(filtered);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="app-container">
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm
        onSubmit={addOrUpdateExpense}
        editData={editingIndex !== null ? expenses[editingIndex] : null}
      />
      <ExpenseTable
        expenses={expenses}
        onDelete={deleteExpense}
        onEdit={startEditing}
      />
      <div className="total">
        Total: Rs. <strong>{total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default App;
