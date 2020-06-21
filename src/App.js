import React from 'react';
import Header from './components/header';
import './App.css'
import Total from './components/total';
import History from './components/history';
import AddTransaction from './components/AddTransaction';
import { TransactionProvider } from './components/context';

function App() {
  return (
    <TransactionProvider>
      <div className="mn">
      <div className="main">
      <Header></Header>
      <Total></Total>
      <History></History>
      <AddTransaction></AddTransaction>
    </div>
    </div>
    </TransactionProvider>
  );
}

export default App;
