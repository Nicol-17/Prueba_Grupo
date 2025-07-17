export default function payOut() {
  return(
    <>
    
  <section>
    <h2>Proceso de Pago</h2>
    <form>
      <div>
        <label htmlFor="nombre">Nombre en la tarjeta</label>
        <input type="text" id="nombre" name="nombre" required />
      </div>
      <div>
        <label htmlFor="tarjeta">Número de tarjeta</label>
        <input
          type="text"
          id="tarjeta"
          name="tarjeta"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          placeholder="xxxx xxxx xxxx xxxx"
          required
        />
      </div>
      <div>
        <div>
          <label htmlFor="expiracion">Fecha de expiración (MM/AA)</label>
          <input
            type="text"
            id="expiracion"
            name="expiracion"
            placeholder="MM/AA"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" inputMode="numeric" required />
        </div>
      </div>
      <fieldset>
        <legend>Información de facturación</legend>
        <div>
          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div>
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="ciudad" name="ciudad" required />
        </div>
        <div>
          <label htmlFor="codigo-postal">Código Postal</label>
          <input
            type="text"
            id="codigo-postal"
            name="codigo-postal"
            inputMode="numeric"
            required
          />
        </div>
      </fieldset>
      <button type="submit">Pagar Ahora</button>
    </form>
  </section>;
    </>


  )
}
