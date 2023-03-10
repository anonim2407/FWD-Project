import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

const mockups = [
    {
        name: 'Autolavado Exprés',
        href: 'https://autolavadoexpres.es/',
        image: '/img/mockup/mockup_2.png'
    },
    {
        name: 'Óptica Hristovi',
        href: '#',
        image: '/img/mockup/mockup_1.png'
    },

]
const backgroundImageProjects = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)),url('/img/bg_projects5.jpg')`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "250px",
};

const FlechasGaleria = () => {
    const [clickedImg, setClickImg] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(null)

    const handleClickImage = (item, index) => {
        setCurrentIndex(index);
        setClickImg(item)
        console.log(item)
    }





    return (
        <section className='container max-w-[1300px] m-auto relative'>
            <div className='hexagon grid   content-center justify-items-center '>
                <div className='flex flex-col  lg:flex-row  justify-center items-center lg:-mb-[60px]'>
                    <div className='hex flex justify-center items-center' >
                        <Image src={'/img/portafolio/portafolio_1.png'} onClick={(e) => handleClickImage(e.target.src, index)} alt={''} width={1000} height={1000} />
                    </div>
                    <div className='hex flex justify-center items-center'>
                        <Image src={'/img/portafolio/portafolio_2.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
                <div className='hex flex justify-center items-center  lg:-mb-[60px]'>
                    <Image src={'/img/portafolio/portafolio_1.png'} alt={''} width={1000} height={1000} />
                </div>
                <div className='flex flex-col  lg:flex-row  justify-center items-center lg:-mb-[60px]'>
                    <div className='hex flex justify-center items-center'>
                        <Image src={'/img/portafolio/portafolio_1.png'} alt={''} width={1000} height={1000} />
                    </div>
                    <div className='hex flex justify-center items-center'>
                        <Image src={'/img/portafolio/portafolio_2.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
                <div className='hex flex justify-center items-center'>
                    <Image src={'/img/portafolio/portafolio_2.png'} alt={''} width={1000} height={1000} />
                </div>
            </div>
        </section>
    )
}

export default FlechasGaleria
