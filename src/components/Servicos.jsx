import React, { useEffect } from 'react';
import '../styles.css';
import '../responsive.css';


function Servicos() {
  const services = [
    { img: '/images/web.png', alt: 'web', title: 'Desenvolvimento Web', desc: 'Desenvolvo sites personalizados, responsivos e funcionais, conforme às necessidades de cada cliente.' },
    { img: '/images/mobile.png', alt: 'mobile', title: 'Desenvolvimento Mobile', desc: 'Desenvolvo aplicativos móveis para iOS e Android, com interfaces fluídas e funcionais, focando em usabilidade.' },
    { img: '/images/uiux.png', alt: 'ui/ux', title: 'UI/UX Design', desc: 'Desenvolvo interfaces visuais modernas e intuitivas, priorizando usabilidade e estética para uma experiência única.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('ativo', isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.servico');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <h2>Serviços</h2>
        <div className="servicos-grid">
          {services.map((service, index) => (
            <div key={index} className="servico">
              <img src={service.img} alt={service.alt} />
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;