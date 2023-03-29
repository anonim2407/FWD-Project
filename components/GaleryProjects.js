import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

// import required modules
import { Pagination, Navigation } from "swiper";


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
export default function SliderComponent() {
    return (
        <section className='w-auto '>



            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {mockups.map(mockup => (
                    <SwiperSlide key={mockup.name}>

                        <Link target={'_blank'} href={mockup.href}>
                            <Image src={mockup.image} width={1500} height={1500} alt={`Image Mockup ${mockup.name}`} />
                        </Link>

                    </SwiperSlide>
                ))}




                {/* 
                     <Cards
                    img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 stroke-[#f0c187]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>}

                    title={'Responsive design'}
                    description={'We design responsive websites, accessible from mobile phones and tablets.We design responsive websites, accessible from mobile phones and tablets.'}
                 
                />

                         <Cards
                    img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 stroke-[#f0c187]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    }

                    title={'Self-managed'}
                    description={'Without help. Manage the content of your website yourself.'}
                
                />

                    
                <Cards
                    img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 stroke-[#f0c187]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                    }

                    title={'Website optimized for SEO'}
                    description={'We make the web designed for your clients and for Google.'}
             
                />
                 */}

            </Swiper>

        </section>
    );
}