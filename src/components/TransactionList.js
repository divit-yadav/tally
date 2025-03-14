import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  
  console.log(transactions)

  return (
    <div className='transactionsbox'>
        <h3>Transactions</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
    </div>
  )
}

export default TransactionList