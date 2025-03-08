import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText]= useState('')
    const [amount, setAmount]= useState('')

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
      e.preventDefault()

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction)
    }
  return (
    <div className='addtransactionsbox'>
      <h3>Add transaction</h3>
      <form className="formbox" onSubmit={onSubmit}>
      <div className="inputs">
  <div className="form-control">
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
           placeholder="Enter category" />
  </div>
  <div className="form-control">
    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
           placeholder="Enter amount eg. -100, +200" />
  </div>
</div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction