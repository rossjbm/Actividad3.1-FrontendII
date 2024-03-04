import { Link } from 'react-router-dom';
import { useEffect } from 'react';


import { Parallax } from '../../componentes/Parallax/Parallax';
import ImgUbicacion from '../../assets/ubicacion2.jpg';
import ImgSotisficado from '../../assets/sotisficado2.jpeg';
import ImgGastronomia from '../../assets/gastronomia2.jpg';
import ImgActividades from '../../assets/actividades2.jpg';

export function Landing({setHeaderMostrar, setBotonRMostrar}) {
    //NO MOSTRAR HEADER
    useEffect(() => {
        // Al entrar en la ruta
        setHeaderMostrar(false);
        setBotonRMostrar(false)
    
        // Al salir de la ruta
        return () => {
            setHeaderMostrar(true);
            setBotonRMostrar(true);
        };
    }, []);

    return(<section className='bg-blue-300'>
        <Parallax></Parallax>
        <div className='py-11 mb-40'>
            <article className='flex flex-col items-center gap-40'>
                <h2 className='text-black text-3xl font-textos text-center mt-20 md:text-4xl mx-5'>Bienvenido a Hazbin<span className='font-titulos text-4xl'>Hotel</span></h2>
                <div className='bg-landingFondo1 bg-cover bg-fixed shadow-2xl'>
                    <section className='bg-gray-300 flex flex-col items-center justify-center text-center gap-16 py-16'>
                        <h3 className='text-white font-bold text-xl font-textos text-justify w-4/5'>Lo Mejor para Disfrutar de la Isla de Margarita</h3>
                        <p className='text-white font-textos text-lg text-justify w-4/5'>En HazbinHotel, creemos que cada momento de tus vacaciones debe ser especial. Desde el momento en que pones un pie en nuestra propiedad, te sumergirás en un mundo de elegancia, comodidad y belleza natural.</p>
                        <p className='text-white font-textos text-lg text-justify w-4/5'>Nos ubicamos en: </p>
                        <Link to={`inicio`} className='w-4/5 '>
                            <button className='w-full h-16 border-white border-2 text-white text-xl font-textos md:w-1/2 hover:bg-gray-300'>Ingresa Ahora</button>
                        </Link>
                    </section>
                </div>
                <section className='flex flex-col items-center gap-20'>
                    <h3 className='font-bold text-2xl font-textos text-justify md:text-3xl'>Te Ofrecemos...</h3>

                    <div className='grid grid-cols-1 gap-32 xl:grid-cols-2 xl:gap-20 xl:m-10'>
                        <section className='flex flex-col sm:flex-row gap-5 bg-gray-300 shadow-2xl'>
                            <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl'>
                                <img src={ImgUbicacion} alt="Ubicación de HazbinHotel" className='w-full h-full object-cover'/>
                            </div>
                            <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                                <h4 className='text-2xl font-textos font-semibold text-white'> Ubicación Perfecta</h4>
                                <p className='text-lg font-textos text-justify text-white'>Situado en la pintoresca Isla de Margarita, nuestro hotel ofrece vistas panorámicas al mar Caribe y acceso directo a las playas de aguas cristalinas. ¡Despiértate con el sonido de las olas!</p>
                            </div> 
                        </section>
                        <section className='flex flex-col sm:flex-row gap-5 bg-gray-300 shadow-2xl'>
                            <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl '>
                                <img src={ImgSotisficado} alt="Diseño Interior de HazbinHotel" className='w-full h-full object-cover'/>
                            </div>
                            <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                                <h4 className='text-2xl font-textos font-semibold text-white'>Diseño Sofisticado</h4>
                                <p className='text-lg font-textos text-justify text-white'>Cada rincón de HazbinHotel ha sido diseñado pensando en la comodidad y el lujo. Nuestras habitaciones y suites cuentan con mobiliario elegante y colores relajantes.</p>
                            </div>
                        </section>
                        <section className='flex flex-col sm:flex-row gap-5 bg-gray-300 shadow-2xl'>
                            <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl '>
                                <img src={ImgGastronomia} alt="Comidas en HazbinHotel" className='w-full h-full object-cover'/>
                            </div>
                            <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                                <h4 className='text-2xl font-textos font-semibold text-white'>Experiencias Gastronómicas</h4>
                                <p className='text-lg font-textos text-justify text-white'>Nuestro restaurante ofrece una fusión de sabores locales e internacionales. Disfruta de platos frescos y deliciosos mientras contemplas las vistas al mar.</p>
                            </div>
                        </section> 

                        <section className='flex flex-col sm:flex-row gap-5 bg-gray-300 shadow-2xl'>
                            <div className='h-80 xl:h-full sm:w-1/2 shadow-2xl '>
                                <img src={ImgActividades} alt="Actividades en HazbinHotel" className='w-full h-full object-cover'/>
                            </div>
                            <div className='sm:w-1/2 p-5 flex flex-col gap-6'>
                                <h4 className='text-2xl font-textos font-semibold text-white'>Actividades para Todos</h4>
                                <p className='text-lg font-textos text-justify text-white'>Desde deportes acuáticos hasta excursiones por la isla, tenemos opciones para todos los gustos. Explora la belleza natural de Margarita o simplemente relájate en la playa.</p>
                            </div>
                        </section>
                    </div>
                </section>
            </article>
        </div>
        <div className='bg-landingFondo1 bg-cover bg-fixed shadow-2xl w-full'>
            <section className='bg-gray-300 flex flex-col items-center justify-center gap-16 py-20'>
                <h3 className='text-white font-bold text-2xl font-textos text-center w-4/5 sm:text-3xl'>¿Qué estás esperando?</h3>
                <a href={`inicio`} className='w-4/5 flex flex-col items-center'>
                    <button className='w-full h-16 border-white border-2 no-underline text-white text-xl font-textos md:w-1/2 hover:bg-gray-300 hover:border-4'>Ingresa Ahora</button>
                </a>
            </section>
        </div>
    </section>)
}