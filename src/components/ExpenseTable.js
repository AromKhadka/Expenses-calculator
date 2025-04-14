// src/components/ExpenseTable.js

import React from 'react';

function ExpenseTable({ expenses, onDelete, onEdit }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount (Rs.)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="4" className="no-expense">No expenses yet.</td>
          </tr>
        ) : (
          expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
