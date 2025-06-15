import React, { useEffect } from 'react';
import '../styles.css';
import '../responsive.css';

function Habilidades() {
  const skills = [
    { img: 'images/python.png', alt: 'python', name: 'Python' },
    { img: '/images/dart.png', alt: 'dart', name: 'Dart' },
    { img: '/images/java.png', alt: 'java', name: 'Java' },
    { img: '/images/js.png', alt: 'js', name: 'JavaScript' },
    { img: '/images/css.png', alt: 'css', name: 'CSS' },
    { img: '/images/html.png', alt: 'html', name: 'HTML' },
    { img: '/images/django.png', alt: 'django', name: 'Django' },
    { img: '/images/flutter.png', alt: 'flutter', name: 'Flutter' },
    { img: '/images/react.png', alt: 'react', name: 'React' },
    { img: '/images/node.png', alt: 'node', name: 'Node.js' },
    { img: '/images/mysql.png', alt: 'mysql', name: 'MySQL' },
    { img: '/images/sqlite.png', alt: 'sqlite', name: 'SQLite' },
    { img: '/images/firebase.png', alt: 'firebase', name: 'Firebase' },
    { img: '/images/docker.png', alt: 'docker', name: 'Docker' },
    { img: '/images/figma.png', alt: 'figma', name: 'Figma' },
    { img: '/images/github.png', alt: 'gitHub', name: 'GitHub' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('visible', isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const images = document.querySelectorAll('.habilidade img');
    images.forEach(img => observer.observe(img));

    return () => {
      images.forEach(img => observer.unobserve(img));
    };
  }, []);

  return (
    <section id="habilidades" className="habilidades">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="habilidades-grid">
          <div className="fileira">
            <div className="cards-container">
              {skills.slice(0, 6).map((skill, index) => (
                <div key={index} className="habilidade">
                  <img src={skill.img} alt={skill.alt} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fileira">
            <div className="cards-container">
              {skills.slice(6, 12).map((skill, index) => (
                <div key={index} className="habilidade">
                  <img src={skill.img} alt={skill.alt} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fileira">
            <div className="cards-container">
              {skills.slice(12).map((skill, index) => (
                <div key={index} className="habilidade">
                  <img src={skill.img} alt={skill.alt} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;