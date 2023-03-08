import React from 'react'
import Link from 'next/link'
import BtnRed from './BtnRed'
const Prices = ({titulo, precio, descripcion ,href}) => {
    return (


        <div className="p-4 w-full hover:scale-105 duration-500 text-center">
            <div className=" flex flex-col items-center  justify-between p-4 rounded-2xl backdrop-blur-md  bg-[#ffffffbb] shadow-[#62afd070] shadow-2xl transition duration-500 hover:shadow-[#85ffbd] ">
                <div className='flex gap-6 flex-col justify-between items-center h-[400px]'>
                    <h2 className="text-gray-900 text-2xl font-bold">{titulo}</h2>
                    <p className='my-3'>Los precios empiezan desde</p>
                    <h3 className="mt-2 text-5xl font-bold text-[#6cd14a] ">{precio}€</h3>
                    <p className="text-sm font-semibold text-gray-400">{descripcion}</p>
                    <BtnRed text={'Ver más'} href={href}/>
                </div>

            </div>
        </div>
    )
}

export default Prices
