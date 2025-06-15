import React, { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground'; 
import '../styles.css';
import '../responsive.css';

function Hero() {
  const texts = ['Desenvolvedor Full Stack', 'Desenvolvedor Mobile', 'Entre em Contato!'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100); // mais rápido

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(prev =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        // Pausa antes de apagar
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50); // apagar mais rápido
      } else if (isDeleting && text === '') {
        // Próximo texto
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100); // digitar rápido
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, typingSpeed]);

  const highlightText = (text, fullText) => {
    // Se for Full Stack, destacar "Full Stack" desde a primeira letra digitada
    if (fullText === 'Desenvolvedor Full Stack') {
      const prefix = 'Desenvolvedor ';
      if (text.length <= prefix.length) {
        // ainda digitando "Desenvolvedor ", sem destaque
        return text;
      } else {
        // destacar a parte "Full Stack" que já foi digitada
        const startHighlight = prefix.length;
        const beforeHighlight = text.substring(0, startHighlight);
        const highlightPart = text.substring(startHighlight);
        return `${beforeHighlight}<span style="color: var(--cor-destaque)">${highlightPart}</span>`;
      }
    }

    // Para os outros, destacar só a última palavra já digitada
    const match = text.match(/^(.*)\s(\S*)$/);
    if (match) {
      return `${match[1]} <span style="color: var(--cor-destaque)">${match[2]}</span>`;
    }
    return text;
  };

  const currentFullText = texts[loopNum % texts.length];

  return (
    <header id="home" className="hero">
        <ParticlesBackground /> {}

      <div className="container">
        <p>Olá, eu sou o</p>
        <h2>Erick Ribeiro Moreira</h2>
        <p>
          <span
            className="typewriter-text"
            dangerouslySetInnerHTML={{ __html: highlightText(text, currentFullText) }}
          ></span>
          <span className="cursor">|</span>
        </p>
        <div className="hero-buttons">
          <a href="/docs/curriculo-erick.pdf" className="btn-outline" download>
            Download CV
          </a>
          <a href="#contato" className="btn-primary">
            Contato
          </a>
        </div>
      </div>
    </header>
  );

  
}

export default Hero;
