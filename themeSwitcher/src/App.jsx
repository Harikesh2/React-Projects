import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {
  const [themeMode, setThemeMode]= useState('light')

  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }
    
  // Actual Theme chanage
   useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add("themeMode")
   },[themeMode])

  return (
    <>
    <h1 className=' text-white bg-gray-600'>Tailwind css</h1>
    
    <ThemeProvider value={{themeMode, darkTheme,lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                    <Card />
                    
                  </div>
              </div>
        </div>
    </ThemeProvider>  

    </>
  )
}

export default App
