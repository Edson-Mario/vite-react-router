import React from 'react'
const ErrorMessage = ({message}) => {
  return (
    <div className='px-2 mt-4'> 
        <div className='bg-green-400 py-4 rounded-md'>
            <p className='text-white  text-center text-xl'>{message}</p>
        </div>
    </div>
    
  )
}

export default ErrorMessage
