import React, { useState, useEffect } from 'react';
import { Container, CircularProgress, Alert, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function KeywordsPage() {
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch('/llm-keywords.md');
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.status}`);
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (err) {
        setError('Error loading keywords: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ 
        '& h1': { 
          fontSize: '2.5rem', 
          fontWeight: 600, 
          marginBottom: '2rem',
          color: 'primary.main'
        },
        '& h2': { 
          fontSize: '2rem', 
          fontWeight: 600, 
          marginTop: '3rem',
          marginBottom: '1rem',
          color: 'primary.main'
        },
        '& h3': { 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginTop: '2rem',
          marginBottom: '1rem',
          color: 'primary.main'
        },
        '& p': { 
          lineHeight: 1.7, 
          marginBottom: '1rem' 
        },
        '& code': { 
          backgroundColor: 'grey.100', 
          padding: '0.2rem 0.4rem', 
          borderRadius: '4px',
          fontFamily: 'monospace'
        },
        '& pre': { 
          backgroundColor: 'grey.100', 
          padding: '1rem', 
          borderRadius: '8px',
          overflow: 'auto'
        },
        '& table': { 
          width: '100%', 
          borderCollapse: 'collapse',
          marginBottom: '2rem'
        },
        '& th, & td': { 
          border: '1px solid #ddd', 
          padding: '0.75rem',
          textAlign: 'left'
        },
        '& th': { 
          backgroundColor: 'primary.light',
          fontWeight: 600
        },
        '& ul, & ol': { 
          paddingLeft: '2rem',
          marginBottom: '1rem'
        },
        '& li': { 
          marginBottom: '0.5rem' 
        },
        '& hr': { 
          margin: '3rem 0',
          border: 'none',
          borderTop: '2px solid #eee'
        }
      }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </Box>
    </Container>
  );
}