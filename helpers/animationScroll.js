
/* 
FUNCION QUE NOS ANIMA LOS ELEMENTOS CUANDO DAMOS SCROLL 
1. Importamos todas las partes 
2. Declaramos el useEffect con el teimpo que queremos '2000ms'
3. En el elemento que queremos animar ponemos (data-aos='') y dentro de los parentesis ponemos el tipo de animacion

MAS INFORMACION EN 'https://www.npmjs.com/package/aos#-animations'
*/

//Partes
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'




useEffect(() => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  })
}, [])








