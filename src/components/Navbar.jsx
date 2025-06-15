import React, { useEffect, useState } from 'react';
import '../styles.css';
import '../responsive.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionElements = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-links a');

    const activateNavLink = (id) => {
      navLinkElements.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    };

    let visibleSections = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = visibleSections.findIndex(i => i.target === entry.target);
          if (entry.isIntersecting) {
            if (index === -1) visibleSections.push(entry);
          } else {
            if (index !== -1) visibleSections.splice(index, 1);
          }
        });

        if (visibleSections.length > 0) {
          const mostVisible = visibleSections
            .slice()
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          activateNavLink(mostVisible.target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '0px 0px -30% 0px',
      }
    );

    sectionElements.forEach(section => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY === 0) activateNavLink('home');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sectionElements.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      if (id === 'home') {
        const homeSectionTop = section.offsetTop;
        const navbarHeight = 50; 
        const heroPaddingTop = 200; 

        const scrollToPosition = homeSectionTop + heroPaddingTop - navbarHeight;

        const offsetForHero = 150;                    

        window.scrollTo({
          top: section.offsetTop - offsetForHero,
          behavior: 'smooth'
        });

      } else {
        section.scrollIntoView({ behavior: 'smooth' });
      }

      window.history.replaceState(null, '', window.location.pathname);
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container">
        <a href="#home" className="logo-link" onClick={(e) => handleLinkClick(e, 'home')}>
          <img src="/images/logo.svg" alt="Logo Erick Dev" className="logo-img" />
          
        </a>

        <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          &#9776;
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="active">Home</a></li>
          <li><a href="#sobre" onClick={(e) => handleLinkClick(e, 'sobre')}>Sobre</a></li>
          <li><a href="#habilidades" onClick={(e) => handleLinkClick(e, 'habilidades')}>Habilidades</a></li>
          <li><a href="#servicos" onClick={(e) => handleLinkClick(e, 'servicos')}>Serviços</a></li>
          <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>Portfólio</a></li>
          <li><a href="#contato" onClick={(e) => handleLinkClick(e, 'contato')}>Contato</a></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;