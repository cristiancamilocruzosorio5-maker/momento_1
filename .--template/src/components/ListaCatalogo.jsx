import { useState, useEffect } from 'react';

export const ListaCatalogo = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://6ada657e7512f497b3ffe995.mockapi.io/api/v1/momento1')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => console.error("Error cargando datos:", error));
  }, []);

  if (cargando) return <p>Cargando datos desde MockAPI...</p>;

  return (
    <>
      <h1 className="catalogo-titulo">Lista de Productos</h1>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h2>{producto.titulo || producto.name}</h2>
            <span className="producto-precio">Precio: ${producto.precio}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaCatalogo;