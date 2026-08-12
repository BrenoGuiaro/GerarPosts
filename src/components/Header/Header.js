import "./Header.css";
import { FiImage } from "react-icons/fi";
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <header className="header">

      <div className="header-logo">
        <img
          src={logo}
          alt="Logo"
        
        />

      </div>

      {/* Título */}
      <div className="header-title">
        <div className="header-title-icon">
          <FiImage size={20} />
        </div>

        <div>
          <h3>Gerador de Capas</h3>

          
        </div>
      </div>

      {/* Botão */}
      <button className="header-button">
        
       
      </button>

    </header>
  );
}