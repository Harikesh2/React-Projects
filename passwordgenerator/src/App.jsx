import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [lenght, setLenght] = useState(8);
  console.log('Lenght:', lenght);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str +="0123456789"
    if(charallowed) str +="!@#$%^&*-_+=[]{}~`"
 
    for (let i = 1; i <=lenght; i++) {
      let char = Math.floor(Math.random()* str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lenght,numberallowed,charallowed,setPassword])

  // FUNCTION FOR THE COPY BUTTON
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect( ()=>{
    passwordGenerator()
  },[lenght,numberallowed,charallowed, passwordGenerator])

  return (
    <>
     
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-800'>
      <h1 className=' my-3 text-center text-white'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden md-4'>
          <input x
          type="text" 
          value={password}
          className=' outline-none w-full py-1 px-3 '
          placeholder='Password'
          readOnly
          ref={passwordRef}/>
          <button 
          onClick={copyToClipboard}
          className=' outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:opacity-50'>COPY</button>
        </div>
        <div className=' flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1 py-4'>
         <input 
         type="range" 
         min={6}
         max={100}
         value={lenght}
         className=' cursor-pointer'
         onChange={(e)=>{setLenght(e.target.value)}}
          />
          <label> Length: {lenght}</label>
        </div>
        <div className=' flex items-center gap-x-1 py-4'>
          <input 
          type="checkbox" 
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={()=>{
            setNumberallowed((prev)=> !prev)
          }}/>
          <label>Number</label>
        </div>
        <div className=' flex items-center gap-x-1 py-4'>
          <input 
          type="checkbox" 
          defaultChecked={charallowed}
          id='numberInput'
          onChange={()=>{
            setCharallowed((prev)=> !prev)
          }}/>
          <label>Characters</label>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
