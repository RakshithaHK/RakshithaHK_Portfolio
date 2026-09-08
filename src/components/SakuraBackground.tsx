import React, { useEffect, useState, useMemo } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  delay: number;
}

export const SakuraBackground: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  // Generate petals
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: 10 + Math.random() * 14, // px
      speedY: 14 + Math.random() * 18, // duration in seconds
      speedX: 4 + Math.random() * 6,
      rotation: Math.random() * 360,
      rotationSpeed: 10 + Math.random() * 15,
      opacity: 0.25 + Math.random() * 0.45,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Cyber Ambient Glows */}
      <div 
        className="absolute -top-40 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-35"
        style={{ background: 'radial-gradient(circle, #FF4F9A 0%, rgba(8, 15, 34, 0) 70%)' }}
      />
      <div 
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-[160px] opacity-25"
        style={{ background: 'radial-gradient(circle, #E91E87 0%, rgba(8, 15, 34, 0) 70%)' }}
      />
      <div 
        className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, #FF2D8D 0%, rgba(8, 15, 34, 0) 70%)' }}
      />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Floating Sakura Petals */}
      {enabled && (
        <div className="absolute inset-0">
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="absolute"
              style={{
                left: `${petal.x}%`,
                top: `-40px`,
                animation: `fall ${petal.speedY}s linear infinite`,
                animationDelay: `${petal.delay}s`,
                opacity: petal.opacity,
              }}
            >
              <svg
                width={petal.size}
                height={petal.size * 1.3}
                viewBox="0 0 24 30"
                fill="none"
                style={{
                  transform: `rotate(${petal.rotation}deg)`,
                  animation: `sway ${petal.speedX}s ease-in-out infinite alternate`,
                }}
              >
                {/* Stylized cherry blossom petal */}
                <path
                  d="M12 0C7 6 0 14 0 20C0 26 5 30 12 30C19 30 24 26 24 20C24 14 17 6 12 0Z"
                  fill="url(#sakuraGrad)"
                  filter="drop-shadow(0 0 4px rgba(255, 79, 154, 0.4))"
                />
                <defs>
                  <linearGradient id="sakuraGrad" x1="0" y1="0" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB3D1" />
                    <stop offset="0.6" stopColor="#FF6BAF" />
                    <stop offset="1" stopColor="#FF2D8D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Keyframe styles embedded for smooth sway and fall */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) translateX(0px);
          }
          50% {
            transform: translateY(50vh) translateX(30px);
          }
          100% {
            transform: translateY(105vh) translateX(-20px);
          }
        }
        @keyframes sway {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(45deg) scale(1.08);
          }
        }
      `}</style>
    </div>
  );
};
