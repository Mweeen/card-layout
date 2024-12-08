import React from 'react';
import { Typography, Container } from '@mui/material';

const PageDescription = () => {
  return (
    <Container style={{ marginTop: '64px', padding: '20px' }}>
      <Typography variant="h4" component="div" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        This is a simple page description. You can add more details here.
      </Typography>
    </Container>
  );
};

export default PageDescription;
