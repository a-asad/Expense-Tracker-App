import React from 'react';
import { context } from './context';

function Header() {
    const {transactions} = React.useContext(context);
 function getBalance(){
     let bal=0;
     for(let i in transactions)
         bal+=parseInt(transactions[i].amount);
    return bal;
 }
  return (
      <div  className="header">
          <h2>
        Expense Tracker
        </h2>
        <h3>Balance : ${getBalance()}</h3>
      </div>
  );
}

export default Header;
