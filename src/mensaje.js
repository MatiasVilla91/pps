// Mensaje.js
import React from 'react';

const Mensaje = ({ usuario, contenido }) => (
  <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <strong>{usuario}:</strong> {contenido}
  </div>
);

export default Mensaje;
