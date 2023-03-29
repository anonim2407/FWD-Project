import React from 'react'

const Cards = ({img,title,description}) => {
  return (
    <div className='w-full grid gap-5 justify-items-center content-evently text-center h-[300px] p-4 rounded-2xl backdrop-blur-md  bg-[#ffffffcf] shadow-[#62afd070] shadow-2xl transition duration-500 hover:shadow-[#f0c187] animate__animated animate__fadeInUp animate__delay-1s'>
      <div>{img}</div>
      <h3 className=' text-lg font-bold'>{title}</h3>
      <p className=' text-gray-600'>{description}</p>
    </div>
  )
}

export default Cards
