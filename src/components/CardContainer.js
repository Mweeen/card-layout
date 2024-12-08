import React from 'react';
import CardComponent from './CardComponent';

const CardContainer = ({ tabValue }) => {
  const cards = tabValue === 2 ? Array.from({ length: 17 }, (_, index) => (
    <CardComponent key={index + 1} />
  )) : [
    <CardComponent key={1} />,
    <CardComponent key={2} />,
    <CardComponent key={3} />,
  ];

  return (
    <div className="card-container" style={{ marginTop: '20px', overflowY: 'auto'}}>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
