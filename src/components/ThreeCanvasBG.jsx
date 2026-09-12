import React, { useEffect, useRef } from 'react';

export default function ThreeCanvasBG({ 
  density = 35, 
  enableInteraction = true, 
  variant = 'hero', // 'hero', 'emerald', 'gold', 'minimal'
  theme = 'dark',
  className = "" 
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId;
    let isActive = true;

    let width = 0;
    let height = 0;

    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 600;
    };
    updateSize();

    const handleResize = () => updateSize();
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 160,
    };

    const handleMouseMove = (e) => {
      if (!enableInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Color palettes based on theme & variant
    const isLight = theme === 'light';
    const goldColor = isLight ? '#B38F29' : '#D4AF37';
    const emeraldColor = isLight ? '#059669' : '#10B981';
    const accentColor = isLight ? '#D97706' : '#F5E086';

    const colors = variant === 'emerald'
      ? [emeraldColor, '#34D399', '#059669']
      : variant === 'gold'
      ? [goldColor, accentColor, '#B38F29']
      : [goldColor, emeraldColor, accentColor, '#6EE7B7'];

    // 3D Particles with depth (Z-index simulation)
    const particles = [];
    for (let i = 0; i < density; i++) {
      const z = Math.random() * 2.5 + 0.8; // Depth multiplier
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: z,
        vx: (Math.random() - 0.5) * (0.35 / z),
        vy: (Math.random() - 0.5) * (0.35 / z) - 0.08, // Slight upward float
        radius: Math.max(1.5, (Math.random() * 2 + 1) * z),
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.012 + Math.random() * 0.015,
        baseAlpha: Math.min(0.6, 0.15 + z * 0.12),
      });
    }

    let ringAngle = 0;

    const draw = () => {
      if (!isActive || !ctx || !canvas) return;
      
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      ringAngle += 0.002;

      ctx.clearRect(0, 0, width, height);

      // Distant 3D Orbit Ring (Subtle & Elegant)
      if ((variant === 'hero' || variant === 'gold') && width > 0 && height > 0) {
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(ringAngle);
        const rx = Math.min(width, height) * 0.35;
        const ry = Math.min(width, height) * 0.12;
        if (rx > 0 && ry > 0) {
          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, Math.PI / 5, 0, Math.PI * 2);
          ctx.strokeStyle = isLight ? 'rgba(179, 143, 41, 0.06)' : 'rgba(212, 175, 55, 0.1)';
          ctx.lineWidth = 1;
          ctx.setLineDash([6, 16]);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw Connections (Soft, Subtle & Non-intrusive)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const strokeColor = particles[i].color === goldColor
              ? isLight ? `rgba(179, 143, 41, ${alpha})` : `rgba(212, 175, 55, ${alpha})`
              : isLight ? `rgba(5, 150, 105, ${alpha})` : `rgba(16, 185, 129, ${alpha})`;

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = Math.max(0.3, (1 - dist / maxDist) * 1);
            ctx.stroke();
          }
        }
      }

      // Mouse Ambient Ripple Glow
      if (enableInteraction && mouse.radius > 0) {
        const mr = Math.max(1, mouse.radius);
        const mouseGlow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mr
        );
        mouseGlow.addColorStop(0, isLight ? 'rgba(179, 143, 41, 0.06)' : 'rgba(212, 175, 55, 0.08)');
        mouseGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mr, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render Floating Depth Particles with Gaussian Bokeh Halos
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around boundaries smoothly
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        // Soft pulse radius - ensure always positive
        const currentRadius = Math.max(0.5, p.radius + Math.sin(p.pulse) * 0.6);
        const currentAlpha = Math.max(0.05, Math.min(0.8, p.baseAlpha + Math.sin(p.pulse) * 0.1));
        const glowRadius = Math.max(1, currentRadius * 2.5);

        // Soft Radial Bokeh Blur Halo
        const glow = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, glowRadius
        );
        
        if (p.color === goldColor) {
          glow.addColorStop(0, isLight ? `rgba(179, 143, 41, ${currentAlpha * 0.5})` : `rgba(212, 175, 55, ${currentAlpha * 0.6})`);
        } else {
          glow.addColorStop(0, isLight ? `rgba(5, 150, 105, ${currentAlpha * 0.5})` : `rgba(16, 185, 129, ${currentAlpha * 0.6})`);
        }
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Particle Core
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      isActive = false;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, enableInteraction, variant, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
