import { useState } from "react";
import Layout from "@/layout/Layout";
import Link from "next/link";
import Lottie from "@/helpers/Lottie";

const Personalizado = () => {
  const [activeList, setActiveList] = useState(1);
  console.log(activeList);

  return (
    <div>
      <Layout>
        
        <section className="container m-auto max-w-6xl flex justify-center items-center">
          <div className=" py-28   gap-10 flex flex-col md:flex-row-reverse items-center">
            <div className="text-left grid gap-5  lg:text-left basis-1/2">
              <h1 className="text-center md:text-left font-extrabold text-5xl md:text-6xl tracking-wider  bg-gradient-to-r  text-[#f0ba78]">
                Diseño <span className="subrallado">personalizado</span> 
              </h1>
              <p className="text-lg text-center md:text-left">
                Un sitio diseñado según tus criterios. Un diseño individual para
                su sitio le garantiza una presentación 100% única en Internet.
              </p>
              <Link href="#">
                <p className="font-bold text-lg  uppercase text-[#ff5c5cbf] transition duration-300 hover:text-[#ff4141]">
                  &#10596; Hablemos sobre su proyecto
                </p>
              </Link>
            </div>
            <div className=" basis-1/2">
              <Lottie href="https://assets9.lottiefiles.com/packages/lf20_01jwptn4.json" />
            </div>
          </div>
        </section>

        <section className=" mb-20">
          <div className="container max-w-6xl mx-auto p-4 backdrop-blur-[8px]  bg-[#ffffff6e]   rounded-2xl">
            <div className="flex flex-col md:flex-row justify-start ">
              <div className="basis-1/3">
                <div className=" flex md:flex-col justify-evenly md:justify-start items-start gap-3 md:gap-5 text-lg py-6">
                  <div
                    className=" cursor-pointer"
                    onClick={() => {
                      setActiveList(1);
                    }}
                  >
                    <p className={`${activeList === 1 && "font-semibold"}`}>
                      Descripción
                    </p>
                    <hr
                      className={`bg-slate-700 w-[0] opacity-0 h-[3px] transition duration-300 ${
                        activeList === 1 && " opacity-100 w-[80px]"
                      }`}
                    ></hr>
                  </div>
                  <div
                    className=" cursor-pointer"
                    onClick={() => {
                      setActiveList(2);
                    }}
                  >
                    <p className={`${activeList === 2 && "font-semibold"}`}>
                      Información adicional
                    </p>
                    <hr
                      className={`bg-slate-700 w-[0] opacity-0 h-[3px] transition duration-300 ${
                        activeList === 2 && " opacity-100 w-[80px]"
                      }`}
                    ></hr>
                  </div>
                  {/* <div
                    className=""
                    onClick={() => {
                      setActiveList(3);
                    }}
                  >
                    <p className={`${activeList === 3 && "font-semibold"}`}>
                      Valoraciones
                    </p>
                    <hr
                      className={`bg-slate-700 w-[0] opacity-0 h-[4px] transition duration-300 ${
                        activeList === 3 && " opacity-100 w-[80px]"
                      }`}
                    ></hr>
                  </div> */}
                </div>
              </div>
              <div className="basis-2/3">
                <div className="pb-16">
                  {/* DESCRIPCIÓN */}
                  <div
                    className={` opacity-0 ${
                      activeList === 1 ? "block opacity-100" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
                      <div className=" flex flex-col gap-3">
                        <h3 className="text-2xl my-6 text-left">Descripción</h3>
                        <h2 className="text-5xl text-left font-bold">
                          Creación de un sitio web informativo con diseño
                          individual
                        </h2>
                        <p className="text-3xl font-semibold">
                          El servicio ofrece las siguientes funcionalidades y
                          personalización:
                        </p>
                        <ul className="list-disc pl-4 text-lg">
                          <li>
                            domain gratis durante un año (los domains que of
                            ofrecemos pueden acabar en .net, .com, .es,
                            .service)
                          </li>
                          <li>diseño individual segun vuetros criterios</li>
                          <li>verción adaptable a todo tipo de dispositivos</li>
                          <li>
                            cuadro tipo slider en el inicio con cambio de fotos
                            y links automomático
                          </li>
                          <li>
                            acceso directo a su página de Facebook, Instagram,
                            Youtube ...
                          </li>
                          <li>
                            hasta <span>10 botones</span> en la navegación con
                            sus páginas respectivas (ej: Inicio, Nosotros,
                            Servicios, Contacto, Blog - hasta 10 páginas), no
                            hay limites de largo (scroll) de cada página
                          </li>
                          <li>
                            método de contacto que envia mensajes a su correo
                            electrónico
                          </li>
                          <li>su ubicación en el mapa de Google</li>
                          <li>links direcionados a sus redes sociales</li>
                          <li>
                            panel administrativo para que pueda redarcar
                            apartados predeterminados por nosotros
                          </li>
                          <li>
                            instrucciones de trabajo con el panel administrativo
                          </li>
                          <li>SEO localización de la página principal</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* MAS INFORMACIÓN */}
                  <div
                    className={` opacity-0 ${
                      activeList === 2 ? "block opacity-100" : "hidden"
                    }`}
                  >
                    <h3 className="text-2xl my-6 text-left">
                      Información adicional
                    </h3>
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500 ">
                        <tbody>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap "
                            >
                              Número de páginas
                            </th>
                            <td className="px-6 py-4">10</td>
                          </tr>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap "
                            >
                              Diseño
                            </th>
                            <td className="px-6 py-4">Individual</td>
                          </tr>
                          <tr className=" bg-white border-b ">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap "
                            >
                              Tiempo de trabajo
                            </th>
                            <td className="px-6 py-4">+25 días laborales</td>
                          </tr>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium whitespace-nowrap "
                            >
                              Función
                            </th>
                            <td className="px-6 py-4">Sitio web informativo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
      </Layout>
    </div>
  );
};

export default Personalizado;
