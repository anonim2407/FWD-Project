import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

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

const HexagonalGalery = () => {



    return (
        <section className='container max-w-[1300px] m-auto'>
            <div className=' grid gap-10 content-center justify-items-center '>
                <div className='flex'>
                    <div className='paralelogramo bg-[#8adbed] '>
                        <Image src={'/img/mockup/mockup_3.png'} alt={''} width={2000} height={1000} />
                    </div>
                    <div className='paralelogramo2 bg-[#8adbed] p-3 rotado'>
                        <Image src={'/img/mockup/mockup_4.png'} alt={''} width={2000} height={1000} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='paralelogramo bg-[#8adbed] '>
                        <Image src={'/img/mockup/mockup_3.png'} alt={''} width={1000} height={1000} />
                    </div>
                    <div className='paralelogramo2 bg-[#8adbed] p-3 rotado '>
                        <Image src={'/img/mockup/mockup_4.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HexagonalGalery
