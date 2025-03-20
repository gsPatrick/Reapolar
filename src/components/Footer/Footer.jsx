// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.webp'; // Import your logo
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Social icons
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'; // Contact icons

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__column footer__column--about">
                    <a href="/" className="footer__logo-link">
                        <img src={Logo} alt="Reparolar Logo" className="footer__logo-image" /> {/* Updated alt text to "Reparolar Logo" */}
                    </a>
                    <p className="footer__description">
                        Especialistas em limpeza de estofados, transformando ambientes com tecnologia e inovação. {/* Keeping description as before, adjust if needed */}
                    </p>
                    <div className="footer__social-icons">
                        <a href="https://www.facebook.com/Reparolar" className="footer__social-icon-link"><FaFacebook /></a> {/* Updated Facebook link */}
                        <a href="https://www.instagram.com/reparo_lar/" className="footer__social-icon-link"><FaInstagram /></a> {/* Updated Instagram link */}
                        <a href="https://api.whatsapp.com/resolve/?deeplink=%2F" className="footer__social-icon-link"><FaWhatsapp /></a> {/* Updated Instagram link */}

                    </div>
                </div>

                <div className="footer__column footer__column--product">
                    <h4 className="footer__column-title">Serviços</h4>
                    <ul className="footer__list">
                        <li><a href="#servicos" className="footer__link">Limpeza de Sofás</a></li>
                        <li><a href="#servicos" className="footer__link">Limpeza de Cadeiras</a></li>
                        <li><a href="#servicos" className="footer__link">Limpeza de Colchões</a></li>
                        <li><a href="#servicos" className="footer__link">Limpeza de Poltronas</a></li>
                        <li><a href="#servicos" className="footer__link">Limpeza de Tapetes</a></li>
                    </ul>
                </div>

                <div className="footer__column footer__column--company">
                    <h4 className="footer__column-title">Empresa</h4>
                    <ul className="footer__list">
                        <li><a href="#WhatsAppCTA" className="footer__link">Sobre Nós</a></li>
                        <li><a href="#WhatsAppCTA" className="footer__link">Contato</a></li>
                        <li><a href="#NewsLetterCTA" className="footer__link">Cupom</a></li>

                    </ul>
                </div>

                <div className="footer__column footer__column--contact">
                    <h4 className="footer__column-title">Contato</h4>
                    <ul className="footer__list">
                        <li className="footer__contact-item">
                            <MdEmail className="footer__contact-icon" /> contato@reparolar.com.br {/* Updated Email */}
                        </li>
                        <li className="footer__contact-item">
                            <MdLocalPhone className="footer__contact-icon" /> (48) 99187-1643 - Florianópolis {/* Updated Phone and location */}
                        </li>
                         <li className="footer__contact-item"> {/* Added Curitiba phone number as a separate item */}
                            <MdLocalPhone className="footer__contact-icon" /> (41) 99253-0195 - Curitiba
                        </li>
                        <li className="footer__contact-item">
                            <MdLocationOn className="footer__contact-icon" /> Florianópolis, SC Brasil {/* Updated Address */}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom-bar">
                <div className="container footer__bottom-container">
                    <p className="footer__copyright">Copyright 2025 © Reparolar - Todos Direitos Reservados</p> {/* Updated Copyright text */}
                    <p className="footer__developer">
                        Desenvolvido com ❤️ por <a href="https://patrick-siqueira-portifolio.vercel.app/projects" className="footer__developer-link">Patrick.Developer</a> {/* Updated developer text and added link */}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;