// src/components/WhatsAppCTA/WhatsAppCTA.jsx
import React from 'react';
import './WhatsAppCTA.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppCTA() {
    const whatsappNumber = '5548991871643'; // Add '55' for Brazil country code

    return (
        <section id="WhatsAppCTA" className="whatsapp-cta-section whatsapp-cta-section--split">
            <div className="container whatsapp-cta-container whatsapp-cta-container--split">
                <div className="whatsapp-cta-image-container">
                    <img
                        src="https://i.imgur.com/Qw50xhh.jpeg" // Reduced image size to 600x600
                        alt="Imagem Chamada para Ação"
                        className="whatsapp-cta-image"
                    />
                </div>
                <div className="whatsapp-cta-content whatsapp-cta-content--centered">
                    <span className="whatsapp-cta-label">Experiência de 10 anos em que você pode confiar</span>
                    <h2 className="whatsapp-cta-title whatsapp-cta-title--centered">Limpeza de Estofados Premium: Resultados Garantidos!</h2>
                    <ul className="whatsapp-cta-benefits whatsapp-cta-benefits--centered">
                        <li className="whatsapp-cta-benefit-item">✨ Elimine manchas e odores indesejados.</li>
                        <li className="whatsapp-cta-benefit-item">🛋️ Renove seus móveis e o conforto do seu lar.</li>
                        <li className="whatsapp-cta-benefit-item">✅ Serviço profissional e especializado.</li>
                    </ul>
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-cta-link whatsapp-cta-link--centered whatsapp-cta-link--animated"
                    >
                        <div className="whatsapp-cta-icon whatsapp-cta-icon--animated">
                            <FaWhatsapp />
                        </div>
                        <div className="whatsapp-cta-text">
                            <p className="whatsapp-cta-message whatsapp-cta-message--animated">Fale Conosco Agora!</p>
                            <p className="whatsapp-cta-number">Agende sua limpeza com desconto exclusivo</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WhatsAppCTA;