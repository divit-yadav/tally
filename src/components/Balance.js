import React, {useContext} from 'react'
import progressbar from '../assets/progressbar.png';
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(0)

  return (
    <div className="balancebox">
      <img src={progressbar} alt="progress" className="progress-image"/>
      <div className='balanceh1'>
        <h1>${total}</h1>
      </div>
    </div>
  );  
}

export default Balance;

