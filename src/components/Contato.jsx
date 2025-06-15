import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles.css';
import '../responsive.css';

function Contato() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('visible', isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('#contato');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm( //Não irei colocar esses dados no público por motivos óbvios.
      ' ', //Aqui fica o 'service ID' do emailjs; 
      ' ', //Aqui fica o 'template ID' do emailjs;
      form.current,
      ' ' //Aqui fica o 'public key' do emailjs;
    ).then(
      () => {
        setStatus('success');
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        setStatus('error');
      }
    ).finally(() => {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <section id="contato" className="contato">
      <div className="container contato-grid">
        <div className="contato-info">
          <h2>Contato</h2>
          <p>Entre em contato para dúvidas, orçamentos ou suporte. Escolha um dos canais abaixo ou preencha o formulário ao lado.</p>
          <div className="social-icons">
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=erickrmoreira12@gmail.com" target="_blank" aria-label="Enviar email para Erick">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/erickrmoreira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/erickrmoreira" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/erickrmoreira" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="formulario-contato">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="name" placeholder="Seu nome" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Seu email" required />

          <label htmlFor="tipo-servico">Tipo de Serviço</label>
          <select id="tipo-servico" name="tipo_servico" required>
            <option value="">Selecione...</option>
            <option value="Desenvolvimento Web">Desenvolvimento Web</option>
            <option value="Desenvolvimento Mobile">Desenvolvimento Mobile</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="message" placeholder="Digite sua mensagem" rows="5" required></textarea>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Enviando...
              </>
            ) : (
              'Enviar Mensagem'
            )}
          </button>

          {status === 'success' && (
            <p className="mensagem-sucesso">✅ Mensagem enviada com sucesso!</p>
          )}
          {status === 'error' && (
            <p className="mensagem-erro">❌ Erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contato;
