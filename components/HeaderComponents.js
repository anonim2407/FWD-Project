import Lottie from "@/helpers/Lottie";

const HeaderComponents = ({image, title}) => {
    const backgroundImageProjects = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.0)),url('/img/bg_projects4.jpg')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "80vh",
    };

    return (
        <section
            style={backgroundImageProjects}
            className=" recorte-fondo flex  justify-center items-center"
        >
            <div className="container m-auto max-w-6xl pt-28 md:pt-0 px-4 flex gap-10 flex-col md:flex-row justify-between items-center ">
                <div>
                    <h1 className="text-center md:text-left font-extrabold text-5xl md:text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#aa9479dc] to-[#f0c187]">{title}</h1>
                </div>

                <div className="">

                    <div className="max-w-[800px]">
                        <Lottie href={image} />
                    </div>
                </div>
            </div>






        </section>
    )
}

export default HeaderComponents
