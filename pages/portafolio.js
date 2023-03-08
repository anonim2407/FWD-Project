import Lottie from "@/helpers/Lottie";
import Layout from "@/layout/Layout";
import HeaderComponents from "@/components/HeaderComponents";
import HexagonalGalery from "@/components/HexagonalGalery";
const Portafolio = () => {

    return (
        <div>
            <Layout>
                <HeaderComponents image={'https://assets8.lottiefiles.com/packages/lf20_w98qte06.json'} title={'Portafolio'} />
                <main>

                    <section className="conntainer m-auto max-w-[1300px] px-2  my-20">
                        <div className="max-w-[700px] m-auto">
                            <p className=" text-center text-lg">
                                La <span className="font-semibold">buena relación</span> con nuestros clientes es esencial para nosotros.
                                Estamos agradecidos a todos ellos por <span className="font-semibold">confiar en nosotros</span>, ya que
                                con toda la competéncia que hay ellos nos han elegido a nosotros.
                                A continuación podeis ver los proyectos desarrolados por nosotros.
                                Si quereis trabajar con nosotros dudeis en poneros en contacto.
                            </p>
                        </div>

                    </section>


                    <HexagonalGalery/>
                </main>
            </Layout>
        </div>
    );
};

export default Portafolio;
