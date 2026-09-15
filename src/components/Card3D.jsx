'use client';
import { useState, useRef } from 'react';

export default function Card3D({ 
  children, 
  className = '', 
  depth = 20, 
  glowColor = 'rgba(197, 160, 89, 0.25)',
  maxTilt = 10
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotX = ((mouseY - height / 2) / (height / 2)) * -maxTilt;
    const rotY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.75 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      className="perspective-container w-full h-full"
      style={{ perspective: '1200px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`preserve-3d relative w-full h-full transition-transform duration-200 ease-out ${className}`}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth}px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}, 0 0 25px rgba(212, 175, 55, 0.2)`
            : '0 10px 30px -10px rgba(87, 63, 54, 0.08)'
        }}
      >
        {/* Dynamic Specular Light Reflection Glare */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-20 overflow-hidden"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 220px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 240, 189, 0.35), transparent 70%)`
          }}
        />
        {children}
      </div>
    </div>
  );
}
