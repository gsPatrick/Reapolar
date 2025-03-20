// src/components/NewsletterCTA/NewsletterCTA.jsx
import React from 'react';
import './NewsletterCTA.css';

function NewsletterCTA() {
    return (
        <section  id="NewsLetterCTA" className="newsletter-cta-section newsletter-cta-section--blue"> {/* Added whatsapp-cta-section--blue class */}
            <div className="container newsletter-cta-container newsletter-cta-container--blue"> {/* Added whatsapp-cta-container--blue class */}
                <h2 className="newsletter-cta-title newsletter-cta-title--blue">Urgente: Promoção Exclusiva!</h2> {/* Updated title and added whatsapp-cta-title--blue */}
                <p className="newsletter-cta-subtitle newsletter-cta-subtitle--blue"> Desconto de 20% para Quem enviar Hoje! Essa oferta não espera. Entre em contato agora e desfrute de estofados impecáveis!</p> {/* Updated subtitle and added whatsapp-cta-subtitle--blue */}
                <button 
  className="newsletter-cta-button newsletter-cta-button--blue" 
  onClick={() => window.location.href = 'https://wa.me/5548991871643'}
>
  EU QUERO!
</button>            </div>
        </section>
    );
}

export default NewsletterCTA;