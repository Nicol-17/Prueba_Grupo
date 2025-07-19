'use client';

import { useState } from "react";

export default function PayOut() {
  const [formData, setFormData] = useState({
    nombre: '',
    tarjeta: '',
    expiracion: '',
    cvv: '',
    direccion: '',
    ciudad: '',
    codigoPostal: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos de pago:', formData);
    alert('¡Pago procesado con éxito!');
  };

  return (
    <section>
      <h2>Proceso de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre en la tarjeta</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
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
            value={formData.tarjeta}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expiracion">Fecha de expiración (MM/AA)</label>
          <input
            type="text"
            id="expiracion"
            name="expiracion"
            placeholder="MM/AA"
            value={formData.expiracion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            inputMode="numeric"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <fieldset>
          <legend>Información de facturación</legend>
          <div>
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="codigoPostal">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              inputMode="numeric"
              value={formData.codigoPostal}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>
        
        <button type="submit">Pagar Ahora</button>
      </form>
    </section>
  );
}
