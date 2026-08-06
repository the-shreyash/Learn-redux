import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './redux/features/counterSlice'

function App() {
  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value )
  const [nums, setnums] = useState(5)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{
          dispatch(increment())
          console.log("click")
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>

      <button onClick={()=>{
        dispatch(reset())
      }}>Reset</button>

      <input type="number" value={nums} onChange={(e)=>{
        setnums(e.target.value)
      }} />

      <button onClick={()=>{
        dispatch(incrementByAmount(Number(nums)))
      }}>increment by amount</button>
    </div>
  )
}

export default App
