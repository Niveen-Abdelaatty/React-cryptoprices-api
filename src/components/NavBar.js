import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/'>
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to='/curriences'>
        <div>CURRENCIES</div>
      </Link>
    </nav>
  );
}

export default NavBar;
