import "./Navbar.css";


type NavbarProps = {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
};

export const Navbar = ({ onSearch, onCategoryChange }: NavbarProps) => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <a href="/shop" className="navbar__brand">🧠 IA Store</a>
      </div>

      <div className="navbar__center">
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          defaultValue=""
          className="navbar__select"
        >
          <option value="" disabled>Todas las categorías</option>
          <option value="coding">Programming</option>
          <option value="building">Construction</option>
          <option value="education">Education</option>
          <option value="design">Design</option>
          <option value="analysis">Analysis</option>
        </select>

        <input
          type="search"
          placeholder="Buscar herramientas de IA..."
          onChange={(e) => onSearch(e.target.value)}
          className="navbar__input"
        />
      </div>
    </div>
  );
};
