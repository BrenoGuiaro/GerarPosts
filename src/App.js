import Header from "./components/Header/Header.js";
import SideBar from "./components/SlideBar/SideBar.js";
import '../src/App.css'
import { useState, useRef  } from "react";
import Preview from "./components/Preview/Preview.js";
import html2canvas from "html2canvas";



function App() {

  const [imagePreview, setImagePreview] = useState();
  const [codImob, setCodImob] = useState('');
  const [tipoAnuncio, setTipoAnuncio] = useState('Venda');
  const [tipoImovel, setTipoImovel] = useState('Casa');
  const [bairro, setBairro] = useState();

  const coverRef = useRef(null);


  const downloadImage = async () => {

    const element = coverRef.current;

    if (!element) return;


    /*
    ============================================================
    SALVA A ESCALA ATUAL
    ============================================================
    */

    const currentTransform = element.style.transform;


    /*
    ============================================================
    REMOVE A ESCALA DO PREVIEW
    ============================================================
    */

    element.style.transform = "scale(1)";


    /*
    ============================================================
    AGUARDA O NAVEGADOR ATUALIZAR
    ============================================================
    */

    await new Promise(resolve => {
      requestAnimationFrame(resolve);
    });


    /*
    ============================================================
    CAPTURA EXATAMENTE 1080 × 1080
    ============================================================
    */

    const canvas = await html2canvas(element, {

      width: 1080,

      height: 1080,

      scale: 1,

      useCORS: true,

      allowTaint: false,

      backgroundColor: "#ffffff",

      logging: false

    });


    /*
    ============================================================
    RESTAURA O PREVIEW
    ============================================================
    */

    element.style.transform = currentTransform;


    /*
    ============================================================
    GARANTE 1080 × 1080
    ============================================================
    */

    const finalCanvas = document.createElement("canvas");

    finalCanvas.width = 1080;

    finalCanvas.height = 1080;


    const ctx = finalCanvas.getContext("2d");


    ctx.drawImage(

      canvas,

      0,
      0,

      1080,
      1080

    );


    /*
    ============================================================
    DOWNLOAD
    ============================================================
    */

    finalCanvas.toBlob((blob) => {

      if (!blob) return;


      const url = URL.createObjectURL(blob);


      const link = document.createElement("a");

      link.href = url;

      link.download = `${codImob}-capa-1080x1080.png`;


      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);


      URL.revokeObjectURL(url);

    }, "image/png");

  };

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

          coverRef={coverRef}
          downloadImage={downloadImage}
        />
        <Preview
          imagePreview={imagePreview}
          codImob={codImob}

          tipoAnuncio={tipoAnuncio}
          tipoImovel={tipoImovel}
          bairro={bairro}

          coverRef={coverRef}
        />
      </div>
    </>


  );
}

export default App;
