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
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/portafolio/portafolio_2.png",
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/portafolio/portafolio_1.png",
    },
    {
        name: "Óptica Hristovi",
        href: "#",
        image: "/img/portafolio/portafolio_2.png",
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

                <div key={index} className={`bloqueado cursor-pointer hex ${index%3===0 && 'lg:col-span-2'} `}>
                    <Image
                        src={item.image}
                        width={400}
                        height={400}
                        alt={`Imagen Galeria ${item.name}`}
                        onClick={() => handleClickImage(item, index)}
                    />
                    <h2>{item.name}</h2>
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
