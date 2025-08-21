import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Chip, Button, Grid, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DownloadIcon from '@mui/icons-material/Download';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const problems = [
  {
    id: 1,
    title: "Debug Async Function",
    description: "Fix a Node.js function that's causing unhandled promise rejections",
    code: `async function createUser(userData) {
    const user = await db.users.create(userData);
    const emailSent = sendWelcomeEmail(user.email);
    return { success: true, userId: user.id };
}`,
    language: "javascript",
    technique: "Be Specific About the Task",
    basicPrompt: "Fix this code",
    improvedPrompt: "This Node.js async function should create a user and send a welcome email, but it's throwing 'UnhandledPromiseRejectionWarning' in production. Find the missing await/error handling that's causing the crash."
  },
  {
    id: 2,
    title: "Fix React Hook",
    description: "Resolve infinite re-rendering in a data fetching component",
    code: `function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, [user]);
    
    return <div>{user?.name}</div>;
}`,
    language: "javascript",
    technique: "Chain of Thought",
    basicPrompt: "This component has infinite re-renders",
    improvedPrompt: "Debug this React infinite re-render step by step: 1) Identify what's triggering the useEffect 2) Explain why it creates a loop 3) Show the corrected dependency array with reasoning."
  },
  {
    id: 3,
    title: "Optimize Slow Query",
    description: "Improve performance of a user dashboard query",
    code: `-- Query takes 8+ seconds with 500k users
SELECT u.name, COUNT(o.id) as order_count, SUM(o.total) as total_spent
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id 
WHERE u.created_at > '2023-01-01'
GROUP BY u.id, u.name
ORDER BY total_spent DESC;

-- Tables: users (500k rows), orders (2M rows)`,
    language: "sql",
    technique: "Inject Relevant Context",
    basicPrompt: "Make this query faster",
    improvedPrompt: "Given a PostgreSQL database with 500k users and 2M orders on AWS RDS, optimize this analytics query that takes 8+ seconds. Consider indexing strategy and query restructuring for read-heavy dashboard use."
  },
  {
    id: 4,
    title: "Review Security Code",
    description: "Check authentication middleware for security vulnerabilities",
    code: `function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}`,
    language: "javascript",
    technique: "Set Role and Context",
    basicPrompt: "Review this code for security issues",
    improvedPrompt: "You are a security engineer reviewing this Node.js JWT middleware for a fintech application. Identify security vulnerabilities focusing on token handling, error cases, and potential attack vectors."
  },
  {
    id: 5,
    title: "Generate API Validation",
    description: "Create input validation for a new endpoint",
    code: `// Existing pattern for login validation
function validateLogin(req, res, next) {
    const errors = [];
    if (!req.body.email || !/\\S+@\\S+\\.\\S+/.test(req.body.email)) {
        errors.push('Valid email required');
    }
    if (!req.body.password || req.body.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    next();
}`,
    language: "javascript",
    technique: "Give Examples",
    basicPrompt: "Create validation for user profile endpoint",
    improvedPrompt: "Here's our existing validation pattern for login. Create validation for user profile update endpoint following the same error handling format, return structure, and validation style. Fields: name (required, 2-50 chars), bio (optional, max 200 chars), age (optional, 13-120)."
  },
  {
    id: 6,
    title: "Write API Documentation",
    description: "Document a new REST endpoint for the team",
    code: `// POST /api/orders - Create new order
// Body: { items: [{productId, quantity}], shippingAddress }
// Returns: { orderId, total, estimatedDelivery } or error`,
    language: "javascript",
    technique: "Set Clear Boundaries",
    basicPrompt: "Document this API endpoint",
    improvedPrompt: "Write API documentation for this order creation endpoint but focus only on request/response format and example payloads, don't include implementation details, must follow OpenAPI 3.0 format for our existing docs."
  },
  {
    id: 7,
    title: "Research Technology Comparison",
    description: "Choose between Redis and Memcached for session storage",
    context: "Your team is building a Node.js web application expecting 50k daily active users. Currently using in-memory sessions but need distributed storage for horizontal scaling. Budget is limited and team has minimal DevOps experience.",
    language: "text",
    technique: "Break Down Complex Tasks",
    basicPrompt: "Should we use Redis or Memcached?",
    improvedPrompt: "Compare Redis vs Memcached for session storage: Step 1: Feature comparison for our use case (50k users, Node.js, limited DevOps). Step 2: Cost analysis (hosting + maintenance). Step 3: Implementation complexity. Step 4: Make specific recommendation with reasoning."
  },
  {
    id: 8,
    title: "Create Technical Design Doc",
    description: "Outline architecture for a real-time chat feature",
    context: "Adding chat to an existing React/Node.js e-commerce platform. Need to support customer service conversations between users and support agents. Current infrastructure: AWS EC2, PostgreSQL, Redis for caching.",
    language: "text",
    technique: "Break Down Complex Tasks",
    basicPrompt: "Design a chat system",
    improvedPrompt: "Create technical design outline for real-time chat: Step 1: Choose real-time technology (WebSockets vs Server-Sent Events vs polling). Step 2: Database schema for messages and conversations. Step 3: Integration points with existing user system. Step 4: Scaling considerations for 10k concurrent chats."
  },
  {
    id: 9,
    title: "Choose Database Solution",
    description: "Select database for a new analytics dashboard feature",
    context: "Building user behavior analytics dashboard showing page views, click patterns, and conversion funnels. Expecting 1M events per day, read-heavy workload with complex aggregations. Current stack uses PostgreSQL for transactional data.",
    language: "text",
    technique: "Set Role and Context + Set Clear Boundaries",
    basicPrompt: "What database should I use for analytics?",
    improvedPrompt: "You are a data engineer choosing analytics database for 1M events/day, read-heavy dashboard with complex aggregations. Compare options but don't suggest complete infrastructure overhaul, must integrate with existing PostgreSQL system, prioritize query performance over write speed."
  },
  {
    id: 10,
    title: "Design Error Handling Strategy",
    description: "Create consistent error handling across microservices",
    context: "Team has 5 Node.js microservices (user management, orders, inventory, payments, notifications) with inconsistent error responses causing frontend integration issues. Some return strings, others objects, different status codes for similar errors.",
    code: `// Current user service error format example:
{error: 'USER_NOT_FOUND', message: 'User does not exist', code: 404}`,
    language: "javascript",
    technique: "Give Examples + Set Clear Boundaries",
    basicPrompt: "Standardize error handling across services",
    improvedPrompt: "Here's our current user service error format: `{error: 'USER_NOT_FOUND', message: 'User does not exist', code: 404}`. Design standardized error handling for all 5 microservices following this structure but don't change existing API contracts, must be backward compatible, include error classification system."
  }
];

const techniqueColors = {
  "Be Specific About the Task": "primary",
  "Chain of Thought": "secondary",
  "Inject Relevant Context": "success",
  "Set Role and Context": "warning",
  "Give Examples": "info",
  "Set Clear Boundaries": "error",
  "Break Down Complex Tasks": "default",
  "Set Role and Context + Set Clear Boundaries": "warning",
  "Give Examples + Set Clear Boundaries": "info"
};

export default function ProblemsPage() {
  const [expanded, setExpanded] = useState(false);
  const [showSolutions, setShowSolutions] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleSolution = (problemId) => {
    setShowSolutions(prev => ({
      ...prev,
      [problemId]: !prev[problemId]
    }));
  };

  const downloadProblemHTML = (problem) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Problem #${problem.id}: ${problem.title}</title>
    <style>
        body { font-family: 'Roboto', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; color: #333; }
        h1 { color: #1976d2; border-bottom: 2px solid #1976d2; padding-bottom: 10px; }
        .problem-id { background: #1976d2; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .section { margin: 20px 0; }
        .context { background: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3; }
        .code-block { background: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; }
        .keyword { color: #63b3ed; }
        .string { color: #68d391; }
        .comment { color: #a0aec0; font-style: italic; }
    </style>
</head>
<body>
    <h1><span class="problem-id">#${problem.id}</span> ${problem.title}</h1>
    
    <div class="section">
        <h2>Problem Description</h2>
        <p>${problem.description}</p>
    </div>
    
    ${problem.context ? `
    <div class="section">
        <h2>Context</h2>
        <div class="context">${problem.context}</div>
    </div>
    ` : ''}
    
    ${problem.code ? `
    <div class="section">
        <h2>Code</h2>
        <pre class="code-block"><code>${problem.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
    </div>
    ` : ''}
    
    <div class="section">
        <p><em>Generated from LLM Fundamentals and Prompt Engineering Course Materials</em></p>
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `problem-${problem.id}-${problem.title.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllProblemsHTML = () => {
    const tableOfContents = problems.map(problem => 
      `<li><a href="#problem-${problem.id}">#${problem.id} ${problem.title}</a></li>`
    ).join('');

    const problemSections = problems.map(problem => `
      <div class="problem-section" id="problem-${problem.id}">
        <h2><span class="problem-id">#${problem.id}</span> ${problem.title}</h2>
        
        <div class="section">
          <h3>Problem Description</h3>
          <p>${problem.description}</p>
        </div>
        
        ${problem.context ? `
        <div class="section">
          <h3>Context</h3>
          <div class="context">${problem.context}</div>
        </div>
        ` : ''}
        
        ${problem.code ? `
        <div class="section">
          <h3>Code</h3>
          <pre class="code-block"><code>${problem.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
        ` : ''}
      </div>
    `).join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Engineering Prompting Problems</title>
    <style>
        body { font-family: 'Roboto', Arial, sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px; line-height: 1.6; color: #333; }
        h1 { color: #1976d2; border-bottom: 3px solid #1976d2; padding-bottom: 15px; text-align: center; }
        h2 { color: #1976d2; border-bottom: 2px solid #1976d2; padding-bottom: 10px; margin-top: 40px; }
        h3 { color: #333; margin-top: 25px; }
        .problem-id { background: #1976d2; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .section { margin: 20px 0; }
        .context { background: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3; }
        .code-block { background: #2d3748; color: #e2e8f0; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; }
        .problem-section { margin-bottom: 50px; padding-bottom: 30px; border-bottom: 1px solid #e0e0e0; }
        .toc { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0; }
        .toc ul { list-style-type: none; padding: 0; }
        .toc li { margin: 8px 0; }
        .toc a { text-decoration: none; color: #1976d2; }
        .toc a:hover { text-decoration: underline; }
        .intro { text-align: center; margin: 30px 0; background: #e3f2fd; padding: 20px; border-radius: 8px; }
    </style>
</head>
<body>
    <h1>Engineering Prompting Exercise: All 10 Problems</h1>
    
    <div class="intro">
        <p><strong>LLM Fundamentals and Prompt Engineering Course Materials</strong></p>
        <p>Time limit: 15 minutes total (~1.5 minutes per problem) | Tool: Use Gemini Flash for all problems</p>
        <p>Goal: Apply the 7 prompting techniques to get better, more useful responses</p>
    </div>
    
    <div class="toc">
        <h2>Table of Contents</h2>
        <ul>
            ${tableOfContents}
        </ul>
    </div>
    
    ${problemSections}
    
    <div class="section">
        <p><em>Generated from LLM Fundamentals and Prompt Engineering Course Materials</em></p>
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'all-engineering-problems.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        Engineering Prompting Exercise: 10 Problems
      </Typography>
      
      <Box sx={{ mb: 4, p: 3, backgroundColor: 'primary.light', borderRadius: 2, color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom>Instructions</Typography>
        <Typography variant="body1" component="div">
          <strong>Time limit:</strong> 15 minutes total (~1.5 minutes per problem)<br/>
          <strong>Tool:</strong> Use Gemini Flash for all problems<br/>
          <strong>Goal:</strong> Apply the 7 prompting techniques to get better, more useful responses
        </Typography>
      </Box>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          onClick={downloadAllProblemsHTML}
          sx={{ textTransform: 'none', fontSize: '1.1rem', py: 1.5, px: 3 }}
        >
          Download All Problems
        </Button>
      </Box>

      {problems.map((problem) => (
        <Accordion 
          key={problem.id} 
          expanded={expanded === `panel${problem.id}`}
          onChange={handleChange(`panel${problem.id}`)}
          sx={{ mb: 2, border: '1px solid', borderColor: 'grey.200' }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: 'grey.50' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Chip 
                label={`#${problem.id}`} 
                size="small" 
                color="primary" 
              />
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {problem.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3 }}>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              <strong>Problem:</strong> {problem.description}
            </Typography>
            
            {problem.context && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Context:</strong>
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {problem.context}
                </Typography>
              </Box>
            )}
            
            {problem.code && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Code:</strong>
                </Typography>
                <SyntaxHighlighter 
                  language={problem.language} 
                  style={tomorrow}
                  customStyle={{
                    borderRadius: '8px',
                    fontSize: '14px'
                  }}
                >
                  {problem.code}
                </SyntaxHighlighter>
              </Box>
            )}

            <Box sx={{ mt: 3, mb: 2, display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<LightbulbIcon />}
                onClick={() => toggleSolution(problem.id)}
                sx={{ textTransform: 'none' }}
              >
                {showSolutions[problem.id] ? 'Hide Example Solution' : 'Show Example Solution'}
              </Button>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={() => downloadProblemHTML(problem)}
                sx={{ textTransform: 'none' }}
              >
                Download Problem
              </Button>
            </Box>

            <Collapse in={showSolutions[problem.id]}>
              <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.50', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Guided Solution</Typography>
                  <Chip 
                    label={problem.technique} 
                    size="small" 
                    color={techniqueColors[problem.technique] || 'default'}
                    variant="outlined"
                  />
                </Box>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, backgroundColor: 'error.light', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'error.contrastText' }} gutterBottom>
                        ❌ Basic Prompt (Vague)
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'error.contrastText', fontStyle: 'italic' }}>
                        "{problem.basicPrompt}"
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 2, backgroundColor: 'success.light', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.contrastText' }} gutterBottom>
                        ✅ Improved Prompt (Structured)
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'success.contrastText', fontStyle: 'italic' }}>
                        "{problem.improvedPrompt}"
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  <strong>Technique Applied:</strong> {problem.technique}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Notice how the improved prompt provides specific context, clear expectations, and actionable constraints that guide the AI toward more useful responses.
                </Typography>
              </Box>
            </Collapse>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Evaluation Criteria
        </Typography>
        <Typography variant="body1" paragraph>
          After completing all problems, compare your results:
        </Typography>
        <Box component="ol" sx={{ pl: 3 }}>
          <Typography component="li" variant="body1"><strong>Specificity:</strong> Are responses more actionable and detailed?</Typography>
          <Typography component="li" variant="body1"><strong>Relevance:</strong> Do answers fit your exact engineering context?</Typography>
          <Typography component="li" variant="body1"><strong>Completeness:</strong> Do you get all information needed to implement?</Typography>
          <Typography component="li" variant="body1"><strong>Code Quality:</strong> Are code suggestions production-ready?</Typography>
          <Typography component="li" variant="body1"><strong>Time Efficiency:</strong> Do better prompts save you follow-up questions?</Typography>
        </Box>
        <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
          The goal is to see significant improvement in AI output quality using structured prompting techniques.
        </Typography>
      </Box>
    </Container>
  );
}