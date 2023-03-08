import React from 'react'
import Link from 'next/link'

const BtnRed = ({text,href}) => {
    return (
        <div className="flex justify-center items-center my-10">
            <Link href={href}>
                <p className="text-lg font-semibold  px-4 py-2  bg-[#ff5c5c]  text-white rounded-xl  tracking-wider transition duration-300 hover:bg-[#ff4141] outline-none">
                    {text}
                </p>
            </Link>
        </div>
    )
}

export default BtnRed
