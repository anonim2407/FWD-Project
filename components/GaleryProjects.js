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

            </Swiper>

        </section>
    );
}