import React, { useState } from 'react';
import './Habitaciones.css'; // Importa estilos CSS

const Habitaciones = () => {
  // Habitación de ejemplo
  const habitacionEjemplo = {
    imagen: 'https://images.hola.com/imagenes/decoracion/20230425230358/dormitorios-inspirados-en-habitaciones-hoteles-am/1-237-28/habitaciones-hotel-5a-a.jpg',
    nombre: 'Habitación de Ejemplo',
    precio: 200,
    capacidad: 3
  };

  const habitaciones = [
    {
      imagen: 'https://images.hola.com/imagenes/decoracion/20230425230358/dormitorios-inspirados-en-habitaciones-hoteles-am/1-237-28/habitaciones-hotel-5a-a.jpg',
      nombre: 'Habitación Deluxe',
      precio: 150,
      capacidad: 2
    },
    {
      imagen: 'url_imagen_2',
      nombre: 'Suite Presidencial',
      precio: 300,
      capacidad: 4
    },
    {
      imagen: 'url_imagen_3',
      nombre: 'Habitación Estándar',
      precio: 100,
      capacidad: 2
    },
    {
      imagen: 'url_imagen_4',
      nombre: 'Habitación Familiar',
      precio: 200,
      capacidad: 6
    },
    {
      imagen: 'url_imagen_5',
      nombre: 'Suite Ejecutiva',
      precio: 250,
      capacidad: 3
    }
  ];

  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const previousRoom = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === 0 ? habitaciones.length - 1 : prevIndex - 1
    );
  };

  const nextRoom = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === habitaciones.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="habitaciones">
      <h2>Habitaciones</h2>
      {/* Habitación de ejemplo con estilos CSS */}
      <div className="habitacion-ejemplo">
        <img src={habitacionEjemplo.imagen} alt={habitacionEjemplo.nombre} />
        <div className="detalle">
          <h3>{habitacionEjemplo.nombre}</h3>
          <p>Precio: ${habitacionEjemplo.precio} por noche</p>
          <p>Capacidad: {habitacionEjemplo.capacidad} personas</p>
        </div>
      </div>
      {/* Carrusel de habitaciones */}
      <div className="habitacion-container">
        {habitaciones.map((habitacion, index) => (
          <div
            key={index}
            className={`habitacion ${index === currentRoomIndex ? 'active' : ''}`}
          >
            <img src={habitacion.imagen} alt={habitacion.nombre} />
            <div className="detalle">
              <h3>{habitacion.nombre}</h3>
              <p>Precio: ${habitacion.precio} por noche</p>
              <p>Capacidad: {habitacion.capacidad} personas</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={previousRoom}>&#10094;</button>
      <button className="next" onClick={nextRoom}>&#10095;</button>
    </div>
  );
};

export default Habitaciones;
