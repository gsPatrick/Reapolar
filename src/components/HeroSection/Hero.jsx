// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import Logo from '../../assets/Logo.webp';

function Hero() {
    const rotatingTitles = [
        <>
            Estofados Impecáveis <br /> Já!
        </>,
        "Limpeza Profissional Garantida.",
        "Sua Casa Mais Limpa e Saudável."
    ];
    const backgroundImages = [
        "https://reparolar.com.br/wp-content/uploads/2022/11/caca-vazamento.webp",
        "https://reparolar.com.br/wp-content/uploads/2022/11/caca-vazamento-oculto.webp",
        "https://reparolar.com.br/wp-content/uploads/2022/11/infiltracao.webp",
        "https://reparolar.com.br/wp-content/uploads/2022/11/tubulacao-de-quente_1.webp"
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [animateOut, setAnimateOut] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for image index

    useEffect(() => {
        const titleIntervalId = setInterval(() => {
            setAnimateOut(true);
            setTimeout(() => {
                setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % rotatingTitles.length);
                setAnimateOut(false);
            }, 500);
        }, 3000);

        const imageIntervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); // Image change interval - adjust as needed

        return () => {
            clearInterval(titleIntervalId);
            clearInterval(imageIntervalId);
        };
    }, [rotatingTitles.length, backgroundImages.length]);

    const titleClassName = `hero__title hero__title--simple ${animateOut ? 'hero__title--animate-out' : 'hero__title--animate-in'}`;
    const heroStyle = {
        height: '600px', /* Fixed height in inline style as well for JS awareness */
        backgroundImage: `radial-gradient(at top right, #409EFF00 0%, #000000E8 75%), url(${backgroundImages[currentImageIndex]})`, /* Darkened gradient: #000000E8 and 75% */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        opacity: '0.9', /* Slightly increased opacity for darker overlay if needed */
        transition: 'background-image 0.5s ease-in-out, opacity 0.3s'
    };


    return (
        <section className="hero" style={heroStyle}>
            <div className="container hero__container">
                <div className="hero__content hero__content--simple">
                    <h1 className={titleClassName}>
                        {rotatingTitles[currentTitleIndex]}
                    </h1>
                    <p className="hero__subtitle hero__subtitle--simple">Não deixe seus estofados perderem a elegância. Resolva hoje mesmo!</p>
                    <button className="hero__button hero__button--simple">Veja o Desconto!</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;