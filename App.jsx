import "./App.css";
import TarjetaProducto from "./Tarjetaproducto.jsx";

function App() {
  return (
    <div className="contenedor">
      <h1>Tienda Online</h1>

      <TarjetaProducto
        nombre="Laptop Gamer"
        precio="3.500.000"
        descripcion="Laptop con 16GB RAM y 1TB SSD."
      />
    </div>
  );
}

export default App;