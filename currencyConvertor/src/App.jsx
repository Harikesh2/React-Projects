import { useState } from 'react'
import InputBox from './component/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount]= useState(0);
  const [convertAmount, setconvertAmount]= useState(0);
  const [from, setFrom]= useState("usd");
  const [to, setTo]= useState("inr");

  return (
   <>
   <h1 className=' text-orange-400 bg-blue-400'>Hello Bro!!</h1>
   <InputBox />
   </>
  )
}

export default App
