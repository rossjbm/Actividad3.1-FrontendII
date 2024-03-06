
import { Inicio } from "./paginas/Inicio/Inicio";
import { Landing } from "./paginas/Landing/Landing";
import { Encabezado } from "./componentes/Encabezado/Encabezado";
import { Ofertas } from "./paginas/Ofertas/Ofertas";
// import { Reservar } from "./paginas/Reservar/Reservar";
import { Error } from "./paginas/NotFound/Error";
import { BotonReservar } from "./componentes/botones/BotonReservar";
import { Pie } from "./componentes/PiePagina/Pie";
import { Habitaciones } from "./paginas/Habitaciones/Habitaciones";
import { Contacto } from "./paginas/Contacto/Contacto";
import { Pago } from "./paginas/Pago/Pago";

// REACT ROUTER
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import { Reservar } from "./paginas/Reservar/Reservar";

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
                <Route path="/ofertas" element={<Ofertas/>} />
                <Route path="/habitaciones" element={<Habitaciones/>} />
                <Route path="/blog" element={<h1>ESTAMOS EN BLOG</h1>} />
                <Route path="/pagos" element={<Pago/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/reservar" element={<Reservar />} />
                <Route path="*" element={<Error setHeaderMostrar={setHeaderMostrar} setBotonRMostrar={setBotonRMostrar} setPieMostrar={setPieMostrar}/>} />
            </Routes>
        </main>
        {pieMostrar ? <Pie/> : null}
        {botonRMostrar ? <BotonReservar/> : null}
        
        
    </>);
}

