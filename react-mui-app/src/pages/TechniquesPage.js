import React from 'react';
import { Container, Typography, Card, CardContent, Box, Divider, Grid, Chip } from '@mui/material';

const principles = [
  "Treat AI Like a Junior Engineer - Give context, be specific about what you want, and set boundaries. Don't assume it knows your codebase or constraints.",
  "Structure Your Requests - Use clear sections, examples, and constraints. Think: \"If I handed this to a new teammate, would they understand exactly what to do?\"",
  "Context is Everything - The AI doesn't know your tech stack, coding standards, or business rules unless you tell it. Feed it the right information.",
  "Iterate and Improve - Start with basic prompts, see what breaks, then add structure. Save patterns that work for your team."
];

const techniques = [
  {
    name: "Be Specific About the Task",
    instead: "Fix this code",
    try: "This Python function should return the top 3 users by score, but it's returning all users. Find the bug.",
    whenToUse: "Debugging, code reviews, specific implementation tasks"
  },
  {
    name: "Set Your Role and Context",
    template: "You are a [role] working on [context]. [Task] considering [constraints].",
    example: "You are a backend engineer at a fintech startup. Review this payment processing code for security issues considering PCI compliance requirements.",
    whenToUse: "Code reviews, architecture decisions, domain-specific tasks"
  },
  {
    name: "Show Your Work (Chain of Thought)",
    template: "Analyze this step by step: 1) What's happening 2) What could go wrong 3) What's the fix",
    example: "Debug this slow API endpoint step by step: 1) Identify what operations are slow 2) Explain why they're slow 3) Suggest specific optimizations with code examples",
    whenToUse: "Complex debugging, performance analysis, system design"
  },
  {
    name: "Give Examples",
    template: "Here's how we usually do [thing]: [example]. Now do [similar thing] following the same pattern.",
    example: "Here's how we write error handling in our codebase: [code sample]. Now add error handling to this new function following the same pattern.",
    whenToUse: "Code generation, maintaining consistency, onboarding new patterns"
  },
  {
    name: "Inject Relevant Context",
    template: "Given [relevant background], [task]",
    example: "Given our microservices architecture using Docker and Kubernetes, design a logging strategy for this new user service that integrates with our existing ELK stack.",
    whenToUse: "Architecture decisions, integration tasks, maintaining consistency"
  },
  {
    name: "Break Down Complex Tasks",
    template: "Do this in steps: Step 1: [specific task]. Step 2: [specific task]. For each step, show [what you want to see].",
    example: "Design a caching layer: Step 1: Identify what data to cache (show data access patterns). Step 2: Choose caching technology (compare 3 options). Step 3: Design cache invalidation (show code examples).",
    whenToUse: "System design, feature planning, complex implementations"
  },
  {
    name: "Set Clear Boundaries",
    template: "[Task] but don't [constraint 1], must [requirement], prioritize [priority]",
    example: "Optimize this database query but don't change the schema, must maintain backward compatibility, prioritize read performance over write speed.",
    whenToUse: "Code optimization, architecture changes, security reviews"
  }
];

const scenarios = [
  {
    scenario: "Code Reviews",
    prompt: "Act as a senior engineer reviewing this pull request. Focus on security, performance, and maintainability. Here's our coding standard: [paste relevant guidelines]. Flag any issues and suggest improvements."
  },
  {
    scenario: "Debugging Production Issues",
    prompt: "Analyze this error log step by step. Our system architecture: [brief description]. The error: [log]. Find the root cause and suggest a fix that won't break existing functionality."
  },
  {
    scenario: "Learning New Tech",
    prompt: "I'm a backend engineer learning React. Explain component state management using examples relevant to API data fetching. Compare to how we manage state in backend services."
  },
  {
    scenario: "Architecture Decisions",
    prompt: "We're choosing between PostgreSQL and MongoDB for user data. Our constraints: 100k users, mostly reads, need ACID compliance. Compare both options with pros/cons for our specific use case."
  },
  {
    scenario: "Code Generation",
    prompt: "Generate a REST API endpoint following our pattern: [example endpoint]. New endpoint should handle user preferences with CRUD operations. Include error handling and input validation."
  }
];

const quickReference = [
  { scenario: "Bug fixing", technique: "Be Specific + Chain of Thought", phrase: "Find the bug step by step..." },
  { scenario: "Code review", technique: "Set Role + Boundaries", phrase: "Act as senior engineer, focus on..." },
  { scenario: "New feature", technique: "Context + Examples", phrase: "Given our architecture, here's similar code..." },
  { scenario: "Learning", technique: "Specific + Context", phrase: "Explain for a [role] working with [tech]..." },
  { scenario: "Optimization", technique: "Chain of Thought + Boundaries", phrase: "Optimize step by step but don't..." }
];

const mistakes = [
  { mistake: "Too vague: \"Make this better\"", fix: "Specify what \"better\" means" },
  { mistake: "No context", fix: "Include your tech stack, constraints, and goals" },
  { mistake: "Single shot", fix: "For complex tasks, break into steps" },
  { mistake: "No examples", fix: "Show the AI your coding style and patterns" },
  { mistake: "No boundaries", fix: "Always specify what NOT to do" }
];

export default function TechniquesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        Prompting Techniques for Engineers
      </Typography>

      <Box sx={{ mb: 6, p: 3, backgroundColor: 'primary.light', borderRadius: 2, color: 'primary.contrastText' }}>
        <Typography variant="h5" gutterBottom>
          Why This Matters
        </Typography>
        <Typography variant="body1">
          You're already using AI tools. The difference between getting garbage output and useful code is knowing how to ask. These techniques turn AI from "sometimes helpful" to "reliably useful."
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          Core Principles
        </Typography>
        <Grid container spacing={2}>
          {principles.map((principle, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ width: '100%' }}>
              <Card sx={{ height: '100%', width: '100%', border: '1px solid', borderColor: 'grey.200' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {index + 1}. {principle.split(' - ')[0]}
                  </Typography>
                  <Typography variant="body2">
                    {principle.split(' - ')[1]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          7 Essential Techniques
        </Typography>
        {techniques.map((technique, index) => (
          <Card key={index} sx={{ mb: 3, border: '1px solid', borderColor: 'grey.200' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                {index + 1}. {technique.name}
              </Typography>
              
              {technique.instead && technique.try && (
                <Box sx={{ mb: 2, p: 2, backgroundColor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="body2" color="error.main" gutterBottom>
                    <strong>Instead of:</strong> "{technique.instead}"
                  </Typography>
                  <Typography variant="body2" color="success.main">
                    <strong>Try:</strong> "{technique.try}"
                  </Typography>
                </Box>
              )}
              
              {technique.template && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    <strong>Template:</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'monospace', backgroundColor: 'grey.100', p: 1, borderRadius: 1 }}>
                    {technique.template}
                  </Typography>
                </Box>
              )}
              
              {technique.example && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    <strong>Example:</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    "{technique.example}"
                  </Typography>
                </Box>
              )}
              
              <Typography variant="body2" color="text.secondary">
                <strong>When to use:</strong> {technique.whenToUse}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          Real Engineering Scenarios
        </Typography>
        <Grid container spacing={3}>
          {scenarios.map((scenario, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'grey.200' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {scenario.scenario}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                    "{scenario.prompt}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          Quick Reference Card
        </Typography>
        <Card sx={{ border: '1px solid', borderColor: 'grey.200' }}>
          <CardContent sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              {quickReference.map((ref, index) => (
                <Grid item xs={12} md={6} lg={4} key={index} sx={{ width: '100%' }}>
                  <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.300', borderRadius: 1 }}>
                    <Chip label={ref.scenario} size="small" color="primary" sx={{ mb: 1 }} />
                    <Typography variant="body2" gutterBottom>
                      <strong>{ref.technique}</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      "{ref.phrase}"
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 6, p: 3, backgroundColor: 'error.light', borderRadius: 2, color: 'error.contrastText' }}>
        <Typography variant="h5" gutterBottom>
          Common Mistakes to Avoid
        </Typography>
        <Grid container spacing={2}>
          {mistakes.map((mistake, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ width: '100%' }}>
              <Box>
                <Typography variant="body2" gutterBottom>
                  <strong>❌ {mistake.mistake}</strong>
                </Typography>
                <Typography variant="body2">
                  ✅ {mistake.fix}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" sx={{ mt: 2, fontWeight: 500 }}>
          The goal is predictable, useful output that saves you time instead of creating more work.
        </Typography>
      </Box>
    </Container>
  );
}