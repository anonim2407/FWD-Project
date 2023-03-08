import { useEffect, useState } from "react";



/*
FUNCION PARA ESCONDER LA BARRA CUANDO VAMOS HACIENDO SCROLL
1. Importamos la función
2. Definimos 'const scrollDirection = useScrollDirection();'
3. Ponemos el siguiente codigo en el header 'sticky z-[20] ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-white transition-all duration-500'
MAS INOFRMACIÓN AQUI 'https://www.codemzy.com/blog/react-sticky-header-disappear-scroll'
*/

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
};
