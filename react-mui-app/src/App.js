import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Tabs, Tab } from '@mui/material';
import HomePage from './pages/HomePage';
import KeywordsPage from './pages/KeywordsPage';
import ProblemsPage from './pages/ProblemsPage';
import TechniquesPage from './pages/TechniquesPage';

function NavigationTabs() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const routes = [
    { label: 'Home', path: '/' },
    { label: 'Keywords', path: '/keywords' },
    { label: 'Problems', path: '/problems' },
    { label: 'Techniques', path: '/techniques' }
  ];
  
  return (
    <Tabs 
      value={currentPath} 
      sx={{ ml: 2 }}
      textColor="inherit"
      indicatorColor="secondary"
    >
      {routes.map((route) => (
        <Tab 
          key={route.path}
          label={route.label} 
          value={route.path} 
          component={Link} 
          to={route.path}
          sx={{ 
            textTransform: 'none',
            fontWeight: 500,
            color: 'inherit'
          }}
        />
      ))}
    </Tabs>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <AppBar 
          position="static" 
          elevation={1}
          sx={{ 
            backgroundColor: 'primary.main',
            color: 'primary.contrastText'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ px: 0 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                LLM Fundamentals Course
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <NavigationTabs />
            </Toolbar>
          </Container>
        </AppBar>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keywords" element={<KeywordsPage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/techniques" element={<TechniquesPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
