import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,div , incrementByAmount } from './redux/counter/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>dispatch(decrement())}>-</button> 
      <span style={{margin:"0px 20px"}}>Your count is : {count}</span>
      <button onClick={()=>dispatch(increment())}>+</button>
          </>
  )
}

export default App
