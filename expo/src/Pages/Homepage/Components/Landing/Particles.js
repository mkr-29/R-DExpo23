import React, { useState, useEffect } from 'react';
import './Particles.css';

const Confetti = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newConfetti = [...confetti];
      newConfetti.push({
        x: Math.random() * window.innerWidth,
        y: 0,
        angle: Math.random() * 360,
        speed: Math.random() * 5 + 1,
      });
      setConfetti(newConfetti);
    }, 100);

    return () => clearInterval(interval);
  }, [confetti]);

  const updateConfetti = () => {
    const newConfetti = [...confetti];

    for (let i = 0; i < newConfetti.length; i++) {
      const confetto = newConfetti[i];
      const { x, y, angle, speed } = confetto;

      const newX = x + Math.cos(angle) * speed;
      const newY = y + Math.sin(angle) * speed + 0.1;
      confetto.x = newX;
      confetto.y = newY;
      confetto.angle += Math.random() * 0.5 - 0.25;

      if (newY > window.innerHeight) {
        newConfetti.splice(i, 1);
        i--;
      }
    }

    setConfetti(newConfetti);
  };

  useEffect(() => {
    requestAnimationFrame(updateConfetti);
  }, [confetti]);

  return (
    <div>
      {confetti.map((confetto, index) => (
        <div
          key={index}
          className="confetti"
          style={{
            left: `${confetto.x}px`,
            top: `${confetto.y}px`,
            transform: `rotate(${confetto.angle}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;