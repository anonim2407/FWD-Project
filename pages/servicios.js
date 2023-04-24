import Layout from "@/layout/Layout";
import Lottie from "@/helpers/Lottie";
import Link from "next/link";
import Image from "next/image";
import Cards from "@/components/Cards";
import CardsServices from "@/components/CardsServices";
import FormularioContacto from "@/components/FormularioContacto";
const Servicios = () => {
  return (
    <>
      <Layout>
        <main>
          <div className="container m-auto max-w-6xl px-4 ">
            <section className=" flex  justify-center items-center">
              <div className="container m-auto max-w-6xl py-28   gap-10 grid md:grid-cols-2 items-center">
                <div className="text-left grid gap-5 text-center lg:text-left">
                  <h1 className="text-center md:text-left font-extrabold text-5xl md:text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#aa9479dc] to-[#f0c187]">
                    Servicios
                  </h1>
                  <p className=" ">
                    Creamos sitios orientados al usuario para promover su
                    negocio.
                  </p>
                  <Link href="#">
                    <p className="font-bold  uppercase text-[#ff5c5cbf] transition duration-300 hover:text-[#ff4141]">
                      &#10596; Hablemos sobre su proyecto
                    </p>
                  </Link>
                </div>

                <Lottie href="https://assets9.lottiefiles.com/packages/lf20_vsiy6ziu.json" />
              </div>
            </section>

            <section className="grid lg:grid-cols-3 gap-5 content-center justify-items-center">
              <Cards
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16 stroke-[#ff5c5cbf]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                }
                title={"Mejor compatibilidead"}
                description={
                  "Creamos sitios modernos, totalmente compatibles con todo tipo de pantallas para que vuestro cliente tenga la mejor experienca posible."
                }
              />

              <Cards
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16 stroke-[#ff5c5cbf]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                }
                title={"Diseño autogestionable"}
                description={
                  "Sin ayuda. Administre usted mismo el contenido de su sitio web."
                }
              />

              <Cards
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16 stroke-[#ff5c5cbf]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                }
                title={"Vuestros clientes"}
                description={
                  "Usando las metodologías más actuales de SEO posicionamiento os ayudamos a poneros en contacto con vuestros clientes."
                }
              />
            </section>

            <section className="flex flex-col lg:flex-row mt-14 ">
              <div className=" flex flex-col justify-center gap-10 basis-2/5 ">
                <h2 className="text-center lg:text-left font-bold text-4xl lg:text-5xl tracking-wider text-[#aa9479dc] to-[#f0c187]">
                  Diseño web y marketing
                </h2>
                <p className="  text-center lg:text-left ">
                  Os ofrecemos todos los servicios necesarios para crear un
                  sitio web desde zero, o para rediseñar un sitio existente.{" "}
                </p>
                <div className="flex justify-evently items-center gap-5">
                  <Image
                    src={"/img/iconos/icon-brand.png"}
                    width={68}
                    height={68}
                    alt="Imagen icono brand"
                  />
                  <div>
                    <h3>Identidad de marca</h3>
                    <p className="   lg:text-left">
                      Hacemos identidades de marca que transmite un mensaje
                      claro.
                    </p>
                  </div>
                </div>
                <div className="flex justify-evently items-center gap-5">
                  <Image
                    src={"/img/iconos/icon-optimization.png"}
                    width={68}
                    height={68}
                    alt="Imagen icono optimización"
                  />
                  <div>
                    <h3>Identidad de marca</h3>
                    <p >
                      Hacemos identidades de marca que transmite un mensaje
                      claro.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-3/5">
                <Lottie
                  href={
                    "https://assets10.lottiefiles.com/packages/lf20_ghs9bkkc.json"
                  }
                />
              </div>

              <div></div>
            </section>
          </div>

          <section className=" grid md:grid-cols-3 xl:grid-cols-6    backdrop-blur-md  bg-[#ffffffcf] shadow-[#62afd070] shadow-2xl transition duration-500 hover:shadow-[#87def0] ">
            <CardsServices
              href={"#"}
              img={"/img/iconos/icon-webpage.png"}
              bg_color={"bg-[#5EB9C2]"}
              title={"Sitio de la empresa/ negocio"}
              text={
                "Combinando diseño moderno y una investigacion en profundidad desarrollamos su marca que lo diferencia en la industria y ayuda a hacer crecer su negocio."
              }
            />
            <CardsServices
              href={"#"}
              img={"/img/iconos/icon-ecommercepage.png"}
              bg_color={"bg-[#58CBC0]"}
              title={"Tienda online lista"}
              text={
                "Una oferta excelente y económica para el comercio en línea. Un sitio funcional con una apariencia hermosa y sin limitaciones."
              }
            />
            <CardsServices
              href={"#"}
              img={"/img/iconos/icon-profecionalpage.png"}
              bg_color={"bg-[#6ADBB3]"}
              title={"Tienda online PRO"}
              text={
                'Una opción funcional aún más rica para una tienda en línea que simplemente "llama" la atención, pero ofrece excelentes herramientas de marketing para ventas exitosas.'
              }
            />
            <CardsServices
              href={"#"}
              img={"/img/iconos/icon-specialpage.png"}
              bg_color={"bg-[#90E99E]"}
              title={"Sitios web especiales"}
              text={
                "Sitio web de hotel, restaurante, pedidos de comida en línea, bienes raíces, plataforma de mercado: ¡podemos ofrecerle casi cualquier cosa."
              }
            />
            <CardsServices
              href={"#"}
              img={"/img/iconos/icon-seopage.png"}
              bg_color={"bg-[#C1F385]"}
              title={"Optimización SEO"}
              text={
                "Su sitio no funcionará lo suficientemente bien para usted si no es detectable. Desbloquearemos el potencial de su sitio optimizándolo para los motores de búsqueda."
              }
            />

            <CardsServices
              href={"#"}
              img={"/img/iconos/icon-onepage.png"}
              bg_color={"bg-[#F9F871]"}
              title={"Sitio de una pàgina"}
              text={
                '"Mucho" no significa "calidad". ¿Ofrecen un tipo de servicio y pueden presentar su negocio en una sola página? ¡Esta opción económica es solo para ti.'
              }
            />
          </section>

          <section className="container max-w-6xl m-auto px-4 flex flex-col md:flex-row-reverse mt-14 ">
            <div className=" flex flex-col justify-center gap-10 basis-2/5 ">
              <h2 className="text-center md:text-left font-bold text-4xl md:text-5xl tracking-wider text-[#aa9479dc] to-[#f0c187]">
                Diseño individual
              </h2>
              <p className="  text-center md:text-left ">
                ¿Tus necesidades no encajan en ninguno de nuestros paquetes?
                Envíenos su consulta y le prepararemos una oferta individual.
              </p>
              <p className="  text-center md:text-left ">
                Ya sea que esté interesado en una característica específica o
                tenga una determinada visión en mente que no encaja en ninguna
                plantilla, le ofreceremos la opción óptima que se ajuste a un
                presupuesto adecuado.
              </p>
              <Link href="/contacto">
                    <p className="font-bold  uppercase text-[#ff5c5cbf] transition duration-300 hover:text-[#ff4141]">
                      &#10596; Hablemos sobre su proyecto
                    </p>
                  </Link>
            </div>
            <div className="basis-3/5 md:p-20">
              <Lottie
                href={
                  "https://assets10.lottiefiles.com/packages/lf20_2lruogho.json"
                }
              />
            </div>

            <div></div>
          </section>

          <section className="container max-w-6xl m-auto py-20 px-4 md:px-[15%] ">
            <div className=" hidden md:block absolute left-0 m-auto w-[500px] mt-[200px]">
              <Lottie
                href={
                  "https://assets6.lottiefiles.com/packages/lf20_iYvSqSMKZB.json"
                }
              />
            </div>

            <div className="text-center font-bold text-4xl my-6">
              <h2 className="text-[#f0c187]">¿Teneis un proyecto en mente?</h2>
            </div>

            <FormularioContacto />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Servicios;
