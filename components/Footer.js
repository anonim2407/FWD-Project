import Lottie from "@/helpers/Lottie";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" mt-20  backdrop-blur-[8px]  bg-[#ffffff6e] transition-all duration-500">
      <div className="container m-auto max-w-[1300px] px-2 py-10">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className=" basis-2/3 grid gap-10 md:grid-cols-2 justify-center content-center lg:justify-items-start  lg:content-around" >


            <div className="text-center lg:text-left" >
              <Link href="/">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  MW<span className=" font-light">Desings</span>
                </p>
              </Link>
             
            </div> 
            <div className='flex justify-center items-center gap-4  '>
                <Link href={'#'}>
                  <Image src={'/img/iconos/facebook.png'} width={40} height={40} alt={'Image Facebook'} />
                </Link>
                <Link href={'#'}>
                  <Image src={'/img/iconos/instagram.png'} width={40} height={40} alt={'Image Instagram'} />
                </Link>
              </div>
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-xl font-bold leading-6 text-black">¿Tienes una pregunta?</h2>
              <h3 className="text-gray-600  font-semibold">Hablanos a travez del siguiente telefono:</h3>
              <Link className="text-gray-600  transition duration-300 hover:text-[#f0c187]" type="tel" href={'tel: +34658467934'}>(+34) 658 46 79 34</Link>
              <h3 className="text-gray-600 font-semibold">Hablanos a travez del siguiente telefono:</h3>
              <Link className="text-gray-600  transition duration-300 hover:text-[#f0c187]" type="mailto" href={'mailto: kiril.kk2002@gmail.com'}>(+34) correo@correo.com</Link>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-xl font-bold leading-6 text-black mb-4">Servicios principales</h2>
              <ul className="flex flex-col gap-4 ">
                <li className="text-gray-600  transition duration-300 hover:text-[#f0c187]">
                  <Link href={"#"}>Página web para empresa</Link>
                </li>
                <li className="text-gray-600  transition duration-300 hover:text-[#f0c187]">
                  <Link href={"#"}>Tienda online</Link>
                </li>
                <li className="text-gray-600  transition duration-300 hover:text-[#f0c187]">
                  <Link href={"#"}>Páginas web especiales</Link>
                </li>
                <li className="text-gray-600  transition duration-300 hover:text-[#f0c187]">
                  <Link href={"#"}>Optimización CEO</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="basis-1/3 grid gap-5  justify-center content-center lg:justify-items-start  lg:content-around text-center ">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h2 className=" font-bold text-4xl mt-10">¿Tienes una idea?</h2>
              <div>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900  transition duration-300 hover:text-[#f0c187]"
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
            </div>
            <div className="max-w-[300px]">
              <Lottie href={'https://assets9.lottiefiles.com/packages/lf20_tyi61jpp.json'} /> 
            </div>
           
          </div>
        </div>
      </div>

      <p className="font-semibold  text-center py-6">Copyright {new Date().getFullYear()} © All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
