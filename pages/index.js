import Image from "next/image";
import { useEffect, useState } from "react";

import Layout from "@/layout/Layout";
import Cards from "@/components/Cards";

import Cercle from "@/components/Cercle";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import ServiciosPopulares from "@/components/ServiciosPopulares";
import SliderComponent from "@/components/GaleryProjects";
import BtnRed from "@/components/BtnRed";
import Prices from "@/components/Prices";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const backgroundImageLetter = {
    backgroundImage: `url('/img/bg_letter.jpg')`,
    backgroundSize: "cover",
    height: "100vh",
  };
  const backgroundImageProjects = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)),url('/img/bg_projects5.jpg')`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "auto",
  };

  return (
    <Layout>
      <main className=" relative overflow-hidden">
        <Cercle
          position={"absolute left-0 -ml-[200px] -z-10 top-[1000px] "}
          width={"400px"}
          height={"500px"}
          color={"bg-gradient-to-r from-cyan-200 to-blue-500"}
        />
        <Cercle
          position={
            "absolute rotate-[70deg] -z-10 -right-[300px] mt-[500px] top-[800px]"
          }
          width={"600px"}
          height={"700px"}
          color={"bg-gradient-to-r from-[#85FFBD] to-[#85FFBD]"}
        />

        <div className="grid min-h-screen overflow-hidden place-items-center relative ">
          <div className=" h-screen w-screen flex justify-center items-center ">
            <div className="wave"></div>
            <div className="container px-2 m-auto ">
              <div className="flex flex-col lg:flex-row gap-16 justify-between items-center">
                <div className=" text-[150px] lg:text-[450px] font-extrabold z-0 animate__animated  animate__bounceInLeft relative  ">
                  <span
                    id="text_F"
                    className="bg-clip-text text-transparent bg-center "
                    style={backgroundImageLetter}
                  >
                    MW
                  </span>
                </div>
                <div className=" flex flex-col justify-between text-center lg:text-left animate__animated animate__bounce z-0">
                  <h3 className="text-2xl lg:text-3xl ">Welcome to MWD</h3>
                  <h2 className="text-4xl lg:text-5xl">We build modern </h2>
                  <h1 className="text-7xl lg:text-9xl font-extrabold">
                    Design
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className=" px-2 my-[100px]  flex justify-center items-center ">
          <div className=" container max-w-[1300px] m-auto bg-[#ffffff67] backdrop-blur-[5px] rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="basis-1/2">
                <Image
                  src={"/img/index/responsive.png"}
                  width={700}
                  height={700}
                  alt="Image Responsive"
                  data-aos="slide-right"
                />
              </div>
              <div className="basis-1/2">
                <h2 className=" text-4xl font-bold text-[#f0c187]">
                  Diseño web y marketing
                </h2>
                <p className=" text-lg my-5 text-justify">
                  Ofrecemos{" "}
                  <span className="font-semibold">
                    desarrollo de sitios web
                  </span>{" "}
                  y{" "}
                  <span className="font-semibold">servicios de marketing</span>.
                  Nuestro objetivo principal es ayudar a nuestros clientes a
                  crear sitios y experiencias digitales centradas en el usuario.
                </p>
                <p className=" text-lg my-5 text-justify">
                  Un sitio web correctamente diseñado atrae, involucra y
                  convierte a clientes potenciales. Utilizamos estrategias
                  prácticas de marketing digital para lograrlo. Diseñamos sitios
                  web con características convenientes y un diseño que coincida
                  completamente con su marca y deleite a sus usuarios
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiciosPopulares />
        <section className="" style={backgroundImageProjects}>
          <div className="container m-auto max-w-[1300px] w-[100vw] text-center p-8  py-10">
            <h2 className="text-4xl font-bold text-[#f0c187] my-7 ">
              Portafolio
            </h2>
            <p className="text-white text-lg my-7">
              Estos són algunos de los proyectos hechos por{" "}
              <span className="font-semibold">Modern Web Design.</span>
            </p>

            <div className="lg:mx-20">
              <SliderComponent />
            </div>

            <BtnRed text={"Ir hacia Portafolio"} href='#' />
          </div>
        </section>
        <section>
          <div className=" container  m-auto max-w-[1300px] px-2 ">
            <h2 className="text-4xl font-bold text-[#f0c187] text-center mt-20">
              Nuestros paquetes de diseño web listos{" "}
            </h2>
            <p className="text-center text-lg my-7">
              Sitios de presupuesto con diseño de plantilla.{" "}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 lg:rotate-[9deg]">
              <div className="lg:-rotate-[9deg]">
                {" "}
                <Prices
                  titulo={"Página web para empresa"}
                  precio={290}
                  descripcion={"Página web totalmente funcional y efectiva"}
                  href='servicios/diseño-web'
                />
              </div>
              <div className="lg:-rotate-[9deg]">
                {" "}
                <Prices
                  titulo={"Tienda online"}
                  precio={390}
                  descripcion={
                    "Una tienda en línea con características convenientes y sin restricciones"
                  }
                  href='#'
                />
              </div>
              <div className="lg:-rotate-[9deg]">
                {" "}
                <Prices
                  titulo={"Páginas web especiales"}
                  precio={590}
                  descripcion={
                    "Una variedad de funciones para todo tipo de necesidades."
                  }
                  href='#'
                />
              </div>
              <div className="lg:-rotate-[9deg]">
                {" "}
                <Prices
                  titulo={"Optimización CEO"}
                  precio={100}
                  descripcion={
                    "Una solución flexible y de bajo riesgo, perfecta para todos."
                  }
                  href='#'
                />
              </div>
            </div>

            <div className="p-4 w-full hover:scale-105 duration-500 text-center">
              <div className=" p-4 rounded-2xl backdrop-blur-md  bg-[#ffffffbb] shadow-[#62afd070] shadow-md transition duration-500 hover:shadow-[#85ffbd] ">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col  justify-start items-start basis-2/3">
                    <h2 className="text-gray-900 text-2xl text-left font-bold">
                      Oferta individual
                    </h2>
                    <p className="my-3 text-left">
                      Nos asociamos con empresas de todos los tamaños y en todas
                      las etapas de su desarrollo. En caso de que su búsqueda no
                      se adapte a ninguno de nuestros paquetes o no sabe cual
                      elegir puede ponerse en contacto con nosotros.
                    </p>
                  </div>

                  <BtnRed text={"Habemos!"} href='#'/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
