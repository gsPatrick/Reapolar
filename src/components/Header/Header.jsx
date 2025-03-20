// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import Logo from '../../assets/Logo.webp';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header__container">
                <a href="/" className="header__logo-link">
                    <img src={Logo} alt="Logo Panto" className="header__logo-image" />
                </a>
                <button className="header__menu-toggle" onClick={toggleMenu}>
                    <FiMenu />
                </button>
                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="/" className="header__nav-link">
                                Home
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#WhatsAppCTA" className="header__nav-link">
                                Sobre
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#servicos" className="header__nav-link">
                                Serviço
                            </a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#WhatsappCTA" className="header__nav-link">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__actions">
                    <a href="https://wa.me/SEU_NUMERO_WHATSAPP" // Substitua pelo seu número
                       target="_blank"
                       rel="noopener noreferrer"
                       className="header__whatsapp-icon"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;