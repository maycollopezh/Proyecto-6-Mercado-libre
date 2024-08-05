import React from 'react';

const ProductCard = ({ image, title, description, link }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default ProductCard;
