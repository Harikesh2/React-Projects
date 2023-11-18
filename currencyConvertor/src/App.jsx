import { useState } from 'react'
import InputBox from './component/InputBox'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className=' text-orange-400 bg-blue-400'>Hello Bro!!</h1>
   <InputBox />
   </>
  )
}

export default App
