import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Tabs, Tab } from '@mui/material';
import HomePage from './pages/HomePage';
import KeywordsPage from './pages/KeywordsPage';
import QuestionsPage from './pages/QuestionsPage';
import TechniquesPage from './pages/TechniquesPage';
import EngineeringProblemsPage from './pages/EngineeringProblemsPage';

function NavigationTabs() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const routes = [
    { label: 'Home', path: '/' },
    { label: 'Keywords', path: '/keywords' },
    { label: 'Techniques', path: '/techniques' },
    { label: 'Business Challenges', path: '/business-challenges' },
    { label: 'Engineering Practice', path: '/engineering-problems' }
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
          position="fixed" 
          elevation={1}
          sx={{ 
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            zIndex: (theme) => theme.zIndex.drawer + 1
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
        
        <Box sx={{ pt: 8 }}> {/* Add padding-top to account for fixed AppBar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/keywords" element={<KeywordsPage />} />
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/business-challenges" element={<QuestionsPage />} />
            <Route path="/engineering-problems" element={<EngineeringProblemsPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
