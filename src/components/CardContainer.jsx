import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-center my-10 px-2'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardContainer
