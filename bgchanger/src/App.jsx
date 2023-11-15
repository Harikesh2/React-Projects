import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Black");

  return (
    <div className=' w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-2 bottom-10 inset-x-0 px-2 bg-white py-2 rounded-3xl '>
        <button  onClick={() => setColor("red")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg space-x-3' style={{backgroundColor: "red"}}>Red</button> 
        <button onClick={() => setColor("green")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("blue")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("Black")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Black"}}>Black</button>
        <button onClick={() => setColor("Olive")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Olive"}}>Olive</button>
        <button onClick={() => setColor("Orange")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Orange"}}>Orange</button>
        <button onClick={() => setColor("pink")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
      </div>
      </div>
      
    </div>
    // <h1>cool boy</h1>
  )
}

export default App
