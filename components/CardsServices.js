import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CardsServices = ({ href, img, title, text, bg_color , best = false }) => {
    return (
        <Link href={href} className={`shadow-[#cd8080]  w-full h-full min-h-[400px]  p-4 flex flex-col justify-center gap-10 ${bg_color} cursor-pointer md:brightness-[.85] transition duration-300 hover:brightness-100`}>
            <div className='flex justify-items-center gap-3 items-center '>
                <Image src={img} width={60} height={60} alt={`Icon ${title}`} />
                <h2 className='text-2xl'>{title}</h2>
            </div>
            <p className='leading-8'>{text}</p>
        </Link>
    )
}

export default CardsServices
