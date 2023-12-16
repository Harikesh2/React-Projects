import { useEffect, useState } from 'react'
import useDispatch from 'react-redux'
import authservice from './appwrite/auth'
import {login, logout} from './store/authSlice'


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return (
    <>
     <h1> HEllo React</h1>
     <div>cool boy</div>
    </>
  )
}

export default App
