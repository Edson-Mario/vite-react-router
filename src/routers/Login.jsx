import {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { UseContext } from '../App'
import ErrorMessage from '../components/ErrorMessage'

const Login = () => {
  const navegate = useNavigate()

  const userContext = useContext(UseContext)

  const {state, dispatch} = userContext
  const {email, password, loggedIn, errorMessage, isInvalidCretential} = state

  const handleSubmit = (event) =>{

    if(email != 'email' && password != '12345'){
      dispatch({type: 'SET-INVALID'})
    }else if(email != 'email' && password == '12345'){
      dispatch({type: 'SET-EMAIL-INVALID'})
    }else if(password != '12345' && email == 'email'){
      dispatch({type: 'SET-PASSWORD-INVALID'})
    }else{
      dispatch({type: 'SET-LOGIN', loggedIn: true})
      return navegate('/')
    }
    event.preventDefault()
  }

  return (
    <div className=''>
      <h1 className='text-gray-800 text-2xl text-center mt-6 font-bold'> Login</h1>

      {
        isInvalidCretential &&
        <ErrorMessage message={errorMessage}/>
      }
      <form 
      onSubmit={handleSubmit}
      className='max-w-96 flex flex-col gap-3 mx-auto mt-14'>
        <div>
          <input type="text" placeholder="Insert your email"
          className='w-full border outline-none p-2 text-gray-400 rounded-sm'
          onChange={(e) => dispatch({type: 'SET-EMAIL', email: e.target.value})}
          />
        </div>
        <div>
          <input type="password" placeholder="Insert your password"
          className='w-full border outline-none p-2 text-gray-400 rounded-sm'
          onChange={(e) => dispatch({type: 'SET-PASSWORD', password: e.target.value})}
          />
        </div>
        <button
        className='w-full bg-blue-600 outline-none font-bold text-white py-2 px-4 hover:bg-blue-500 
        rounded-sm mt-4'
        >Enter</button>
      </form>
    </div>
  )
}

export default Login
