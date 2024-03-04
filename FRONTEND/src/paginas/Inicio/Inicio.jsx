
import { ServicioCarrusel } from "../../componentes/Inicio/ServicioCarrusel";


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
                <section className="p-5 border-black border-2 flex flex-col gap-4 justify-start items-center">
                    <h4 className="text-xl font-semibold">Atención al Cliente</h4>
                    <p className="text-lg font-bold bg-blue-200 px-2 py-1">24 horas del día</p>
                    <p className="text-center text-xl">Nuestro personal de recepción está siempre disponible para ayudarte con cualquier necesidad que tengas durante tu estancia</p>
                </section>
                <section className="p-5 border-black border-2 flex flex-col gap-4 justify-start items-center">
                    <h4 className="text-xl font-semibold">Restaurante Gourmet</h4>
                    <p className="text-lg font-bold bg-blue-200 px-2 py-1">7:00 a.m a 10:00 p.m</p>
                    <p className="text-center text-xl">Comienza tu día con un desayuno buffet, y puedes disfrutar todo el día de servicios al cuarto</p>
                </section>
                <section className="p-5 border-black border-2 flex flex-col gap-4 justify-star items-center">
                    <h4 className="text-xl font-semibold">Spa de Relajación</h4>
                    <p className="text-lg font-bold bg-blue-200 px-2 py-1">9:00 a.m a 6:00 p.m</p>
                    <p className="text-center text-xl">Te recomendamos hacer una reserva del spa con anticipación para disfrutar tu día de relajación</p>
                </section>
                <section className="p-5 border-black border-2 flex flex-col gap-4 justify-start items-center">
                    <h4 className="text-xl font-semibold">Piscina</h4>
                    <p className="text-lg font-bold bg-blue-200 px-2 py-1">6:00 a.m a 10:00 p.m</p>
                    <p className="text-center text-xl">Nuestra piscina al aire libre es el lugar perfecto para relajarse y disfrutar del sol desde temprano</p>
                </section>
                <section className="p-5 border-black border-2 flex flex-col gap-4 justify-start items-center">
                    <h4 className="text-xl font-semibold">Actividades Recreativas</h4>
                    <p className="text-lg font-bold bg-blue-200 px-2 py-1">Depende de la Actividad</p>
                    <p className="text-center text-xl">Las actividades programadas, como deportes acuáticos y excursiones, generalmente se realizan durante el día</p>
                </section>
                <section className="p-5 border-black border-2 flex flex-col gap-4 justify-start items-center">
                    <h4 className="text-xl font-semibold">Gimnasio</h4>
                    <p className="text-lg font-bold bg-blue-200 px-2 py-1">24 horas del día</p>
                    <p className="text-center text-xl">Nuestro gimnasio está disponible para los huéspedes que deseen mantener su rutina de ejercicios durante su estancia</p>
                </section>
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

            <div className="static h-36 bg-bgFondo2 bg-cover bg-fixed w-full ">
                <div className="flex justify-center items-center w-full h-36 bg-gray-400 p-5">
                    <h2 className="text-white text-3xl font-textos text-center">Te Puede Interesar</h2>
                </div>
            </div>
        </article>
    </>)
}