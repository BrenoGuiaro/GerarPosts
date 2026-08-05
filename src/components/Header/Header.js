import "./Header.css";
import { FiInfo, FiImage } from "react-icons/fi";
import logo from '../../images/logo.png'

export default function Header() {
  return (
    <header className="header">

      <div className="header-logo">
        <img
          src={logo}
          alt="Logo"
        />

        <div className="header-logo-text">
          <h2>Manoel Jeronimo</h2>
          <span>Corretor de imóveis</span>
        </div>
      </div>

      {/* Título */}
      <div className="header-title">
        <div className="header-title-icon">
          <FiImage />
        </div>

        <div>
          <h1>Gerador de Capas</h1>

          <p>
            Gere capas profissionais para suas postagens em redes sociais.
          </p>
        </div>
      </div>

      {/* Botão */}
      <button className="header-button">
        <FiInfo />
        Sobre o projeto
      </button>

    </header>
  );
}