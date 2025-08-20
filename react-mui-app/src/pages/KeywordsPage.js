import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Button } from '@mui/material';

const keywords = [
  {
    term: "Tokens",
    definition: "Words and pieces of words that AI models understand",
    whyEngineersCore: "Longer prompts = more tokens = higher costs. Most models charge per token.",
    analogy: "Bytes in a file - you want to be efficient but not lose meaning."
  },
  {
    term: "Context Window",
    definition: "The maximum amount of information an AI can \"remember\" in one conversation",
    whyEngineersCore: "Like RAM for conversations - once it's full, the AI forgets earlier parts.",
    analogy: "A terminal session with limited scroll-back buffer."
  },
  {
    term: "Prompts",
    definition: "Instructions you give to AI models",
    whyEngineersCore: "Bad prompts = unreliable outputs. Good prompts = consistent, useful results.",
    analogy: "Function calls - clear inputs produce predictable outputs."
  },
  {
    term: "Completions",
    definition: "The AI's response to your prompt",
    whyEngineersCore: "This is what you actually get back to use in your application.",
    analogy: "Return values from an API call."
  },
  {
    term: "Training",
    definition: "The process of teaching AI models using massive datasets",
    whyEngineersCore: "Determines what the model knows and how it behaves. You can't change this after deployment.",
    analogy: "Compiling a massive codebase - expensive, time-consuming, done once."
  },
  {
    term: "Inference",
    definition: "Running the trained model to get answers from prompts",
    whyEngineersCore: "This is what happens every time you call an AI API. Affects speed and cost.",
    analogy: "Executing a compiled program - fast, cheap, happens every request."
  },
  {
    term: "Embeddings",
    definition: "Numbers that represent the \"meaning\" of text",
    whyEngineersCore: "Powers search, recommendations, and similarity matching in apps.",
    analogy: "Hash functions for semantic meaning instead of exact text."
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    definition: "AI that can look up information before answering",
    whyEngineersCore: "Lets AI access your company's data, docs, or real-time info.",
    analogy: "AI with a search engine attached."
  },
  {
    term: "Agents",
    definition: "AI that can use tools and take multiple steps to complete tasks",
    whyEngineersCore: "Can automate complex workflows, not just answer questions.",
    analogy: "Scripts that can think and adapt while running."
  },
  {
    term: "Guardrails",
    definition: "Rules that prevent AI from doing unwanted things",
    whyEngineersCore: "Keeps AI from suggesting unsafe code, exposing secrets, or going off-topic.",
    analogy: "Input validation and security policies for AI systems."
  }
];

const KeywordCard = ({ keyword }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleToggle = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <Card sx={{ 
      width: '100%',
      height: '100%', 
      border: '1px solid', 
      borderColor: 'grey.200',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardContent sx={{ 
        p: 3, 
        display: 'flex', 
        flexDirection: 'column', 
        flexGrow: 1,
        gap: 2
      }}>
        <Typography variant="h5" component="h3" sx={{ 
          fontWeight: 600, 
          color: 'primary.main',
          textAlign: 'center',
          mb: 2
        }}>
          {keyword.term}
        </Typography>
        
        {isRevealed && (
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" paragraph>
              <strong>What it is:</strong> {keyword.definition}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Why engineers care:</strong> {keyword.whyEngineersCore}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              <strong>Think of it as:</strong> {keyword.analogy}
            </Typography>
          </Box>
        )}
        
        <Button 
          variant="outlined" 
          onClick={handleToggle}
          sx={{ mt: 'auto', width: '20%', alignSelf: 'center' }}
        >
          {isRevealed ? 'Hide Details' : 'Show Details'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function KeywordsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        LLM Keywords for Engineers
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Click "Show Details" to reveal more information about each keyword
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {keywords.map((keyword, index) => (
          <KeywordCard keyword={keyword} key={index} />
        ))}
      </Box>

      <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Why This Matters for Engineers
        </Typography>
        <Typography variant="body1">
          These aren't just buzzwords - they're the building blocks of reliable AI-powered tools. Understanding them helps you:
        </Typography>
        <Box component="ul" sx={{ mt: 2, pl: 3 }}>
          <Typography component="li" variant="body1">Choose the right model for your task</Typography>
          <Typography component="li" variant="body1">Write better prompts that work consistently</Typography>
          <Typography component="li" variant="body1">Build AI features that users can trust</Typography>
          <Typography component="li" variant="body1">Debug issues when AI outputs go wrong</Typography>
          <Typography component="li" variant="body1">Estimate costs and performance for AI features</Typography>
        </Box>
      </Box>
    </Container>
  );
}