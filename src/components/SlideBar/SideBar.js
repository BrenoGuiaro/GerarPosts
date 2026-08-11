import "./SideBar.css";
import { FiHome, FiUpload } from "react-icons/fi";


export default function SidebarForm({
  imagePreview, setImagePreview,
  codImob, setCodImob,
  tipoAnuncio, setTipoAnuncio,
  tipoImovel, setTipoImovel,
  bairro, setBairro }) {

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <aside className="sidebar">

      {/* Título */}
      <div className="sidebar-title">
        <FiHome />
        <h3>DADOS DO IMÓVEL</h3>
      </div>

      {/* Upload */}
      <div className="form-group">
        <label>Imagem do imóvel</label>

        <div className="upload-container">

          <div className={imagePreview ? "image-preview" : "image-preview-none"}>
            <img src={imagePreview} alt="Imóvel" />
          </div>

          <label className="upload-box">

            <FiUpload />

            <strong>Trocar imagem</strong>

            <span>PNG, JPG ou WEBP</span>

            <small>Máx. 10MB</small>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>

        </div>

      </div>

      {/* Código */}
      <div className="form-group">

        <label>Código do imóvel</label>

        <input
          type="text"
          placeholder="IMOB306499728"
          value={codImob}
          onChange={(e) => setCodImob(e.target.value)}
        />

      </div>

      {/* Selects */}
      <div className="double-input">

        <div className="form-group">

          <label>Tipo de anúncio</label>

          <select value={tipoAnuncio} onChange={(e) => { setTipoAnuncio(e.target.value) }}>
            <option>Locação</option>
            <option>Venda</option>
          </select>

        </div>

        <div className="form-group">

          <label>Tipo do imóvel</label>

          <select value={tipoImovel} onChange={(e) => { setTipoImovel(e.target.value) }}>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
            <option>Comercial</option>
          </select>

        </div>

      </div>

      {/* Bairro */}
      <div className="form-group">

        <label>Bairro</label>

        <input
          type="text"
          placeholder="Jardim da Paineira"
          value={bairro}
          onChange={(e) => { setBairro(e.target.value) }}
        />

      </div>

      {/* Cidade */}
      <div className="form-group">

        <label>Cidade (Opcional)</label>

        <input
          type="text"
          placeholder="Mococa - SP"
        />

      </div>

      {/* Botão */}
      <button className="generate-button">

        GERAR CAPA

      </button>

    </aside>
  );
}