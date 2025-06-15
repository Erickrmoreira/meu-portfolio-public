import React, { useEffect } from 'react';
import '../styles.css';
import '../responsive.css';

function Sobre() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('visible', isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#sobre');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2>Sobre Mim</h2>
        <div className="sobre-conteudo">
          <div className="foto-perfil">
            <img src="/images/fotoperfil.png" alt="Foto de Erick Ribeiro" />
          </div>
          <div className="texto">
            <h3>Desenvolvedor Full Stack & Mobile</h3>
            {/* <p>Django | Flutter | React</p> */}
            <p>
              Trabalho com desenvolvimento web e mobile, entregando soluções completas com 
              atenção à performance, usabilidade e qualidade. Durante 1 ano, atuei como Diretor de Projetos na Bits Jr,
              onde liderei e gerenciei equipes, sendo responsável por garantir a entrega dos projetos dentro dos prazos estabelecidos. 
              Atualmente, curso Engenharia da Computação, com previsão de formatura para 2026, e estou sempre em busca de novos desafios e aprendizados.
            </p>
          </div>
        </div>

</div>
    </section>
  );
}

export default Sobre;
