import './style.css';
import logo from '../../img/logordb.png';

const navLinks = ['Home', 'Áreas', 'Mentorias', 'Painel'];

const Navbar = () => {
  return (
    <nav className="NavBar">
      {/* Logo */}
      <img className="logo-rdb" src={logo} alt="Logotipo vermelho da RDB Futura" />

      {/* Navegação */}
      <ul className="nav-items">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      {/* Perfil do usuário */}
      <div className="user-profile">
        <div className="info">
          <p className="username">User Profile</p>
          <p className="email">email@email.com</p>
        </div>
        <img className="user-pic" src="https://picsum.photos/200" alt="Foto de perfil do usuário" />
      </div>
    </nav>
  );
};

export default Navbar;
