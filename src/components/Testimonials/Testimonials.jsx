// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    // Mock data for testimonials cards - based on "Clientes Felizes, Resultados Reais"
    const testimonialsData = [
        {
            name: "Ana Clara",
            role: "Cliente Residencial", // or similar role relevant to your audience
            quote: "Meu sofá ficou irreconhecível! Serviço incrível, rápido e eficiente.",
            rating: 5, // Star rating out of 5
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image - adjust size and colors if needed
        },
        {
            name: "Lucas Andrade",
            role: "Cliente Residencial", // or similar role
            quote: "Vale cada centavo. Melhor decisão que tomei para minha casa!",
            rating: 5, // Star rating out of 5
            image: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image - adjust size and colors if needed
        },
        {
            name: "Mariana Silva",
            role: "Cliente Residencial", // or similar role
            quote: "Excelente! Meus estofados parecem novos, e o atendimento foi ótimo.",
            rating: 4, // Example of a 4-star rating
            image: "https://images.unsplash.com/photo-1614436201459-156d322d38c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image - adjust size and colors if needed
        }
        // You can add more testimonials here following the same structure
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<FaStar key={i} className={`testimonial-card__star ${i < rating ? 'testimonial-card__star--filled' : ''}`} />);
        }
        return stars;
    };

    return (
        <section className="testimonials-section">
            <div className="container testimonials-container">
                <h2 className="testimonials-title">O Que Nossos Clientes Dizem</h2> {/* Optional title for the section */}
                <div className="testimonials-grid">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-card__header">
                                <img src={testimonial.image} alt={testimonial.name} className="testimonial-card__avatar" />
                                <div className="testimonial-card__info">
                                    <h3 className="testimonial-card__name">{testimonial.name}</h3>
                                    <p className="testimonial-card__role">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="testimonial-card__quote">
                                <p>"{testimonial.quote}"</p>
                            </div>
                            <div className="testimonial-card__rating">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;