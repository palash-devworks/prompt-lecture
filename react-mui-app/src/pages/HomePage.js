import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          minHeight: 'calc(100vh - 200px)'
        }}
      >
        <Typography variant="h1" component="div" sx={{ fontSize: '320px', color: 'primary.main' }}>
          42
        </Typography>
        
        <Box 
          sx={{ 
            width: '100%',
            maxWidth: '800px',
            aspectRatio: '16/9',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aboZctrHfK8?si=ITo9g90QOZZ25ktu"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: 'none' }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;