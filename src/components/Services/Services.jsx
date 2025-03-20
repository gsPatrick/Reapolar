// src/components/Services/Services.jsx
import React, { useState } from 'react';
import './Services.css';
import { BsArrowRight } from 'react-icons/bs'; // Import right arrow icon

function Services() {
    // Mock data for services cards - 6 cards now
    const servicesData = [
        {
            title: "Limpeza de Sofás",
            description: "Higienização profissional de sofás para remover sujeira, manchas e odores, prolongando a vida útil do seu móvel e garantindo um ambiente mais saudável.",
            imageUrl: "https://www.zellusservices.com.br/wp-content/uploads/2022/02/Passo-a-passo-de-uma-limpeza-de-sofa-profissional.png"
        },
        {
            title: "Limpeza de Cadeiras",
            description: "Serviço especializado em limpeza de cadeiras de diversos materiais, removendo impurezas e restaurando a aparência original.",
            imageUrl: "https://limpezadesofabh.com.br/wp-content/uploads/2022/09/limpeza-de-sofa-BH-1024x683.webp" // Replace with a real image URL for chair cleaning
        },
        {
            title: "Limpeza de Colchões",
            description: "Eliminação de ácaros, bactérias e outros alérgenos do seu colchão, promovendo uma noite de sono mais tranquila e prevenindo problemas respiratórios.",
            imageUrl: "https://www.drlimpatudorj.com.br/wp-content/uploads/2021/07/2021-07-26-lavagem-e-higienizacao-do-colchao.jpg" // Replace with a real image URL for mattress cleaning
        },
        {
            title: "Limpeza de Poltronas",
            description: "Limpeza profunda de poltronas, ideal para remover sujeira incrustada e revitalizar o tecido, deixando sua poltrona como nova.",
            imageUrl: "https://railimp.com.br/wp-content/uploads/2021/11/Lavagem-de-Poltrona.jpg" // Replace with a real image URL for armchair cleaning
        },
        {
            title: "Limpeza de Tapetes",
            description: "Lavagem e higienização de tapetes de diferentes tipos e tamanhos, removendo manchas, odores e restaurando as cores vibrantes.",
            imageUrl: "https://www.tgservices.com.br/wp-content/uploads/2021/11/10-11-2021-1.jpg" // Replace with a real image URL for carpet cleaning
        },
        {
            title: "Lavagem a Seco", // Changed to "Lavagem a Seco"
            description: "Técnica de limpeza que utiliza produtos específicos para remover a sujeira sem a necessidade de água, ideal para tecidos delicados e que não podem ser molhados.", // Updated description for dry cleaning
            imageUrl: "https://i.imgur.com/rcgz0aR.jpeg" // Replace with a real image URL for upholstery waterproofing
        }
    ];

    const [startIndex, setStartIndex] = useState(0); // State to track start index of visible cards
    const cardsToShow = 3; // Number of cards to show in slideshow
    const numPages = Math.ceil(servicesData.length / cardsToShow); // Calculate number of pages
    const [currentPage, setCurrentPage] = useState(0); // Track current page index for dots

    const visibleServices = servicesData.slice(startIndex, startIndex + cardsToShow); // Slice array to show only visible cards

    const handleClick = () => {
        window.location.href = 'https://wa.me/5548991871643';
      };


    return (
        <section id="servicos" className="services-section"> {/* ADICIONEI O ID AQUI */}
                    <div className="container services-container">
                <h2 className="services-title">Nosso Serviço</h2>
                <div className="services-carousel services-carousel--slideshow">
                    {visibleServices.map((service, index) => (
                        <div key={index} className="services-card services-card--cta">
                            <img src={service.imageUrl} alt={service.title} className="services-card__image services-card__image--cta" />
                            <div className="services-card__content">
                                <h3 className="services-card__title services-card__title--cta">{service.title}</h3>
                                <p className="services-card__description services-card__description--cta">{service.description}</p>
                            </div>
                            <button 
  className="services-card__button services-card__button--cta" 
  onClick={handleClick}
>
  Contratar Agora <BsArrowRight />
</button>                        </div>
                    ))}
                </div>
                <div className="services-pagination"> {/* Navigation dots container */}
                    {Array.from({ length: numPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`services-pagination__dot ${index === currentPage ? 'services-pagination__dot--active' : ''}`}
                            onClick={() => {
                                setStartIndex(index * cardsToShow);
                                setCurrentPage(index);
                            }}
                            aria-label={`Ir para página de serviços ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;