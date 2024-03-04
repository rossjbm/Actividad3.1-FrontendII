
import { Inicio } from "./paginas/Inicio/Inicio";
import { Landing } from "./paginas/Landing/Landing";
import { Encabezado } from "./componentes/Encabezado/Encabezado";
import Ofertas from "./paginas/Ofertas/Ofertas";
// import { Reservar } from "./paginas/Reservar/Reservar";
// import { Acceder } from "./paginas/IniciarSesion/Acceder";
import { Error } from "./paginas/NotFound/Error";
import { BotonReservar } from "./componentes/botones/BotonReservar";
import { Pie } from "./componentes/PiePagina/Pie";
import Habitaciones from "./paginas/Habitaciones/Habitaciones";


// REACT ROUTER
import { Routes, Route} from "react-router-dom";
import { useState } from "react";

export function App() {
    const [headerMostrar, setHeaderMostrar] = useState(true)
    const [botonRMostrar, setBotonRMostrar] = useState(true)
    const [pieMostrar, setPieMostrar] = useState(true)

    return (<>
        {headerMostrar ? <Encabezado/> : null}
        <main className="min-h-[400px] md:min-h-[500px] lg:min-h-[350px]">
            <Routes>
                <Route path="/" element={<Landing setHeaderMostrar={setHeaderMostrar} setBotonRMostrar={setBotonRMostrar}/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/acceder" element={<h1>ESTAMOS EN INICIAR SESION</h1>} />
                <Route path="/ofertas" element={<Ofertas/>} />
                <Route path="/habitaciones" element={<Habitaciones/>} />
                <Route path="/blog" element={<h1>ESTAMOS EN BLOG</h1>} />
                <Route path="/pagos" element={<h1>ESTAMOS EN MODOS DE PAGOS</h1>} />
                <Route path="/contacto" element={<h1>ESTAMOS EN CONTACTO</h1>} />
                <Route path="/reservar" element={<h1>ESTAMOS EN RESERVAR, recuerda no mostrar boton</h1>} />
                <Route path="*" element={<Error setHeaderMostrar={setHeaderMostrar} setBotonRMostrar={setBotonRMostrar} setPieMostrar={setPieMostrar}/>} />
            </Routes>
        </main>
        {pieMostrar ? <Pie/> : null}
        {botonRMostrar ? <BotonReservar/> : null}
        
        
    </>);
}

