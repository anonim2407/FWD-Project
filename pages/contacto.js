import Layout from '@/layout/Layout'
import FormularioContacto from '@/components/FormularioContacto'
import Link from 'next/link'
import Lottie from '@/helpers/Lottie'
const Contacto = () => {
  return (
    <div>
      <Layout>
        <div className="container m-auto max-w-[1300px] min-h-screen pt-36  px-4 text-center  md:text-left">
          <div className=' grid gap-10 md:grid-cols-3 content-center çjustify-items-stretch'>

            <div className='flex flex-col gap-6'>
              <div>
                <h1 className=" py-5 inline-block md:text-left font-extrabold text-5xl md:text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#aa9479dc] to-[#f0c187]">Contacto</h1>
              </div>

              <p>¡Estariamos encantados en hablar sobre vuestro proyecto!</p>
              <p>Para nosotros la comunicación con nuestros clientes es esencial y a continuación os indicamos como os podeis poner en contacto con nosotros.</p>
              <div className='flex flex-col gap-2 justify-center items-center'>

                <Link type="tel" href={'tel: +34658467934'} className="w-[250px] text-center text-lg font-semibold  px-4 py-2  bg-[#ff5c5c]  text-white rounded-full  tracking-wider transition duration-300 hover:bg-[#ff4141] outline-none">
                  (+34) 658 467 79 34
                </Link>
                <Link type="mailto" href={'mailto: kiril.kk2002@gmail.com'} className="w-[250px] text-center text-lg font-semibold  px-4 py-2  bg-[#5ce1ff]  text-white rounded-full  tracking-wider transition duration-300 hover:bg-[#3facc4] outline-none">
                  correo@correo.com
                </Link>
              </div>
              <div className='p-4 rounded-2xl backdrop-blur-md  bg-[#ffffffbb] shadow-[#62afd070] shadow-2xl transition duration-500 hover:shadow-[#f0c187] h-full flex flex-col justify-around items-center'>

                <h2 className='font-bold text-2xl'>Horario de trabajo</h2>
                <div className='w-[150px]'>
                  <Lottie href={'https://assets6.lottiefiles.com/packages/lf20_hslr74jo.json'} />
                </div>

                <div className='text-center'>
                  <p>Lunes a Viernes:</p>
                  <p>9.00 - 18.00</p>
                </div>
                <div className='text-center'>
                  <p>Sabado:</p>
                  <p>9.00 - 13.00</p>
                </div>

              </div>

            </div>

            <div className='md:col-span-2'>
              <FormularioContacto />
            </div>

          </div>


        </div>
      </Layout>
    </div>
  )
}

export default Contacto
