import React, { useState } from 'react';
import './Ofertas.css'; // Importa estilos CSS

const Ofertas = () => {
  // Datos de las habitaciones individuales
  const habitacionesIndividuales = [
    {
      imagen: 'url_imagen_1',
      nombre: 'Habitación Individual 1',
      precio: 100,
      capacidad: 1,
      descuento: 10
    },
    {
      imagen: 'url_imagen_2',
      nombre: 'Habitación Individual 2',
      precio: 120,
      capacidad: 1,
      descuento: 15
    },
    {
      imagen: 'url_imagen_3',
      nombre: 'Habitación Individual 3',
      precio: 90,
      capacidad: 1,
      descuento: 5
    }
  ];

  // Datos de las habitaciones matrimoniales
  const habitacionesMatrimoniales = [
    {
      imagen: 'url_imagen_4',
      nombre: 'Habitación Matrimonial 1',
      precio: 200,
      capacidad: 2,
      descuento: 20
    },
    {
      imagen: 'url_imagen_5',
      nombre: 'Habitación Matrimonial 2',
      precio: 180,
      capacidad: 2,
      descuento: 15
    },
    {
      imagen: 'url_imagen_6',
      nombre: 'Habitación Matrimonial 3',
      precio: 220,
      capacidad: 2,
      descuento: 25
    }
  ];

  const [slideIndexIndividuales, setSlideIndexIndividuales] = useState(0);
  const [slideIndexMatrimoniales, setSlideIndexMatrimoniales] = useState(0);

  const nextSlideIndividuales = () => {
    setSlideIndexIndividuales((prevIndex) =>
      prevIndex === habitacionesIndividuales.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlideIndividuales = () => {
    setSlideIndexIndividuales((prevIndex) =>
      prevIndex === 0 ? habitacionesIndividuales.length - 1 : prevIndex - 1
    );
  };

  const nextSlideMatrimoniales = () => {
    setSlideIndexMatrimoniales((prevIndex) =>
      prevIndex === habitacionesMatrimoniales.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlideMatrimoniales = () => {
    setSlideIndexMatrimoniales((prevIndex) =>
      prevIndex === 0 ? habitacionesMatrimoniales.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="ofertas-container">
      <div className="individuales-container">
        <h2>Habitaciones Individuales</h2>
        <div className="habitacion-container-individuales">
          <button className="prev-individuales" onClick={prevSlideIndividuales}>&#10094;</button>
          {habitacionesIndividuales.map((habitacion, index) => (
            <div key={index} className={`habitacion-individuales ${index === slideIndexIndividuales ? 'active' : ''}`}>
              <img src={habitacion.imagen} alt={habitacion.nombre} />
              <div className="detalle-individuales">
                <h3>{habitacion.nombre}</h3>
                <p>Precio: ${habitacion.precio}</p>
                <p>Capacidad: {habitacion.capacidad} persona(s)</p>
                <p>Descuento: {habitacion.descuento}%</p>
              </div>
            </div>
          ))}
          <button className="next-individuales" onClick={nextSlideIndividuales}>&#10095;</button>
        </div>
      </div>

      <div className="matrimoniales-container">
        <h2>Habitaciones Matrimoniales</h2>
        <div className="habitacion-container-matrimoniales">
          <button className="prev-matrimoniales" onClick={prevSlideMatrimoniales}>&#10094;</button>
          {habitacionesMatrimoniales.map((habitacion, index) => (
            <div key={index} className={`habitacion-matrimoniales ${index === slideIndexMatrimoniales ? 'active' : ''}`}>
              <img src={habitacion.imagen} alt={habitacion.nombre} />
              <div className="detalle-matrimoniales">
                <h3>{habitacion.nombre}</h3>
                <p>Precio: ${habitacion.precio}</p>
                <p>Capacidad: {habitacion.capacidad} persona(s)</p>
                <p>Descuento: {habitacion.descuento}%</p>
              </div>
            </div>
          ))}
          <button className="next-matrimoniales" onClick={nextSlideMatrimoniales}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
