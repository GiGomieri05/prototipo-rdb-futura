import './style.css';

import logo from '../../img/logordb.png';

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="div-img">
        <img className="logo-rdb" src={logo} alt="Logotipo vermelho da RDB Futura" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Áreas</a>
          </li>
          <li>
            <a>Mentorias</a>
          </li>
          <li>
            <a>Painel</a>
          </li>
        </ul>
      </div>
      <div className="user-profile">
        <div className="info">
          <p className="username">User Profile</p>
          <p className="email">email@email.com</p>
        </div>
        <div>
          <img className="user-pic" src="https://picsum.photos/200" alt="Foto de perfil do usuário" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
