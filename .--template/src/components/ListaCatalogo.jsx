import productos from '../data/productos.js';

export const ListaCatalogo = () => {
  return (
    <div className="catalogo-container">
      <h2 className="catalogo-titulo">Catálogo de Productos Nutresa</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h3>{producto.titulo}</h3>
            <span className="producto-precio">Precio: ${producto.precio}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaCatalogo;