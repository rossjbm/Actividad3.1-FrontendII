import React from 'react'
import ReactDOM from 'react-dom/client'

// REACT ROUTER
import { createBrowserRouter, RouterProvider} from "react-router-dom";

// COMPONENTES
import {Inicio} from './paginas/Inicio/Inicio'

// ESTILOS
import './index.css'
// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// ICONOS
import { ImHappy } from "react-icons/im";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>SOMOS HAZBIN HOTEL <ImHappy /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Inicio/>
    <Button variant="primary">Soy Un Boton</Button>
    
  </>
)
