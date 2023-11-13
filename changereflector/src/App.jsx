import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [counter,setCounter] = useState(15);
  // const counter = 15;
  const addValue = () =>{
    if(counter === 15)
    {
      return;
    }
    console.log(counter);
    setCounter(counter+1);
  }

  const removeValue = () =>{
    if(counter === 0)
    {
      return;
    }
    setCounter(
      counter-1 
    )
  }

  return (
    <>
    <h1>Hello React</h1>
    <h2>COUNTER: {counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br /> 
    <br /> 

    <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
