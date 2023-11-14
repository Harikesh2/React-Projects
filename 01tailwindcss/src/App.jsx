import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myValue ={
    username: "vishal",
    age: 21
  }

  let Arr = [
    { 
      username: "Vishal",
      age:21
    },
    { 
      username: "Rohan",
      age:27
    }

  ]

  return (
  //  <>
  //  {/* <h1  className=' bg-green-400 text-black p-4 rounded-xl'>Hello React!!</h1> */}
  //  <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  //           <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/13633065/pexels-photo-13633065.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  //           <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
  //             <blockquote>
  //               <p className="text-lg font-medium">
  //                 “Tailwind CSS is the only framework that I've seen scale
  //                 on large teams. Its easy to customize, adapts to any design,
  //                 and the build size is tiny.”
  //               </p>
  //             </blockquote>
  //                   <figcaption className="font-medium">
  //                     <div className="text-sky-500 dark:text-sky-400">
  //                       Sarah Dayan
  //                     </div>
  //                     <div className="text-slate-700 dark:text-slate-500">
  //                       Staff Engineer, Algolia
  //                     </div>
  //                   </figcaption>
  //                 </div>
  //     </figure>

  //  </>
  <>
  
  <Cards channel= "cool boy" someObj={Arr} btnText="Visit Profile" />
  <Cards channel= "Bad boy" someObj={Arr} btnText="See Profile"/>
  </>
  )
}

export default App
