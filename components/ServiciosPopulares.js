import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Lottie from "@/helpers/Lottie";


import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import BtnRed from "./BtnRed";


const ServiciosPopulares = () => {
    const [activeList, setActiveList] = useState(1);

    useEffect(() => {
        Aos.init({
            duration: 2000,
            delay: 200
        })
    }, [])

    return (



        <section className="container m-auto max-w-6xl mt-[200px] display flex flex-col gap-2 justify-center items-center my-20 min-h-screen px-4 ">
            <div className="text-4xl font-bold text-[#f0c187] ">
                <h2 className="text-center">Nuestros servicios mas populares</h2>
            </div>

            <div className="container m-auto my-10 ">
                <ul className="flex flex-col gap-2 lg:flex-row lg:flex-wrap  lg:items-center lg:gap-0 lg:bg-slate-200 rounded-3xl ">
                    <li className="flex-auto p-2 bg-slate-200 rounded-3xl  ">
                        <Link
                            className=" flex justify-center items-center"
                            href="#"
                            id="111"
                            onMouseEnter={() => setActiveList(1)}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveList(1);
                            }}
                        >
                            <span
                                className={`p-2 text-lg font-semibold text-center w-full transition duration-300 rounded-3xl ${activeList === 1 && "bg-white text-[#f0c187]"
                                    }  `}
                            >
                                Diseño de página
                            </span>
                        </Link>
                    </li>
                    <li className="flex-auto p-2 bg-slate-200 rounded-3xl  ">
                        <Link
                            className=" flex justify-center items-center"
                            href="#"
                            onMouseEnter={() => setActiveList(2)}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveList(2);
                            }}
                        >
                            <span
                                className={`p-2 text-lg font-semibold text-center w-full transition duration-300 rounded-3xl ${activeList === 2 && "bg-white text-[#f0c187]"
                                    }`}
                            >
                                Tienda online
                            </span>
                        </Link>
                    </li>
                    <li className="flex-auto p-2 bg-slate-200 rounded-3xl  ">
                        <Link
                            className=" flex justify-center items-center"
                            href="#"
                            onMouseEnter={() => setActiveList(3)}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveList(3);
                            }}
                        >
                            <span
                                className={`p-2 text-lg font-semibold text-center w-full transition duration-300 rounded-3xl ${activeList === 3 && "bg-white text-[#f0c187]"
                                    }`}
                            >
                                Optimización CEO
                            </span>
                        </Link>
                    </li>
                    <li className="flex-auto p-2 bg-slate-200 rounded-3xl  ">
                        <Link
                            className=" flex justify-center items-center"
                            href="#"
                            onMouseEnter={() => setActiveList(4)}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveList(4);
                            }}
                        >
                            <span
                                className={`p-2 text-lg font-semibold text-center w-full transition duration-300 rounded-3xl ${activeList === 4 && "bg-white text-[#f0c187]"
                                    }`}
                            >
                                Hosting
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="container m-auto bg-[#ffffff67] backdrop-blur-[5px]  p-6 rounded-xl">
                <div
                    className={` opacity-0 ${activeList === 1 ? "block opacity-100" : "hidden"
                        }`}
                >
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
                        <div className="flex flex-col  basis-1/2">
                            <h2 className="text-3xl my-6 font-bold" >
                                Diseño web y creación de páginas web
                            </h2>
                            <div>
                                <p className="py-4 text-lg">
                                    Creamos grandes experiencias mediante el diseño y desarrollo
                                    de sitios web de alto rendimiento. Combinando diseño moderno,
                                    pensamiento UX e investigación en profundidad, desarrollamos
                                    su marca que lo diferencia en la industria y ayuda a hacer
                                    crecer su negocio.
                                </p>
                                <p className="py-4 text-lg">
                                    Solicitando un sitio web de nosotros, usted recibirá:
                                </p>
                                <ul className=" list-disc pl-6 text-lg">
                                    <li>
                                        excelente adaptabilidad para una cómoda visualización de
                                        contenido desde cualquier tipo de dispositivo
                                    </li>
                                    <li>experiencia de usuario de alto nive</li>
                                    <li>diseño que invita al usuario a tomar acción</li>
                                    <li>caracteristicas modernas</li>
                                    <li>
                                        estructura SEO adecuada y excelentes oportunidades para la
                                        optimización futura
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-1/2" >
                            <Lottie

                                href={
                                    "https://assets7.lottiefiles.com/packages/lf20_amnqanpd.json"
                                }
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`opacity-0 ${activeList === 2 ? "block opacity-100" : "hidden"
                        }`}
                >
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
                        <div className="flex flex-col  basis-1/2">
                            <h2 className="text-3xl my-6 font-bold">
                                Diseño de tienda online
                            </h2>
                            <div>
                                <p className="py-4 text-lg">
                                    Nuestras tiendas en línea se adaptan a las necesidades de su
                                    negocio, ya sea entrega, productos virtuales, pagos fáciles o
                                    ventas internacionales. Son fáciles de administrar, con un
                                    conveniente panel de administración y son extremadamente
                                    flexibles.
                                </p>
                                <p className="py-4 text-lg">
                                    Solicitando una tienda online, usted recibirá:
                                </p>
                                <ul className=" list-disc pl-6 text-lg">
                                    <li>
                                        control total sobre su tienda y un número ilimitado de
                                        productos
                                    </li>
                                    <li>funcionalidad extremadamente rica</li>
                                    <li>
                                        pagos fluidos, integraciones de proveedores y 100% de
                                        seguridad
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-1/2" >
                            <Lottie
                                href={
                                    "https://assets10.lottiefiles.com/packages/lf20_tiulipe2.json"
                                }
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={` opacity-0 ${activeList === 3 ? "block opacity-100" : "hidden"
                        } `}
                >
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
                        <div className="flex flex-col  basis-1/2">
                            <h2 className="text-3xl my-6 font-bold">Optimización de SEO</h2>
                            <div>
                                <p className="py-4 text-lg">
                                    Creamos grandes experiencias mediante el diseño y desarrollo
                                    de sitios web de alto rendimiento. Combinando diseño moderno,
                                    pensamiento UX e investigación en profundidad, desarrollamos
                                    su marca que lo diferencia en la industria y ayuda a hacer
                                    crecer su negocio.
                                </p>

                                <ul className=" list-disc pl-6 text-lg">
                                    <li>se necesita un análisis SEO en profundidad para descubrir las frases clave que funcionan para usted</li>
                                    <li>aparecen más arriba en los resultados de búsqueda para las frases clave que desea</li>
                                    <li>proceso transparente con informes mensuales</li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-1/2" >
                            <Lottie
                                href={
                                    "https://assets7.lottiefiles.com/packages/lf20_TcCqq5PWDu.json"
                                }
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`opacity-0 ${activeList === 4 ? "block opacity-100" : "hidden"
                        }`}
                >
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
                        <div className="flex flex-col  basis-1/2">
                            <h2 className="text-3xl my-6 font-bold">Alojamiento VPS en la nube</h2>
                            <div>
                                <p className="py-4 text-lg">
                                    ¡Servicio de hosting a un nivel superior! Mayor seguridad, mejor rendimiento: todos factores importantes para su sitio y su optimización SEO.
                                </p>
                            </div>
                        </div>
                        <div className="basis-1/2" >
                            <Lottie
                                href={
                                    "https://assets2.lottiefiles.com/packages/lf20_bewdaxyv.json"
                                }
                            />
                        </div>
                    </div>
                </div>
                <BtnRed text={'Ver todos los servicios'} href='#'/>
            </div>
        </section>

    );
};

export default ServiciosPopulares;
