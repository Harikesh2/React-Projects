import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [counter,setCounter] = useState(15);
  // const counter = 15;
  const addValue = ()=>{
    console.log(counter);
    

  }

  return (
    <>
    <h1>Hello React</h1>
    <h2>COUNTER: {counter}</h2>
    <button onclick={addValue}>Add Value{counter}</button>
    <br /> 
    <br /> 

    <button >Remove Value{counter}</button>
    </>
  )
}

export default App
