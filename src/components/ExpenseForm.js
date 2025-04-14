// src/components/ExpenseForm.js

import React, { useState, useEffect } from 'react';

function ExpenseForm({ onSubmit, editData }) {
  const [form, setForm] = useState({ date: '', description: '', amount: '' });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.date && form.description && form.amount) {
      onSubmit(form);
      setForm({ date: '', description: '', amount: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editData ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default ExpenseForm;
