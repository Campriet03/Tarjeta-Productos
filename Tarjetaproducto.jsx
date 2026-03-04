function Tarjetaproducto() {
  return (
    <div className="tarjeta">
      <img src="img/Laptop_gamer.jpg" alt="Laptop Gamer" className="imagen" />

      <div className="contenido">
        <h2>Laptop Gamer</h2>
        <p className="precio">$3.500.000</p>
        <p className="descripcion">Laptop con 16GB RAM y 1TB SSD.</p>

        <button className="boton">Comprar</button>
      </div>
    </div>
  )
}

export default Tarjetaproducto