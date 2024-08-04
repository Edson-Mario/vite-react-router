import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'
import {useReducer, createContext} from 'react'

export const UseContext = createContext(null)

const reducer = (state, action) =>{
  switch(action.type){
    case 'SET-EMAIL':
      return {...state, email: action.email}
    case 'SET-PASSWORD':
      return {...state, password: action.password}
    case 'SET-LOGIN':
      return {...state, loggedIn: action.loggedIn}
    case 'SET-LOGOUT':
      return {email: '', password: '', loggedIn: action.loggedIn}
    case 'SET-EMAIL-INVALID':
      return {...state, errorMessage: 'Invalid email', isInvalidCretential: true}
    case 'SET-PASSWORD-INVALID':
      return {...state, errorMessage: 'Invalid password', isInvalidCretential: true}
    case 'SET-INVALID':
      return {...state, errorMessage: 'Invalid email or password', isInvalidCretential: true}
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 
    {email: '', password: '', loggedIn: false, errorMessage: '', isInvalidCretential: false})

  return (
    <div>
      <UseContext.Provider value={{state: state, dispatch: dispatch}}>
        <NavBar />
        <Outlet />
      </UseContext.Provider>
    </div>
  )
}

export default App
