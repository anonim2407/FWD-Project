import Layout from "@/layout/Layout";
import Link from "next/link";
import Lottie from "@/helpers/Lottie";
import Image from "next/image";
import FormularioContacto from "@/components/FormularioContacto";

const TipoOnePage = () => {
  return (
    <div>
      <Layout>
        <main>
          <section className=" p-4 flex justify-center items-center min-h-screen">
            <div className=" py-28   gap-10 flex flex-col md:flex-row-reverse items-center">
              <div className="text-left grid gap-5  lg:text-left basis-1/2">
                <h1 className="text-center md:text-left font-extrabold text-5xl min-h-[100px] md:min-h-[200px] md:text-8xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#aa9479dc] to-[#f0c187]">
                  Landing Page
                </h1>
                <p className="text-lg text-center md:text-left">
                  Un sitio diseñado según tus criterios. Un diseño individual
                  para su sitio le garantiza una presentación 100% única en
                  Internet.
                </p>
                <Link href="#">
                  <p className="font-bold text-lg  uppercase text-[#ff5c5cbf] transition duration-300 hover:text-[#ff4141]">
                    &#10596; Hablemos sobre su proyecto
                  </p>
                </Link>
              </div>
              <div className="  basis-1/2">
                <Lottie href="https://assets5.lottiefiles.com/packages/lf20_BSBIO0WLnt.json" />
              </div>
            </div>
          </section>
          <section className=" bg-white">
            <article className="py-20 px-4">
              <div className=" bg-inherit container max-w-6xl mx-auto flex flex-col md:flex-row gap-5">
                <div className="basis-1/2 ">
                  <h2 className="text-7xl ">
                    Página web que <span className="subrallado">funciona</span>
                  </h2>
                </div>
                <div className="basis-1/2 flex flex-col gap-5 text-lg ">
                  <p>
                    Una página de destino en el ámbito del marketing digital se
                    crea con el objetivo específico de llevar al usuario a
                    realizar{" "}
                    <span className=" font-bold">una acción concreta</span>. El
                    visitante accede a ella tras hacer clic en un enlace de
                    publicidad en Google, Facebook u otra red social, o bien a
                    través de un enlace incluido en una campaña de correo
                    electrónico, entre otras opciones.
                  </p>
                  <p>
                    A diferencia de otros tipos de sitios web, cuyos objetivos
                    pueden ser más diversos y requieren de una navegación más
                    extensa, las páginas de destino se centran en{" "}
                    <span className=" font-bold">un propósito específico</span>,
                    conocido comúnmente como CTA (Call To Action o Llamado a la
                    Acción). En estas páginas, se busca que el usuario realice
                    una acción concreta, como comprar un producto, descargar un
                    ebook, registrarse a un curso, entre otros objetivos
                    similares.
                  </p>
                  <p>
                    La página de destino es una{" "}
                    <span className=" font-bold">
                      poderosa herramienta de marketing{" "}
                    </span>
                    que debe ser utilizada con precaución. Si se emplea de
                    manera efectiva,{" "}
                    <span className=" font-bold">
                      puede aumentar significativamente tus ventas.
                    </span>{" "}
                    La clave para el éxito en este tipo de páginas radica en la
                    combinación de contenido relevante y único, un producto de
                    calidad y una visión intuitiva del usuario, lo que te
                    garantizará un resultado satisfactorio.
                  </p>
                </div>
              </div>
            </article>
            <article className="container max-w-6xl mx-auto py-20 px-4">
              <h3 className="text-4xl text-center font-semibold">
                Todas las web langing deben estar formadas por:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 py-20">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 fill-green-300"
                  >
                    <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className=" space-y-4">
                    <h3 className="font-semibold  text-xl">Una oferta única</h3>
                    <p className="text-lg">
                      Decir como sois diferentes y mejores que los otros y lo
                      que ofreceis.
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 fill-green-300"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  <div className=" space-y-4">
                    <h3 className="font-semibold  text-xl">Ventajas</h3>
                    <p className="text-lg">
                      Es esencial presentar el servicio/producto detalladamente
                      y destacar sus características únicas y beneficios, así
                      como sus ventajas comparativas.
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 fill-green-300"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                  <div className=" space-y-4">
                    <h3 className="font-semibold  text-xl">Evidencias</h3>
                    <p className="text-lg">
                      Las reseñas, asociaciones y comentarios en video son
                      herramientas poderosas para destacar las fortalezas de tu
                      servicio o producto y demostrar por qué eres la mejor
                      opción en el mercado.
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-20 h-20 fill-green-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className=" space-y-4">
                    <h3 className="font-semibold  text-xl">Convertir - CTA</h3>
                    <p className="text-lg">
                      Define una acción clara y sencilla que se espera que el
                      usuario realice en la página de destino, como completar un
                      formulario, llamar o escribir en un chat.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="container max-w-6xl mx-auto py-20 px-4">
              <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5">
                <div className="basis-1/2 space-y-5">
                  <h3 className="text-4xl font-semibold">
                    <span className="subrallado">Optimización</span> de los
                    gastos
                  </h3>
                  <p className="text-lg ">
                    Enviar todo el tráfico de sus campañas de PPC, publicidad de
                    Facebook y/o SEO a la página de inicio de su sitio web puede
                    resultar en una pérdida de dinero. Para optimizar su
                    inversión, es fundamental contar con páginas de destino
                    específicas que lleven al cliente a realizar una acción
                    deseada, como realizar una compra, hacer una llamada o
                    completar un formulario. La función principal de estas
                    páginas de destino es convertir al usuario en un cliente
                    potencial realizando una acción específica.
                  </p>
                </div>
                <div className="basis-1/2">
                  <Image
                    className="banner_img"
                    src={"/img/one_page/optimizacion_gastos.jpeg"}
                    width={1000}
                    height={1000}
                    alt="Imagen Optimización de los gastos "
                  />
                </div>
              </div>
            </article>
            <article className="container max-w-6xl mx-auto py-20 px-4">
              <div className=" space-y-5">
                <h3 className="text-center text-4xl font-semibold">
                  Se "acorta" el camino a la conversión
                </h3>
                <p className="text-lg text-center">
                  Una Landing Page bien estructurada y con contenido original
                  puede hacer que el usuario realice fácilmente la acción
                  deseada. Es importante destacar que el botón de llamada a la
                  acción es el elemento principal en la página y su ubicación
                  debe ser estratégica, además de tener un diseño llamativo y un
                  texto persuasivo. Un ejemplo de esto es reemplazar la palabra
                  genérica "Enviar" por algo más atractivo como "Hablemos". De
                  igual forma, al vender un producto para perder peso, en vez de
                  usar el término "Comprar", se puede utilizar una frase más
                  motivadora como "Quiero perder peso".
                </p>
              </div>

              <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center content-center gap-10 py-20">
                <div className="max-w-[100px] p-3 shadow-lg rounded-full banner_img ">
                  <Image
                  className=''
                    src={"/img/one_page/google_logo.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="max-w-[100px] p-3 shadow-lg rounded-full banner_img3">
                  <Image
                  className='max-w-'
                    src={"/img/one_page/dropbox_logo.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="max-w-[100px] p-3 shadow-lg rounded-full banner_img2">
                  <Image
                  className='max-w-'
                    src={"/img/one_page/google_drive_logo.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="max-w-[100px] p-3 shadow-lg rounded-full banner_img3">
                  <Image
                  className='max-w-'
                    src={"/img/one_page/google_analitycs_logo.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="max-w-[100px] p-3 shadow-lg rounded-full banner_img">
                  <Image
                  className='max-w-'
                    src={"/img/one_page/paypal_logo.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="max-w-[100px] p-3 shadow-lg rounded-full banner_img3">
                  <Image
                  className='max-w-'
                    src={"/img/one_page/google_ads_logo.png"}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
              </div>
            </article>
            <article className="container max-w-6xl mx-auto py-20 px-4">

            </article>
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
    </div>
  );
};

export default TipoOnePage;
