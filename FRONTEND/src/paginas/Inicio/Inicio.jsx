
import { ServicioCarrusel } from "../../componentes/Inicio/ServicioCarrusel";
import { Horarios } from "../../componentes/Inicio/Horarios";

export function Inicio() {
    return (<>
        <article className="flex flex-col gap-20">
            <div className="static h-56 bg-bgFondo1 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-56 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">HazbinHotel: Un Paraíso a tu Disposición</h2>
                </div>
            </div>

            <div className="font-textos text-lg flex flex-col p-10 gap-6 text-justify md:px-56 md:flex-row md:gap-14">
                <p className="md:bg-gray-300 md:p-5 md:text-white">Ubicado en la paradisíaca Isla de Margarita, el HazbinHotel es un refugio de elegancia, tranquilidad, seguridad y diversión.</p>

                <p className="md:bg-gray-300 md:p-5 md:text-white">Este es más que un lugar para quedarse, es una experiencia. Reserva tu estancia hoy y descubre el paraíso en la Isla de Margarita.</p>
            </div>

            <div className="static h-36 bg-bgFondo1 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Horarios</h2>
                </div>
            </div>

            <div className="font-textos grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 p-10">
                <Horarios/>
            </div>

            <div className="static h-36 bg-bgFondo2 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Servicios</h2>
                </div>
            </div>

            <div>
                <ServicioCarrusel/>
            </div>

            <div className="static h-36 bg-bgFondo1 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Oferta Especial</h2>
                </div>
            </div>

            
        </article>
    </>)
}