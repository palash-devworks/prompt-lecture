import React from 'react';
import { Box, Typography } from '@mui/material';

function HomePage() {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
        fontSize: '48px'
      }}
    >
      <Typography variant="h1" component="div" sx={{ fontSize: '320px', color: 'primary.main' }}>
        42
      </Typography>
    </Box>
  );
}

export default HomePage;