import React from 'react';

function AddTransaction() {
  return (
    <div className="add-transaction">
      <h3>Add Transaction</h3>
      <hr/>
      <label>Description:</label>
      <input type="text" placeholder="Enter description"/>
      <label>Amount:</label>
      <input type="text" placeholder="-ive -> expense, +ive -> income"/>
      <button className="btn">Add</button>
    </div>
  );
}

export default AddTransaction;
