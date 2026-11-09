import React, { useState } from 'react';

export const IngredienteReceta = () => {
  const [nombreReceta, setNombreReceta] = useState('');
  const [ingrediente, setIngrediente] = useState('');
  const [estado, setEstado] = useState('Borrador');
  const [alerta, setAlerta] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de reglas de negocio
    const estadosValidos = ['Borrador', 'Publicada'];
    if (!estadosValidos.includes(estado)) {
      setAlerta({ tipo: 'error', texto: 'Error: El estado de publicación no es válido.' });
      return;
    }

    if (!nombreReceta.trim() || !ingrediente.trim()) {
      setAlerta({ tipo: 'error', texto: 'Por favor, completa todos los campos requeridos.' });
      return;
    }

    const nuevoRegistro = {
      id: Date.now(),
      nombreReceta,
      ingrediente,
      estado,
      fecha: new Date().toISOString()
    };

    try {
      const registrosPrevios = JSON.parse(localStorage.getItem('recetario_estados')) || [];
      localStorage.setItem('recetario_estados', JSON.stringify([...registrosPrevios, nuevoRegistro]));

      // Alerta accesible con role="alert"
      setAlerta({ 
        tipo: 'exito', 
        texto: `¡Receta guardada exitosamente como "${estado}"!` 
      });

      setNombreReceta('');
      setIngrediente('');
      setEstado('Borrador');

    } catch (error) {
      setAlerta({ tipo: 'error', texto: 'Ocurrió un error al guardar en el almacenamiento.' });
    }
  };

  return (
    <div className="editor-card">
      <h2>Editor de Recetas - Gestión de Estado</h2>

      {alerta && (
        <div role="alert" className={`alerta-toast ${alerta.tipo === 'exito' ? 'alerta-exito' : 'alerta-error'}`}>
          {alerta.texto}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-receta">
        <div className="form-group">
          <label htmlFor="nombreReceta">Nombre de la Receta</label>
          <input 
            type="text" 
            id="nombreReceta"
            value={nombreReceta} 
            onChange={(e) => setNombreReceta(e.target.value)} 
            placeholder="Ej. Frijoles Antioqueños"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ingrediente">Ingrediente Principal</label>
          <input 
            type="text" 
            id="ingrediente"
            value={ingrediente} 
            onChange={(e) => setIngrediente(e.target.value)} 
            placeholder="Ej. Frijol cargamanto, plátano..."
          />
        </div>

        <div className="form-group">
          <label>Estado de Publicación</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="estadoPublicacion" 
                value="Borrador" 
                checked={estado === 'Borrador'} 
                onChange={(e) => setEstado(e.target.value)}
              />
              Borrador
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="estadoPublicacion" 
                value="Publicada" 
                checked={estado === 'Publicada'} 
                onChange={(e) => setEstado(e.target.value)}
              />
              Publicada
            </label>
          </div>
        </div>

        <button type="submit" className="btn-submit">Guardar Registro</button>
      </form>
    </div>
  );
};

export default IngredienteReceta;