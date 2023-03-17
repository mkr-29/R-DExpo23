import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  return (
    <Confetti
      width={window.innerWidth-20}
      height={window.innerHeight+100}
      numberOfPieces={100}
      recycle={true}
      gravity={0.05}
      // wind={0.01}
      drawShape={ctx => {
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, 2 * Math.PI);
        ctx.fill();
      }}
      colors={['#03bc92']}
    />
  );
};

export default ConfettiComponent;
