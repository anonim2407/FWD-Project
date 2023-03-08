import React from 'react'

const Cards = ({img,title,description}) => {
  return (
    <div className='grid gap-5 justify-items-center content-start text-center h-60 animate__animated animate__fadeInUp animate__delay-3s'>
      <div>{img}</div>
      <h3 className=' text-lg font-bold'>{title}</h3>
      <p className=' text-gray-600'>{description}</p>
    </div>
  )
}

export default Cards
