import React, { useEffect, useRef } from 'react';
import profilePic from '../assets/profile.jpeg';
import myCV from '../assets/Manuga_Perera_CV.pdf';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 36;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const dist = Math.sqrt(
            Math.pow(x - canvas.width * 0.5, 2) +
            Math.pow(y - canvas.height * 0.6, 2)
          );
          const wave = Math.sin(dist / 60 - t) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59,158,255,${wave * 0.18})`;
          ctx.fill();
        }
      }
      t += 0.018;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,158,255,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
        style={{ paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        {/* Two column row — inline styles to guarantee side-by-side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '4rem',
            flexWrap: 'wrap',
          }}
        >

          {/* LEFT — Text */}
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '520px' }}>

            <h1
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: '700',
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              Manuga<br />
              <span className="text-gradient">Perera</span>
            </h1>

            <p
              className="font-mono text-accent tracking-wide"
              style={{ fontSize: '1rem', marginBottom: '1.25rem' }}
            >
              Software Engineering Undergraduate
            </p>

            <p
              className="font-body text-muted"
              style={{
                fontSize: '1rem',
                lineHeight: '1.55',
                marginBottom: '2.5rem',
                maxWidth: '540px',
              }}
            >
              I am a Software Engineering Undergraduate specializing in building user-centric 
              full-stack applications. I am passionate about bridging the gap between technical 
              development and strategic project management, with a focus on leveraging cloud 
              infrastructure to scale high-impact solutions.
            </p>

            {/* View CV button */}
            
            <a  href={myCV}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-white font-body font-medium transition-all duration-200"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
            >
              View CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </a>
          </div>

          {/* RIGHT — Photo */}
          <div
            style={{
              position: 'relative',
              flexShrink: 0,
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'rgba(59,158,255,0.2)',
                filter: 'blur(40px)',
                transform: 'scale(1.1)',
                pointerEvents: 'none',
              }}
            />

            
            {/* Circular image */}
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(59,158,255,0.4)',
              }}
            >
              <img
                src={profilePic}
                alt="Manuga Perera"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>

              
            </div>
          </div>

        </div>
      

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(107,114,128,0.4)' }}>scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'rgba(107,114,128,0.4)' }}>
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}