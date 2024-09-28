// src/Curso.jsx
import React, { useState } from 'react';

const Curso= () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const curso = { nombre, creditos, descripcion };

    // Enviar datos al endpoint
    const response = await fetch('https://test-deploy-12.onrender.com/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(curso),
    });

    if (response.ok) {
      alert('Curso guardado correctamente');
      clearForm();
    } else {
      alert('Error al guardar el curso');
    }
  };

  const clearForm = () => {
    setNombre('');
    setCreditos('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de curso:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Créditos:</label>
        <input
          type="number"
          value={creditos}
          onChange={(e) => setCreditos(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={clearForm}>Limpiar</button>
    </form>
  );
};

export default Curso;
