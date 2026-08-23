import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, increaseBy, reset } from './redux/features/counterSlice';

const App = () => {

  const count = useSelector((state)=>state.counter.counter)
  const dispatch = useDispatch()

  const [num, setNum] = useState('')

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increase())}}>Increase</button>
      <button onClick={()=>{dispatch(decrease())}}>Decrease</button>
      <input type="number" placeholder='Enter Number' onChange={(e)=>{setNum(e.target.value)}} />
      <button onClick={()=>{dispatch(increaseBy(Number(num)))}}>IncreaseBy</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default App