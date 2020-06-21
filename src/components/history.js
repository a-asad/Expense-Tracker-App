import React from 'react';
import {context} from './context';

function History() {
    let {transactions} = React.useContext(context);
  return (
    <div className="history">
      <h3>Transaction History</h3>
      <hr/>
      <div>
          {transactions.length === 0?"No transactions added yet!":
        transactions.map((trans, id) =>{
            return (
                <div key={id} className={`historyItems ${trans.amount>=0?"historyIncome":"historyExpense"}`}>
                    <span>{trans.desc}</span>
                    <span>${trans.amount}</span>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default History;
