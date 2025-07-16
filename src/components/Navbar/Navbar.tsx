export const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="/auth">IA Store</a>
      </div>
      <div>
        <form>
          <select name="categoria">
            <option value="" disabled selected>
              Todas las categorías
            </option>
            <option value="coding">Programación</option>
            <option value="design">Diseño</option>
            <option value="analysis">Análisis de Datos</option>
            <option value="building">Construcción</option>
            <option value="education">Educación</option>
          </select>
        </form>
      </div>
      <div>
        <form>
          <input type="search" placeholder="Buscar herramientas de IA..." />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
};
