import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import '../responsive.css';

function Portfolio() {
  const [activeModal, setActiveModal] = useState(null);
  const modalRefs = useRef({});

  const projects = [
    {
      id: 'modal-coama',
      img: '/images/projeto-coama.png',
      alt: 'Projeto Coama',
      title: 'IV Evento Coama',
      type: 'Site de Eventos',
      modal: {
        title: 'IV Evento Coama',
        description: 'O site do Congresso Coama permitiu o cadastro de mais de 500 participantes, sendo estudantes, pós-graduandos e profissionais. Os usuários podiam selecionar minicursos e realizar pagamentos via Mercado Pago (PIX, boleto, débito ou crédito). Havia promoções, como 10% de desconto para quem comprasse evento e minicurso juntos, além de um supercombo para até 5 pessoas com o mesmo desconto. O sistema gerenciava lotes de venda, contava os dias para o evento e exibia os patrocinadores do setor de mineração. Todos os dados dos inscritos eram organizados em um painel administrativo.',
        functionalities: '-Cadastro e login de usuários<br />-Inscrição em eventos e minicursos<br />-Pagamento online via API Mercado Pago<br />-Controle de participantes<br />-Descontos automáticos para combos.',
        technologies: 'Django, Python, JavaScript, CSS, HTML, SQLite.',
        role: 'Como diretor de projetos, liderei a equipe de desenvolvimento na implementação de novas funcionalidades para o site.',
        links: [
          { href: 'https://eventocoama.com.br', img: '/images/projeto-coama.png', label: 'Site do Evento' },
        ],
        video: '/videos/coama.mp4'
      }
    },
    {
      id: 'modal-portfolio',
      img: '/images/portfolio.png',
      alt: 'Portfólio',
      title: 'Portfólio Pessoal',
      type: 'Site Pessoal',
      modal: {
        title: 'Portfólio Pessoal',
        description: 'Desenvolvido para apresentar de forma organizada minhas informações pessoais, habilidades, serviços oferecidos, projetos realizados e formas de contato. Funciona como uma vitrine digital profissional, com navegação intuitiva e design responsivo que permite aos visitantes conhecer rapidamente meu trabalho, acessar repositórios, ver as tecnologias utilizadas e entrar em contato comigo de maneira prática.',
        functionalities: '-Animações e efeitos com CSS3 e JavaScript<br />-Design responsivo<br />-Formulário de contato integrado com EmailJS<br />',
        technologies: 'React, JavaScript, CSS, HTML e Figma.',
        links: [
          { href: 'https://github.com/erickrmoreira/portfolio', img: '/images/github.png', alt: 'GitHub' },
          { href: 'https://www.figma.com/design/lMc8mzmfhORPEhumzDHimn/Meu-Site-Portfolio?node-id=0-1&t=BWPr51Xi3JzucNnq-1', img: '/images/figma.png', alt: 'Figma' }
        ],
        video: '/videos/portfolio.mp4'
      }
    },
    {
      id: 'modal-ecommerce',
      img: '/images/applerick.png',
      alt: 'Ecommerce',
      title: 'Applerick',
      type: 'Site Ecommerce',
      modal: {
        title: 'Applerick',
        description: 'Site vitrine de e-commerce focado em produtos Apple, oferecendo uma experiência de compra simples e rápida. Usuários podem navegar pelo catálogo de produtos, adicionar itens ao carrinho e finalizar a compra com pagamento seguro.',
        functionalities: '-Integração com API de pagamento<br />-Cálculo automático de frete via API dos Correios<br />-Catálogo de produtos com filtros básicos<br />-Design moderno e responsivo<br />-Gerenciamento de carrinho de compras',
        technologies: 'Django, JavaScript, HTML, CSS, SQLite.',
        links: [
          { href: 'https://github.com/erickrmoreira/', img: '/images/github.png', alt: 'GitHub' },
          { href: 'https://www.figma.com/', img: '/images/figma.png', alt: 'Figma' }
        ],
        video: '/videos/applerick.mp4'
      }
    },
    {
      id: 'modal-kciresoft',
      img: '/images/kciresoft.png',
      alt: 'Kciresoft',
      title: 'Kciresoft',
      type: 'Site Institucional',
      modal: {
        title: 'Kciresoft',
        description: 'Site vitrine desenvolvido para apresentar a empresa fictícia KcireSoft, com foco em destacar seus serviços, portfólio de projetos e canais de contato. O site conta com design moderno e responsivo, proporcionando uma experiência de navegação clara e acessível em diferentes dispositivos.',
        functionalities: '-Envio de emails via API SendGrid<br />-Integração com API do WhatsApp<br />-Links para redes sociais<br />-Design moderno e responsivo<br',
        technologies: 'React, Javascript, CSS, HTML, MySQL e Figma',
        links: [
          { href: 'https://github.com/erickrmoreira/', img: '/images/github.png', alt: 'GitHub' },
          { href: 'https://www.figma.com/', img: '/images/figma.png', alt: 'Figma' }
        ],
        video: '/videos/kciresoft.mp4'
      }
    }
  ];

  const handleModalOpen = (modalId) => {
    setActiveModal(modalId);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && activeModal) {
        handleModalClose();
      }
    };

    const handleClickOutside = (event) => {
      if (activeModal && modalRefs.current[activeModal] && event.target === modalRefs.current[activeModal]) {
        handleModalClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            const cards = Array.from(document.querySelectorAll('.projeto'));
            cards
              .sort((a, b) => {
                const aRect = a.getBoundingClientRect();
                const bRect = b.getBoundingClientRect();
                return aRect.top === bRect.top ? aRect.left - bRect.left : aRect.top - bRect.top;
              })
              .forEach((card, i) => {
                card.style.animation = `fadeInUp 0.5s ease forwards`;
                card.style.animationDelay = `${i * 0.15}s`;
              });
          } else {
            target.style.animation = '';
            target.style.animationDelay = '';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.projeto');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfólio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="projeto">
              <img src={project.img} alt={project.alt} />
              <p><strong>{project.title}</strong><br /><span className="tipo-projeto">{project.type}</span></p>
              <div className="projeto-overlay">
                <div className="overlay-content">
                  <div className="overlay-icons"></div>
                  <a href="#" className="overlay-button" onClick={(e) => { e.preventDefault(); handleModalOpen(project.id); }}>Detalhes</a>
                </div>
              </div>
            </div>
          ))}
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className={`modal ${activeModal === project.id ? 'active' : ''}`}
              ref={(el) => (modalRefs.current[project.id] = el)}
            >
              <div className="modal-content">
                <span className="close" onClick={handleModalClose}>×</span>
                <h3>{project.modal.title}</h3>
                <div className="modal-body">
                  <div className="modal-left">
                    {project.modal.video && (
                      <video controls className="modal-video">
                        <source src={project.modal.video} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    )}
                  </div>
                  <div className="modal-right">
                    <h4>Descrição:</h4>
                    <p>{project.modal.description}</p>
                    {project.modal.functionalities && (
                      <>
                        <h4>Funcionalidades:</h4>
                        <p dangerouslySetInnerHTML={{ __html: project.modal.functionalities }}></p>
                      </>
                    )}
                    {project.modal.technologies && (
                      <>
                        <h4>Tecnologias:</h4>
                        <p>{project.modal.technologies}</p>
                      </>
                    )}
                    {project.modal.role && (
                      <>
                        <h4>Meu papel:</h4>
                        <p>{project.modal.role}</p>
                      </>
                    )}
                    {project.modal.links && (
                      <>
                        <h4>Ver Projeto:</h4>
                        <div className="modal-share">
                          {project.modal.links.map((link, i) => (
                            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" title={link.alt}>
                              <img src={link.img} alt={link.alt} className="share-icon" />
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;