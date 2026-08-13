import "./Preview.css";
import { useState, useEffect } from "react";


import {
    FiEye,
    FiGlobe,
} from "react-icons/fi";

import { FaPhoneAlt as Phone} from "react-icons/fa";

import { FaMapMarkerAlt as IconMap } from "react-icons/fa";
import logoC from '../../images/logo.png'

import detalhe from '../../images/detalhe.png'
import logoE from '../../images/logoE.png'
import mancha from '../../images/mancha.png'


export default function Preview({
    imagePreview,
    codImob,
    tipoAnuncio,
    tipoImovel,
    bairro,
    onClear,
    coverRef,
    setStMancha,
    stMancha

}) {


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

                        <img src={mancha} alt="mancha" className={stMancha ? "mancha-none" : "mancha"}/>

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
                                </span>

                                <img src={detalhe} alt="detalhe" />
                                <img src={logoE} alt="logoE" id="logoE"/>

                                

                            </div>

                            <div className="footer-creci">
                                CRECISP: 278536F
                            </div>



                        </div>


                    </div>

                </div>

            </div>



 
        </section>

    );

}