import {Link} from 'react-router-dom'
import {useContext} from 'react'

import { UseContext } from '../App'


const NavBar = () => {
  const userContext = useContext(UseContext)
  const {state, dispatch} = userContext
  const {email, password, loggedIn} = state

  const handleLogout = () =>{
    dispatch({type: 'SET-LOGOUT', loggedIn: false})
  }

  return (
    <nav className='max-sm:justify-end flex justify-between px-14 py-4 border shadow-sm'> 
        <Link to="/" className='max-sm:hidden text-xl text-gray-800 font-bold'>React Router</Link>
        <ul className='list-none flex gap-10'>
          <li><Link to="/" className='text-gray-800'>Home</Link></li>
          {
            !loggedIn && 
            <li><Link to="/login" className='text-gray-800'>Login</Link></li>
          }
          <li><Link to="/contact" className='text-gray-800'>Contact</Link></li>
          {
            loggedIn &&
            <li><Link  to="/" onClick={handleLogout} className='text-gray-800'>Logout</Link></li>
          }
        </ul>
    </nav>
  )
}

export default NavBar
