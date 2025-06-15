import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Partículas carregadas!", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '', // Fundo transparente
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#4169E1', // Cor das partículas
          },
          links: {
            color: '#4169E1', // Cor das linhas
            distance: 150,
            enable: true,
            opacity: 0.2, // Opacidade das linhas (0 a 1)
            width: 0.6,   // Grossura das linhas
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Quantidade de partículas
          },
          opacity: {
            value: 0.1, // Opacidade das partículas (0 a 1)
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 2 }, // Tamanho das partículas
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
}

export default ParticlesBackground;