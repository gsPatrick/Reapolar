// src/components/Services/Services.jsx
import React, { useState } from 'react';
import './Services.css';
import { BsArrowRight } from 'react-icons/bs'; // Import right arrow icon

function Services() {
    // Mock data for services cards - 6 cards now
    const servicesData = [
        {
            title: "Investigação de Vazamento",
            description: "Investigação de vazamentos ocultos, com equipamentos de última geração para mapeamento de tubulações de água pressurizada, sistemas de esgoto para detecção de vazamento com precisão e com o mínimo de danos",
            imageUrl: "https://reparolar.com.br/wp-content/uploads/2022/11/investigacao-de-vazamento.webp"
        },
        {
            title: "Investigação de Infiltração",
            description: "Conserto de torneiras, tubulações residenciais, tubulações prediais, vazamentos, registros, troca de reparos, válvulas de descarga, caixas acopladas e limpeza de caixa d'água",
            imageUrl: "https://reparolar.com.br/wp-content/uploads/2022/11/infiltracao-1-2048x1536.webp"
        },
        {
            title: "Tubulação de Água Quente",
            description: "Substituímos sua tubulação antiga por tubos de PPR com garantia vitalícia!! Para garantir o seu conforto e valorização do seu imóvel!",
            imageUrl: "https://reparolar.com.br/wp-content/uploads/2022/11/tubulacao-de-agua-quente-instalacao.webp"
        },
        {
            title: "Inteligência para controle de consumo de água",
            description: "O mais novo e moderno sistema inteligente de monitoramento da rede que permite a medição contínua do consumo para detecção de vazamentos, monitoramento da rede e modernização do faturamento.",
            imageUrl: "https://reparolar.com.br/wp-content/uploads/2022/11/medidor-de-agua.webp"
        },
        {
            title: "Manutenção residencial e predial",
            description: "Conheça nossos planos de manutenção de propriedade e escolha o que mais se adapta a sua necessidade. Nossa equipe estará sempre pronta a lhe atender e oferecer a solução ideal garantindo conforto e eficiência desde o atendimento até a conclusão.",
            imageUrl: "https://reparolar.com.br/wp-content/uploads/2022/11/manutencao-hidraulica-predial.webp"
        },
        {
            title: "Planos de Manutenção Residencial e Predial Sob Medida",
            description: "Previna-se contra problemas futuros! Oferecemos planos de manutenção personalizados para sua residência ou edifício, garantindo atendimento rápido.",
            imageUrl: "https://reparolar.com.br/wp-content/uploads/elementor/thumbs/encamento-pwka9sgyoyojvbyt7bvht9g45h3siinsjas3y0ujy4.webp"
        }
    ];

    const [startIndex, setStartIndex] = useState(0); // State to track start index of visible cards
    const cardsToShow = 3; // Number of cards to show in slideshow
    const numPages = Math.ceil(servicesData.length / cardsToShow); // Calculate number of pages
    const [currentPage, setCurrentPage] = useState(0); // Track current page index for dots

    const visibleServices = servicesData.slice(startIndex, startIndex + cardsToShow); // Slice array to show only visible cards


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
                            <button className="services-card__button services-card__button--cta">Contratar Agora <BsArrowRight /></button>
                        </div>
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