'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function ParticleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const getParticleCount = () => {
      return window.innerWidth < 768
        ? Math.floor(Math.random() * 6) + 15  // 15-20 on mobile
        : Math.floor(Math.random() * 21) + 30; // 30-50 on desktop
    };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const createParticle = (): Particle => ({
      x: random(0, canvas!.width),
      y: random(0, canvas!.height),
      vx: random(-0.5, 0.5) || random(0.2, 0.5) * (Math.random() > 0.5 ? 1 : -1),
      vy: random(-0.5, 0.5) || random(0.2, 0.5) * (Math.random() > 0.5 ? 1 : -1),
      size: random(1, 3),
    });

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    };

    const resize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initParticles();
    };

    const drawParticle = (p: Particle) => {
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx!.fillStyle = 'rgba(75, 226, 119, 0.2)';
      ctx!.fill();
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = 'rgba(75, 226, 119, 0.05)';
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    };

    const updateParticle = (p: Particle) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;

      // Keep within bounds
      p.x = Math.max(0, Math.min(canvas!.width, p.x));
      p.y = Math.max(0, Math.min(canvas!.height, p.y));
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      drawLines();
      particles.forEach((p) => {
        drawParticle(p);
        updateParticle(p);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
