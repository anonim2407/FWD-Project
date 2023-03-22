import React from "react";
import Image from "next/image";
const Modal = ({ clickedImg, handleRotationRight,handleRotationLeft, setClickImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickImg(null);
    }
  };

  return (
    <div className="dismiss fixed z-[100] top-0 left-0 right-0 w-full h-full bg-[#000000c5] flex items-center " onClick={handleClick}>
      <Image
      className=" block lg:max-w-[60%] lg:max-h-[80%] my-0 mx-auto shadow-sm"
        src={clickedImg}
        width={2000}
        height={2000}
        alt={`Imagen Galeria ${clickedImg.name}`}
      />
      <span className="dismiss absolute top-10 lg:top-20 right-10 lg:right-20 text-3xl text-white z-[100] cursor-pointer">X</span>
      <div onClick={handleRotationLeft} className={'overlay-arrows_right'}>
        <Image
          src={'/img/iconos/next.png'}
          width={2000}
          height={2000}
          alt={`Imagen Galeria ${clickedImg.name}`}
        />
      </div>
      <div onClick={handleRotationRight} className={'overlay-arrows_left'}>
        <Image
          src={'/img/iconos/prev.png'}
          width={2000}
          height={2000}
          alt={`Imagen Galeria ${clickedImg.name}`}
        />
      </div>
    </div>
  );
};

export default Modal;
