import React from 'react';
import { transReducer } from './reducer';

let transactions = []

export const context = React.createContext(transactions);

export const TransactionProvider = ({children})=>{
  let [red, dispatch] = React.useReducer(transReducer, transactions);
  return(
    <context.Provider value={{transactions:red, dispatch}}>
      {children}
    </context.Provider>
  )
}