type NavbarProps = {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
};

export const Navbar = ({ onSearch, onCategoryChange }: NavbarProps) => {
  return (
    <nav>
      <div>
        <a href="/shop">IA Store</a>
      </div>
      <div>
        <select onChange={(e) => onCategoryChange(e.target.value)} defaultValue="">
          <option value="" disabled selected>Todas las categorías</option>
          <option value="coding">Programming</option>
          <option value="building">Construction</option>
          <option value="education">Education</option>
          <option value="design">Construction</option>
          <option value="analysis">Analysis</option>
        </select>
      </div>


      <div>

        <input 
        type="search" 
        placeholder="Buscar herramientas de IA..." 
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: '30%' }}
        
        />
       

      </div>
    </nav>
  );
};
