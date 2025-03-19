// src/components/Features/Features.jsx
import React from 'react';
import './Features.css';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa'; // Import icons

function Features() {
    const featuresData = [
        {
            icon: <FaTrophy />,
            title: "Qualidade Superior",
            description: "Limpeza com os melhores produtos e técnicas do mercado."
        },
        {
            icon: <FaShieldAlt />,
            title: "Garantia de Satisfação",
            description: "Resultados impecáveis ou refazemos o serviço."
        },
        {
            icon: <FaShippingFast />,
            title: "Agilidade e Pontualidade",
            description: "Serviço rápido, eficiente e no horário agendado."
        },
        {
            icon: <FaHeadset />,
            title: "Suporte Dedicado",
            description: "Atendimento personalizado para suas dúvidas e necessidades."
        }
    ];

    return (
        <section className="features-section">
            <div className="container features-container">
                {featuresData.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="feature-item__icon">
                            {feature.icon}
                        </div>
                        <h3 className="feature-item__title">{feature.title}</h3>
                        <p className="feature-item__description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;