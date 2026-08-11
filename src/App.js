import Header from "./components/Header/Header.js";
import SideBar from "./components/SlideBar/SideBar.js";
import '../src/App.css'
import { useState } from "react";
import Preview from "./components/Preview/Preview.js";


function App() {

  const [imagePreview, setImagePreview] = useState();
  const [codImob, setCodImob] = useState('');
  const [tipoAnuncio, setTipoAnuncio] = useState('Venda');
  const [tipoImovel, setTipoImovel] = useState('Casa');
  const [bairro, setBairro] = useState();

  return (
    <>
      <Header />
      <div className="organization">
        <SideBar
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}

          codImob={codImob}
          setCodImob={setCodImob}

          tipoAnuncio={tipoAnuncio}
          setTipoAnuncio={setTipoAnuncio}

          tipoImovel={tipoImovel}
          setTipoImovel={setTipoImovel}

          bairro={bairro}
          setBairro={setBairro}
        />
        <Preview
          imagePreview={imagePreview}
          codImob={codImob}

          tipoAnuncio={tipoAnuncio}
          tipoImovel={tipoImovel}
          bairro={bairro}
        />
      </div>
    </>


  );
}

export default App;
