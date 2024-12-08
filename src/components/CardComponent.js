import React from 'react';

const CardComponent = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: 345, margin: '20px auto' }}>
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">This is a simple card component using Bootstrap.</p>
      </div>
    </div>
  );
};

export default CardComponent;
