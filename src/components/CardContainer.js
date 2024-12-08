import React from 'react';
import { Grid, Container } from '@mui/material';
import CardComponent from './CardComponent';

const CardContainer = ({ tabValue }) => {
  const cards = tabValue === 2 ? Array.from({ length: 12 }, (_, index) => (
    <CardComponent key={index + 1} />
  )) : [
    <CardComponent key={1} />,
    <CardComponent key={2} />,
    <CardComponent key={3} />,
  ];

  return (
    <Container style={{ marginTop: '20px', overflowY: 'auto', maxHeight: '80vh' }}>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {card}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardContainer;
