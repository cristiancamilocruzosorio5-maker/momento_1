import IngredienteReceta from "./components/IngredienteReceta";
import ListaCatalogo from "./components/ListaCatalogo";
import "./App.css";

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Módulo de Recetario y Catálogo Nutresa</h1>
      </header>
      
      <section className="seccion-editor">
        <IngredienteReceta />
      </section>

      <section className="seccion-catalogo" style={{ marginTop: '2rem' }}>
        <ListaCatalogo />
      </section>
    </main>
  );
}

export default App;