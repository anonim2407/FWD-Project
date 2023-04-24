import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    PencilIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import Link from 'next/link'
import Image from 'next/image'

import { useScrollDirection } from '@/helpers/useScrollDirection'
import BtnRed from './BtnRed'

const products = [
    {
        name: 'Diseño de página',
        description: 'Solción para cualquier negocio y presupuesto',
        href: '#',
        subdescription: [
            { texto: 'Diseño con plantilla (Proximamente)', href: '#' }, ///servicios/pagina-web/con-plantilla
            { texto: 'Diseño personalizado', href: '/servicios/pagina-web/personalizado' },
            { texto: 'Diseño tipo One Page (una página)', href: '/servicios/pagina-web/tipo-onepage' },
        ]
        ,
        icon: '/img/iconos/icon-site.gif',
        price: 300
    },
    {
        name: 'Tienda online',
        description: 'Venta online sin límites',
        href: '#',
        subdescription: [
            { texto: 'Tienda online hecha (Proximamente)', href: '#' },
            { texto: 'Tienda online PRO', href: '#' },
            { texto: 'Con diseño individual', href: '#' },

        ]
        ,
        icon: '/img/iconos/icon-shop.gif',
        price: 500
    },
    {
        name: 'Páginas webs especiales',
        description: 'Diferentes funcionalidades para todas las necesitades',
        href: '#',
        subdescription: [
            { texto: 'Inmobiliarias', href: '#' },
            { texto: 'Pedidos de comida online', href: '#' },
            { texto: 'Hoteles', href: '#' },
            { texto: 'Haz una consulta', href: '#' },
        ]
        ,
        icon: '/img/iconos/icon-special.gif',
        price: 500
    },
    {
        name: 'Optimización CEO',
        description: 'Llegaros a conocer por mas gente',
        href: '#',
        subdescription: [
            { texto: 'Optimización SEO disponible', href: '#' },
            { texto: 'Revisión SEO sin coste', href: '3' },

        ]
        ,
        icon: '/img/iconos/icon-ceo.gif',
        price: 500
    },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderPrueba() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const scrollDirection = useScrollDirection();



    return (
        <header className={` fixed  left-0 right-0 z-[20] ${scrollDirection === "down" ? "-top-24" : "top-0"} h-20 lg:h-24 backdrop-blur-[8px]  bg-[#ffffff6e] transition-all duration-500`}>
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <p className='text-2xl md:text-3xl  lg:text-4xl font-bold'>MW<span className=' font-light'>Desings</span></p>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900    transition duration-300 hover:text-[#f0c187]">
                            Servicios
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >


                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-12 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white backdrop-blur-[8px]   shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4 grid grid-cols-2">

                                    {products.map((item) => (
                                        <>
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >

                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <Image className=' rounded-md' src={item.icon} width={50} height={50} alt={item.name} />
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="block font-bold text-[20px] text-gray-900">
                                                        {item.name}

                                                    </div>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                    <p>Precios desde <span className=' font-bold'>{item.price} €</span></p>
                                                    <ul className='grid gap-1 -ml-3'>
                                                        {item['subdescription'].map((post) => (
                                                            <li className=' text-blue-800' key={post.href}>
                                                                <Link href={post.href} className='flex gap-1'>
                                                                    <p>&#10143;</p><p>{post.texto}</p>
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>


                                                </div>

                                            </div>
                                        </>



                                    ))}

                                </div>
                                <div >
                                    <BtnRed text={'Ver todos los servivios'} href={'/servicios'} />
                                </div>
                            </Popover.Panel>

                        </Transition>
                    </Popover>

                    <Link href="/portafolio" className="text-lg font-semibold leading-6 text-gray-900    transition duration-300 hover:text-[#f0c187]">
                        Portafolio
                    </Link>
                    {/* <Link href="/sobre-nosotros" className="text-lg font-semibold leading-6 text-gray-900    transition duration-300 hover:text-[#f0c187]">
                        Sobre Nosotros
                    </Link> */}
                    <Link href="/contacto" className="text-lg font-semibold leading-6 text-gray-900    transition duration-300 hover:text-[#f0c187]">
                        Contacto
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="flex gap-1 justify-center items-center text-sm font-semibold leading-6 text-gray-900   transition duration-300 hover:text-[#f0c187]">
                        {/* <p>Envia tu duda</p> <div className=' p-2 rounded-full bg-red-600 w-auto h-auto transition duration-300 hover:bg-white'><PencilIcon className="h-4 w-4" aria-hidden="true" /></div> */}
                        <button className={`cta flex justify-center items-center`}>
                            <span>Describe tu duda</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='hidden lg:flex justify-center items-center gap-2'>
                    <Link href={'#'}>
                        <Image src={'/img/iconos/facebook.png'} width={40} height={40} alt={'Image Facebook'} />
                    </Link>
                    <Link href={'#'}>
                        <Image src={'/img/iconos/instagram.png'} width={40} height={40} alt={'Image Instagram'} />
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden fixed z-20" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 " />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <p className='text-2xl md:text-3xl  lg:text-4xl font-bold'>MW<span className=' font-light'>Desings</span></p>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50   transition duration-300 hover:text-[#f0c187]" >
                                                Servicios
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <>
                                                        <div
                                                            key={item.name}
                                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                        >
                                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                                <Image className=' rounded-md' src={item.icon} width={50} height={50} alt={item.name} />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <div className="block font-bold text-[20px] text-gray-900">
                                                                    {item.name}

                                                                </div>
                                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                                                <p>Precios desde <span className=' font-bold'>{item.price} €</span></p>
                                                                <ul className='grid gap-1 -ml-3'>
                                                                    {item['subdescription'].map((post) => (
                                                                        <li className=' text-blue-800' key={post.id}>
                                                                            <Link href={post.href} className='flex gap-1'>
                                                                                <p>&#10143;</p><p>{post.texto}</p>
                                                                            </Link>
                                                                        </li>
                                                                    ))}

                                                                </ul>


                                                            </div>
                                                        </div>
                                                    </>



                                                ))}
                                                <div >
                                                    <BtnRed text={'Ver todos los servivios'} href={'/servicios'} />
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="/portafolio"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50   transition duration-300 hover:text-[#f0c187]"
                                >
                                    Portfolio
                                </Link>
                                {/* <Link
                                    href="/sobre-nosotros"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50    transition duration-300 hover:text-[#f0c187]"
                                >
                                    Sobre Nosotros
                                </Link> */}
                                <Link
                                    href="/contacto"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50    transition duration-300 hover:text-[#f0c187]"
                                >
                                    Contacto
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50    transition duration-300 hover:text-[#f0c187]"
                                >
                                    <button className={`cta flex justify-center items-center`}>
                                        <span>Describe tu duda</span>
                                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                                            <path d="M1,5 L11,5"></path>
                                            <polyline points="8 1 12 5 8 9"></polyline>
                                        </svg>
                                    </button>
                                </Link>

                            </div>
                            <div className='flex justify-center items-center gap-2 py-10 '>
                                <Link href={'#'}>
                                    <Image src={'/img/iconos/facebook.png'} width={40} height={40} alt={'Image Facebook'} />
                                </Link>
                                <Link href={'#'}>
                                    <Image src={'/img/iconos/instagram.png'} width={40} height={40} alt={'Image Instagram'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

        </header>
    )
}
