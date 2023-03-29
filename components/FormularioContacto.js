import React from "react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';


const FormularioContacto = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tema, setTema] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [check, setCheck] = useState(false);

    const [errorVacio, setErrorVacio] = useState(false);
    const [errorNombre, setErrorNombre] = useState(false);
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorTelefono, setErrorTelefono] = useState(false);
    const [errorTema, setErrorTema] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState(false);
    const [errorCheck, setErrorChech] = useState(false)

    const [enviado, setEnviado] = useState(false);

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    const handleSubmit = (e) => {
        // VALIDACION DEL FORMULARIO

        e.preventDefault();

        if ([nombre, correo, tema, mensaje].includes("")) {
            setErrorVacio(true);
        } else {
            setErrorVacio(false);
        }

        if (nombre.split(" ").length != 2) {
            setErrorNombre(true);
        } else {
            setErrorNombre(false);
        }

        if (!validEmail.test(correo)) {
            setErrorCorreo(true);
        } else {
            setErrorCorreo(false);
        }

        if (isNaN(parseInt(telefono))) {
            setErrorTelefono(true);
        } else {
            setErrorTelefono(false);
        }

        const mensajeLimpio = mensaje.replace(/\s+/g, "");
        if (mensajeLimpio.length < 40) {
            setErrorMensaje(true);
        } else {
            setErrorMensaje(false);
        }

        if (!check) {
            setErrorChech(true)
        } else {
            setErrorChech(false)
        }




        //ENVIO DEL FORMULARIO UNA VEZ VALIDADO
        setTimeout(() => {
            if (
                !errorVacio &&
                !errorNombre &&
                !errorCorreo &&
                !errorTelefono &&
                !errorTema &&
                !errorMensaje &&
                check
            ) {
                emailjs.sendForm('service_uhb896s', 'template_vqskj16', e.target, 'MmCJ5RZxwPk3aX7kk')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });

                alert('Formulario Enviado Correctamente')
                setNombre('')
                setCorreo('')
                setTelefono('')
                setTema('')
                setMensaje('')
                setCheck(false)

            }
        }, 1000);

    };

    const handleChangeCheck = () => {
        setCheck(!check);
    };

    return (
        <div className="p-4 rounded-2xl backdrop-blur-md  bg-[#ffffffbb] shadow-[#62afd070] shadow-2xl transition duration-500 hover:shadow-[#f0c187] ">
            <h2 className=" text-3xl font-bold py-4 text-center text-[#f0c187]">
                Escribenos!
            </h2>

            {/* ERRORES DEL FORMULARIO */}

            {errorVacio && (
                <p className=" text-red-600 p-1 w-full text-center border border-1 rounded-lg font-semibold border-red-600 my-2">
                    Debes rellenar todos los campos obligatorios
                </p>
            )}

            <form className=" flex flex-col gap-7" onSubmit={handleSubmit}>
                {/* Nombre */}
                <div>
                    {errorNombre && (
                        <p className=" text-red-600 p-1 w-full text-center border border-1 rounded-lg my-1 font-semibold border-red-600 ">
                            Debes incluir nombre y apellido
                        </p>
                    )}
                    <label
                        for="nombre"
                        className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                        Tu Nombre y Apellido
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                        <input
                            name="nombre"
                            type="text"
                            id="nombre"
                            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border-[#f0c187] focus:ring-1 focus:ring-[#f0c187] "
                            placeholder="Nombre y Apellido"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Correo */}
                <div>
                    {errorCorreo && (
                        <p className=" text-red-600 p-1 w-full text-center border border-1 rounded-lg font-semibold border-red-600 my-2">
                            Introduce un correo válido
                        </p>
                    )}
                    <label
                        for="correo"
                        className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                        Tu correo electrónico
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                            </svg>
                        </div>
                        <input
                            name="correo"
                            type="text"
                            id="correo"
                            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border-[#f0c187] focus:ring-1 focus:ring-[#f0c187] "
                            placeholder="ej: name@gmail.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                </div>

                {/* Telefono */}
                <div>
                    {errorTelefono && (
                        <p className=" text-red-600 p-1 w-full text-center border border-1 rounded-lg font-semibold border-red-600 my-2">
                            Introduce un número de telefono válido
                        </p>
                    )}
                    <label
                        for="telefono"
                        className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                        Tu Teléfono (Opcional)
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            name="telefono"
                            type="tel"
                            id="telefono"
                            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border-[#f0c187] focus:ring-1 focus:ring-[#f0c187] "
                            placeholder="ej: +34 679 03 95 66 "
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                </div>

                {/* Tema */}
                <div>
                    <label
                        for="tema"
                        className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                        Tema
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            name="tema"
                            type="tel"
                            id="tema"
                            className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border-[#f0c187] focus:ring-1 focus:ring-[#f0c187] "
                            placeholder="ej: Consulta sobre una tienda virtual"
                            value={tema}
                            onChange={(e) => setTema(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Mensaje */}
                <div>
                    {errorMensaje && (
                        <p className=" text-red-600 p-1 w-full text-center border border-1 rounded-lg font-semibold border-red-600 my-2">
                            Describe mejor tu pregunta
                        </p>
                    )}
                    <label
                        for="mensaje"
                        className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                        Descripción
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <textarea
                            name="mensaje"
                            type="tel"
                            id="mensaje"
                            className="bg-gray-50 border min-h-[200px] border-gray-300  text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none focus:border-[#f0c187] focus:ring-1 focus:ring-[#f0c187] "
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Politica de privacidad */}
                <div>
                    {errorCheck && (
                        <p className=" text-red-600 p-1 w-full text-center border border-1 rounded-lg font-semibold border-red-600 my-2">
                            Debes aceptar nuestra política de privacidad
                        </p>
                    )}
                    <div className="flex items-center">
                        <input

                            id="check"
                            name="check"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            readOnly
                            checked={check}
                            onClick={handleChangeCheck}
                        />
                        <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                            Estoy de acuerdo con la{" "}
                            <span className=" text-blue-400">politica de privacidad</span>
                        </label>
                    </div>
                </div>


                <input
                    type={"submit"}
                    value={"Enviar"}
                    className={
                        " cursor-pointer text-lg font-semibold  px-4 py-2  bg-[#ff5c5c]  text-white rounded-xl  tracking-wider transition duration-300 hover:bg-[#ff4141] outline-none"
                    }
                />
            </form>
        </div>
    );
};

export default FormularioContacto;
