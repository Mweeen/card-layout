import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = () => {
  return (
    <Card style={{ maxWidth: 345, margin: '20px auto' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card component using Material-UI.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
