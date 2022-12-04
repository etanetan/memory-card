import React from 'react';

const Card = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={image} alt={image.replace('.png', '')} />
    </div>
  );
};

export default Card;
