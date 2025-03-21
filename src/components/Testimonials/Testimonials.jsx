// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
    // Mock data for testimonials cards - based on "Clientes Felizes, Resultados Reais"
    const testimonialsData = [
        {
            name: "Ismael Cabrera Martin",
            role: "Cliente Residencial", // or similar role relevant to your audience
            quote: "Eu tinha contratado outra pessoa, me fez gastar com um novo pressurizador de água porque esse era para ele o problema, mas não resolvou o problema com o novo pressurizador (ainda acionava sozinho por algum vazamento). Então liguei para Reparo Lar e o técnico achou o problema de vazamento, era algo simples, mas só ele para achar o problema. Agora podemos dormir tranquilo sem escutar o pressurizador. Obrigado!",
            rating: 5, // Star rating out of 5
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWjiWH_vlvaYL5c7cGRxzW-RS-QqjUGdVFuYH5Wxk5zDuyxwGRu=w75-h75-p-rp-mo-br100" // Placeholder image - adjust size and colors if needed
        },
        {
            name: "Ivo Guilhon - WILD HOGS PROJÉTEIS ESPECIAIS",
            role: "Cliente Residencial", // or similar role
            quote: "Fui muito bem atendido, recomendo a empresa, achou os malditos vazamentos que tanto me atormentavam , tem equipamentos adequados para localizar e o que tive que quebrar foi minimo, recomendo",
            rating: 5, // Star rating out of 5
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWqfaLc4FyaC6Ex5hs5cJajhFPJrNbPyiBSMMumeDjQxINnYhg=w75-h75-p-rp-mo-br100" // Placeholder image - adjust size and colors if needed
        },
        {
            name: "Mauricio De Conti Carvalho",
            role: "Cliente Residencial", // or similar role
            quote: "Excelente atendimento, a empresa possui ótimas ferramentas e tecnologia para localizar infiltrações e vazamentos sem quebra-qubta. Sou sindico profissional e indico para todos.",
            rating: 5, // Example of a 4-star rating
            image: "https://lh3.googleusercontent.com/a-/ALV-UjUJUwTw67c0UoilFIY90Yizs6M5uODBa_FOe2eckiymW_CHacgrdw=w75-h75-p-rp-mo-ba2-br100" // Placeholder image - adjust size and colors if needed
        },
        {
            name: "Tatiana Mendes",
            role: "Cliente Residencial", // or similar role
            quote: "Melhor profissional. O atendimento e a vistoria foram perfeitas, além de um relatório explicativo e com o apontamento do que deve ser corrigido.",
            rating: 5, // Example of a 4-star rating
            image: "https://lh3.googleusercontent.com/a/ACg8ocJR8XJDWKP4WDYDbTx8nAL4h6EyPy74rpK2oLhalxsN5sH0Fw=w75-h75-p-rp-mo-br100" // Placeholder image - adjust size and colors if needed
        },
        
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