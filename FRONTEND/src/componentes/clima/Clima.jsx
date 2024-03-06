
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RecibirClima } from './Fetch';
import { CodigoClima } from './CodigoCLima';

export function Clima() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    const [temperaturaActual, setTemperaturaActual] = useState(0)
    const [humedadActual, setHumedadActual] = useState(0)
    const [tiempoActual, setTiempoActual] = useState(0)
    const [codigoDeClimaActual, setCodigoDeClimaActual] = useState(0)
    const [vientoActual, setVientoActual] = useState(0)

    async function infoClima(filtro, hora) {
        console.log(filtro, hora,'qqq');
        try {
            var resultado = await RecibirClima()
        } catch (error) {
            console.error(error);
        }
        console.log(resultado);

        if (typeof filtro !== 'undefined' && typeof hora !== 'undefined') {
            console.log('re1');
            console.log(resultado.hourly[filtro][hora]);
            return(resultado.hourly[filtro][hora])

        }else if (typeof filtro !== 'undefined') {
            console.log('re2');
            console.log(resultado.hourly[filtro]);
            return(resultado.hourly[filtro])

        }else{
            console.log('re3');
            return(resultado.hourly)
        }

    }

    useEffect(()=>{
        async function climaActual() {
            setTemperaturaActual(await infoClima('temperature_2m',currentHour))
            setHumedadActual(await infoClima('relative_humidity_2m',currentHour))
            setTiempoActual(await infoClima('time',currentHour))
            setCodigoDeClimaActual(await infoClima('weather_code',currentHour))
            setVientoActual(await infoClima('wind_speed_10m',currentHour))
        }
        climaActual()
        
    },[show])
    
    return (
        <>
        <div className='fixed top-1/4 -right-1'>
            <button onClick={handleShow} className="border-solid border-2 border-green-100 bg-gradient-to-br from-white to-blue-200 rounded-l-3xl ">
                <CodigoClima codigo={codigoDeClimaActual} time={tiempoActual} />
                <p className='relative bottom-3 '>{temperaturaActual}°</p>
            </button>
        </div>
        <Offcanvas  show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header>
                <button className='absolute top-5 right-7' onClick={(e)=>{e.preventDefault(),handleClose()}}><IoIosCloseCircleOutline className='text-4xl' /></button>
            <Offcanvas.Title>Clima
                <CodigoClima codigo={codigoDeClimaActual} time={tiempoActual}/>
                <p>Temperatura: {temperaturaActual}°</p>
                <p>Humedad: {humedadActual}%</p>
                <p>Viento: {vientoActual}km/h</p>
                <p>Ultima información extraída a las {currentHour}</p>
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {temperaturaActual}
            {tiempoActual}
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}