import "./Preview.css";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

import {
    FiEye,
    FiPhone,
    FiGlobe,
    FiRotateCcw,
    FiDownload
} from "react-icons/fi";

import { FaPhoneAlt as Phone} from "react-icons/fa";

import { FaMapMarkerAlt as IconMap } from "react-icons/fa";
import logoC from '../../images/logo2.png'

import teste from '../../images/teste.png'


export default function Preview({
    imagePreview,
    codImob,
    tipoAnuncio,
    tipoImovel,
    bairro,
    onClear

}) {

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

    const [previewScale, setPreviewScale] = useState(1);

    useEffect(() => {

        const updateScale = () => {

            const frame = document.querySelector(".preview-frame");

            if (!frame) return;

            const availableWidth = frame.clientWidth;

            const scale = availableWidth / 1080;

            setPreviewScale(scale);

        };


        updateScale();

        window.addEventListener("resize", updateScale);


        return () => {

            window.removeEventListener(
                "resize",
                updateScale
            );

        };

    }, []);


    return (

        <section className="preview-container">


            {/* ==================================================
                TÍTULO
            ================================================== */}

            <div className="preview-header">

                <div className="preview-title">

                    <FiEye />

                    <h2>
                        PRÉ-VISUALIZAÇÃO
                    </h2>

                </div>

            </div>


            {/* ==================================================
                ÁREA DO PREVIEW
            ================================================== */}

            <div className="preview-area">

                <div className="preview-frame">



                    <div
                        className="property-cover"
                        ref={coverRef}
                        style={{
                            transform: `scale(${previewScale})`
                        }}
                    >

                        <img
                            className="cover-property-image"
                            src={imagePreview}
                            alt="Imóvel"
                        />

                        <div className="cover-image-overlay"></div>


                        <div className="cover-logo-container">

                            <div className="logo-white-area">

                                <img
                                    src={logoC}
                                    alt="Manoel Jeronimo"
                                    className="cover-logo"
                                />

                            </div>



                        </div>

                        <div className="cover-code">

                            <div className="code-line"></div>

                            <div className="code-content">

                                <span>
                                    CÓD. DO IMÓVEL
                                </span>

                                <strong>
                                    {codImob}
                                </strong>

                            </div>

                        </div>


                        {/* ==================================================
                            INFORMAÇÕES DO IMÓVEL
                        ================================================== */}

                        <div className="cover-information">


                            {/* TIPO DE ANÚNCIO */}

                            <div className="cover-type">

                                {tipoAnuncio.toUpperCase()}

                            </div>


                            {/* TIPO DO IMÓVEL */}

                            <h1>

                                {tipoImovel.toUpperCase()}

                            </h1>


                            {/* LINHA */}

                            <div className="property-line"></div>


                            {/* BAIRRO */}

                            <div className="cover-location">

                                <IconMap color="red" size={30} />

                                <span>
                                    {bairro}
                                </span>

                            </div>

                        </div>


                        {/* ==================================================
                            CURVA / FORMA VERMELHA
                        ================================================== */}

                        <div className="image-subs">

                            
                        </div>


                        {/* ==================================================
                            RODAPÉ
                        ================================================== */}

                        <div className="cover-footer">


                            {/* TELEFONE */}

                            <div className="footer-phone">

                                <Phone />

                                <span>
                                    (19) 99303-0194
                                </span>

                            </div>


                            {/* SITE */}

                            <div className="footer-website">

                                <FiGlobe />

                                <span>
                                    https://<span className="span-bold">mjeronimoimoveis</span>.com.br
                                </span>~

                                <img src={teste}/>

                            </div>

                            <div className="footer-creci">
                                CRECISP: 278536F
                            </div>


                        </div>


                    </div>

                </div>

            </div>


            {/* ==================================================
                ÁREA INFERIOR
            ================================================== */}

            <div className="preview-bottom">


                {/* DICA */}

                <div className="preview-tip">

                    <span className="tip-icon">
                        💡
                    </span>

                    <div>

                        <strong>
                            Dica:
                        </strong>

                        <p>
                            Use imagens em alta qualidade
                            para um resultado ainda melhor!
                        </p>

                    </div>

                </div>


                {/* BOTÕES */}

                <div className="preview-actions">


                    <button
                        className="clear-button"
                        onClick={onClear}
                    >

                        <FiRotateCcw />

                        LIMPAR CAMPOS

                    </button>


                    <button
                        className="download-button"
                        onClick={downloadImage}
                    >

                        <FiDownload />

                        BAIXAR PNG

                    </button>


                </div>


            </div>


        </section>

    );

}