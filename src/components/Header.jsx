import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header({ setSearchQuery }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value);  
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">All</Link>
          </li>
          <li>
            <Link to="/favourites" className="nav-link">Favourites</Link>
          </li>
        </ul>
        <input 
          type="text" 
          placeholder="Search Breeds..." 
          value={searchInput} 
          onChange={handleSearchChange} 
          className="search-input"
        />
      </nav>
    </header>
  );
}

export default Header;