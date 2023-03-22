import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const mockups = [
    {
        name: "Autolavado Exprés",
        href: "https://autolavadoexpres.es/",
        image: "/img/portafolio/portafolio_1.png",
        descripcion: 'Página web'
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/portafolio/portafolio_2.png",
        descripcion: 'Página web'
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/mockup/mockup_1.png",
        descripcion: 'Página web'
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/mockup/mockup_2.png",
        descripcion: 'Página web'
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/mockup/mockup_1.png",
        descripcion: 'Página web'
    },

];

const HexagonalGalery = () => {
    const [clickedImg, setClickImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickImage = (item, index) => {
        setCurrentIndex(index);
        setClickImg(item.image);
    };

    const handleRotationRight = () => {
        const totalLenght = mockups.length;
        if (currentIndex + 1 >= totalLenght) {

            setCurrentIndex(0);
            const newUrl = mockups[0].image;
            setClickImg(newUrl);
            return;
        }

        const newIndex = currentIndex + 1;

        const newUrl = mockups.filter((item) => {
            return mockups.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0].image;
        setClickImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handleRotationLeft = () => {
        const totalLenght = mockups.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLenght - 1);
            const newUrl = mockups[totalLenght - 1].image;
            setClickImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = mockups.filter((item) => {
            return mockups.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0].image;
        setClickImg(newItem);
        setCurrentIndex(newIndex);

    };

    return (
        <div className="container max-w-[1300px] m-auto grid lg:grid-cols-2 content-center justify-items-center gap-5">
            {mockups.map((item, index) => (

                <div key={index} className={`relative cursor-pointer hex ${index % 3 === 0 && 'lg:col-span-2'}  `}>
                    <Image
                    className=""
                        src={item.image}
                        width={400}
                        height={400}
                        alt={`Imagen Galeria ${item.name}`}
                        onClick={() => handleClickImage(item, index)}
                    />
                    <div className=" absolute left-0 top-0 w-full h-full flex justify-center items-center opacity-100 lg:opacity-0 transition duration-500 hover:opacity-100" onClick={() => handleClickImage(item, index)}>
                        <div className="bg-[#383737bd] w-full py-2">
                            <h2 className=" text-2xl lg:text-3xl text-white uppercase text-center ">{item.name}</h2>
                            <p className=" text-xl text-gray-300 text-center">Tipo: {item.descripcion}</p>
                        </div>
                    </div>

                </div>
            ))}
            {clickedImg && (
                <Modal
                    clickedImg={clickedImg}
                    handleRotationRight={handleRotationRight}
                    handleRotationLeft={handleRotationLeft}
                    setClickImg={setClickImg}
                />
            )}
        </div>
    );
};

export default HexagonalGalery;
