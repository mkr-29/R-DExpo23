import React from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  return (
    <Confetti
      width={window.innerWidth-20}
      height={window.innerHeight-1}
      numberOfPieces={100}
      recycle={true}
      colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548']}
    />
  );
};

export default ConfettiComponent;
