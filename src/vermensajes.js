// VerMensajes.js
import React, { useState } from 'react';
import Mensajes from './mensajes';

const VerMensajes = () => {
  const [todosLosMensajes, setTodosLosMensajes] = useState([]);

  const manejarMensajeEnviado = (nuevoMensaje) => {
    // Actualiza el estado con todos los mensajes
    setTodosLosMensajes([...todosLosMensajes, nuevoMensaje]);
  };

  return (
    <div>
      <h1>Ver Mensajes</h1>
      <Mensajes onMensajeEnviado={manejarMensajeEnviado} />
    </div>
  );
};

export default VerMensajes;
