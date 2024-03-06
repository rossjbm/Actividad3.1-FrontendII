var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')


router.post('/', async function(req, res, next) {

  const datos = req.body
  console.log(datos)

  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'hazbinhotelreservaciones@gmail.com',
      pass: 'sjch bged gzcg sicf'
    }
  }

  const mensaje = {
    from: 'hazbinhotelreservaciones@gmail.com',
    to: datos.correo,
    subject: 'Reservacion exitosa de la Habitacion',
    text: 'Muy buenas ' + datos.nombre + '!!!. Has reservado una habitacion en HazbinHotel, donde la fecha de inicio de la reservacion es el ' + datos.fechaInicio + ' y termina el ' + datos.fechaSalida
  }

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje)

  console.log(info)
  res.status(200).json({ info: info, status: 200})
});

module.exports = router;
