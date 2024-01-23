import React from 'react';

const Galeri = () => {
  const getRandomImageURL = (i) => `https://source.unsplash.com/random/300x300?sig=${i}`;

  return (
    <div className="galeri">
      {[...Array(8)].map((_, i) => (
        <img key={i} src={getRandomImageURL(i)} alt={`Random Image ${i + 1}`} />
      ))}
    </div>
  );
};

export default Galeri;