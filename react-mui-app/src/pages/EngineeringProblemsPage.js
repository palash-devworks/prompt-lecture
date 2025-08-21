import React, { useState } from 'react';
import { Container, Typography, Box, Chip, Button, Collapse, TextField, MenuItem, FormControl, InputLabel, Select, Fab, LinearProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, IconButton } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import DescriptionIcon from '@mui/icons-material/Description';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const problems = [
  {
    id: 1,
    title: "Frontend: Create a Reusable React Component",
    description: "Generate a customizable Button component in React using Material-UI.",
    category: "Frontend Development",
    difficulty: "Beginner",
    language: "JavaScript",
    icon: CodeIcon,
    code: `// Desired features:
// - Should accept 'variant' (contained, outlined), 'color', and 'size' props.
// - Should handle 'onClick' events.
// - Should be easily themeable.`,
    technique: "Be Specific About the Task",
    basicPrompt: "Create a React button component.",
    improvedPrompt: "Generate a reusable React Button component using Material-UI. The component should accept 'variant', 'color', and 'size' props, and handle 'onClick' events. Include PropTypes for type checking and a simple example of how to use it."
  },
  {
    id: 2,
    title: "Backend: Design a REST API Endpoint",
    description: "Design a Node.js Express endpoint to fetch user data.",
    category: "Backend Development",
    difficulty: "Intermediate",
    language: "JavaScript",
    icon: CodeIcon,
    code: `// Requirements:
// - Endpoint: GET /api/users/:id
// - Should validate that the 'id' is a number.
// - Should handle cases where the user is not found.
// - Should return user data without the password hash.`,
    technique: "Inject Relevant Context",
    basicPrompt: "Write a Node.js endpoint to get a user.",
    improvedPrompt: "Design a Node.js Express endpoint for 'GET /api/users/:id'. It should use a middleware to validate that the 'id' parameter is an integer. The endpoint should fetch a user from a PostgreSQL database using 'pg-promise', handle 'user not found' errors with a 404 status, and return the user object excluding the 'password_hash' field."
  },
  {
    id: 3,
    title: "Debugging: Find Root Cause of a Memory Leak",
    description: "Analyze a code snippet to identify a potential memory leak in a Node.js application.",
    category: "Debugging",
    difficulty: "Advanced",
    language: "JavaScript",
    icon: BugReportIcon,
    code: `const express = require('express');
const app = express();
const eventEmitter = new (require('events'))();

app.get('/data', (req, res) => {
  eventEmitter.on('data', (data) => {
    // This listener is never removed
    res.write(data);
  });
});

// Data is emitted from another part of the application
setInterval(() => eventEmitter.emit('data', '...'), 1000);`,
    technique: "Chain of Thought",
    basicPrompt: "Does this code have a memory leak?",
    improvedPrompt: "Analyze this Node.js code for memory leaks. First, explain how the 'eventEmitter' is being used. Second, describe how a new event listener is added on each '/data' request. Third, explain why this leads to a memory leak. Finally, provide the corrected code that properly removes the listener after the request is finished."
  },
  {
    id: 4,
    title: "Test Cases: Generate Unit Tests for a Function",
    description: "Create a comprehensive set of unit tests for a utility function.",
    category: "Testing",
    difficulty: "Intermediate",
    language: "JavaScript",
    icon: CodeIcon,
    code: `export const slugify = (text) => {
  if (typeof text !== 'string') {
    return '';
  }
  return text
    .toLowerCase()
    .replace(/\\s+/g, '-')
    .replace(/[^\\w-]+/g, '');
};`,
    technique: "Give Examples",
    basicPrompt: "Write tests for the slugify function.",
    improvedPrompt: "Generate unit tests for the given 'slugify' function using Jest. Include test cases for: a standard string, a string with multiple spaces, a string with special characters, an empty string, and a non-string input like 'null' or a number. Here is an example of a test: expect(slugify('Hello World')).toBe('hello-world');"
  },
  {
    id: 5,
    title: "Spec Doc: Write a Technical Specification",
    description: "Outline a technical specification for a new feature.",
    category: "Documentation",
    difficulty: "Intermediate",
    language: "Text",
    icon: DescriptionIcon,
    context: "Feature: User Profile Image Upload. Requirements: Users can upload JPG/PNG images up to 5MB. Images should be resized to 200x200. Uploads should be stored in an AWS S3 bucket.",
    technique: "Break Down Complex Tasks",
    basicPrompt: "Write a spec for image uploads.",
    improvedPrompt: "Create a technical specification document for a 'User Profile Image Upload' feature. The spec should include: 1. API endpoint definition (method, path, request body, response). 2. Backend logic (validation, resizing using 'sharp', S3 upload). 3. Database schema changes (e.g., adding 'profileImageUrl' to the users table). 4. Frontend implementation details (React component with file input, progress bar, and error handling)."
  },
  {
    id: 6,
    title: "Code Generation: Generate a Microservice Boilerplate",
    description: "Generate the file and folder structure for a new microservice.",
    category: "Architecture",
    difficulty: "Intermediate",
    language: "Text",
    icon: ArchitectureIcon,
    context: "Microservice Name: 'notification-service'. Language: Node.js with Express. Features: Send emails via SendGrid, connect to a RabbitMQ queue for events.",
    technique: "Set Clear Guardrails",
    basicPrompt: "Create a Node.js microservice.",
    improvedPrompt: "Generate the file and folder structure for a Node.js Express microservice named 'notification-service'. The structure should include directories for 'config', 'controllers', 'services', and 'utils'. Include a 'package.json' with necessary dependencies like 'express', 'amqplib', and '@sendgrid/mail'. Do not write the full implementation, just the file structure and placeholder files."
  },
  {
    id: 7,
    title: "Code Review: Review a Pull Request",
    description: "Act as a senior engineer and review a code snippet for potential issues.",
    category: "Security",
    difficulty: "Advanced",
    language: "JavaScript",
    icon: SecurityIcon,
    code: `app.post('/submit', (req, res) => {
  const { username, password } = req.body;
  const query = 
    \`SELECT * FROM users WHERE username = '\${username}' AND password = '\${password}'\`;
  db.query(query, (err, result) => {
    if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Login failed');
    }
  });
});`,
    technique: "Set Role and Context",
    basicPrompt: "Find bugs in this code.",
    improvedPrompt: "You are a senior software engineer reviewing a pull request. Analyze this Node.js code snippet for security vulnerabilities, performance issues, and bad practices. Focus on how the database query is constructed and the lack of error handling. Provide a detailed review with suggestions for improvement."
  },
  {
    id: 8,
    title: "Creating README: Generate a Project README",
    description: "Create a README.md file for a new open-source project.",
    category: "Documentation",
    difficulty: "Beginner",
    language: "Markdown",
    icon: DescriptionIcon,
    context: "Project Name: 'react-modal-hook'. A React hook for managing modal dialogs. Features: Manages modal state, handles accessibility, and is highly customizable.",
    technique: "Give Examples",
    basicPrompt: "Write a README for my project.",
    improvedPrompt: "Generate a README.md for a new React hook library called 'react-modal-hook'. The README should include the following sections: 'Installation', 'Usage' (with a code example like 'const { isOpen, openModal, closeModal } = useModal();'), 'Features', and 'API'. The tone should be professional and welcoming to contributors."
  },
  {
    id: 9,
    title: "Project Structure: Design a Web App Architecture",
    description: "Design the folder structure for a new full-stack web application.",
    category: "Architecture",
    difficulty: "Intermediate",
    language: "Text",
    icon: ArchitectureIcon,
    context: "Application: A simple blog platform. Frontend: React. Backend: Node.js with Express. Database: MongoDB. The goal is a clean separation of concerns.",
    technique: "Set Clear Guardrails",
    basicPrompt: "What's a good folder structure for a web app?",
    improvedPrompt: "Design a folder structure for a full-stack MERN (MongoDB, Express, React, Node.js) application. The structure should have a root directory with separate 'client' and 'server' folders. Show the key subdirectories within each, such as 'client/src/components', 'client/src/pages', 'server/models', 'server/controllers', etc. Do not include individual file names, only the directory structure."
  },
  {
    id: 10,
    title: "Brainstorming: Improve Application Performance",
    description: "Brainstorm ideas for improving the performance of a web application.",
    category: "Performance",
    difficulty: "Advanced",
    language: "Text",
    icon: SpeedIcon,
    context: "The application is a large e-commerce site with slow page load times. The stack is React, Node.js, and PostgreSQL. Users are reporting that product pages are particularly slow.",
    technique: "Break Down Complex Tasks",
    basicPrompt: "How can I make my website faster?",
    improvedPrompt: "Brainstorm a list of performance optimization strategies for a slow e-commerce website built on React, Node.js, and PostgreSQL. Break down the suggestions into three categories: 1. Frontend optimizations (e.g., code splitting, image optimization, caching). 2. Backend optimizations (e.g., database query optimization, caching with Redis). 3. Infrastructure improvements (e.g., using a CDN, load balancing)."
  },
  {
    id: 11,
    title: "Data Visualization: Create Interactive Python Charts",
    description: "Generate a Python script to create interactive data visualizations for a dashboard.",
    category: "Data Visualization",
    difficulty: "Intermediate",
    language: "Python",
    icon: CodeIcon,
    code: `# Required features:
# - Load CSV data with sales metrics
# - Create bar chart showing monthly revenue
# - Add interactive filters for product categories
# - Export chart as HTML file`,
    technique: "Be Specific About the Task",
    basicPrompt: "Create a Python chart.",
    improvedPrompt: "Generate a Python script using Plotly to create an interactive bar chart from CSV sales data. The script should load 'sales_data.csv', create a monthly revenue chart with category filters, include hover tooltips showing exact values, and export as a standalone HTML file. Include error handling for missing data."
  },
  {
    id: 12,
    title: "API Development: Build FastAPI Endpoint",
    description: "Create a Python FastAPI endpoint for user authentication.",
    category: "Backend Development",
    difficulty: "Intermediate",
    language: "Python",
    icon: CodeIcon,
    code: `# Requirements:
# - POST /api/auth/login endpoint
# - Accept email and password in request body
# - Return JWT token on successful authentication
# - Hash password verification using bcrypt
# - Include rate limiting to prevent brute force attacks`,
    technique: "Inject Relevant Context",
    basicPrompt: "Write a FastAPI login endpoint.",
    improvedPrompt: "Create a FastAPI POST endpoint '/api/auth/login' for a fintech application. Use SQLAlchemy for database queries, bcrypt for password verification, and JWT for tokens. Include Pydantic models for request/response validation, rate limiting with slowapi, and proper error handling for invalid credentials. Follow security best practices for financial applications."
  },
  {
    id: 13,
    title: "Performance Debugging: Fix Slow Python Script",
    description: "Optimize a Python data processing script that's consuming too much memory.",
    category: "Performance",
    difficulty: "Advanced",
    language: "Python",
    icon: SpeedIcon,
    code: `import pandas as pd

def process_large_dataset(filename):
    # Load entire 5GB CSV into memory
    df = pd.read_csv(filename)
    
    # Apply transformations
    result = []
    for index, row in df.iterrows():
        processed_row = {
            'id': row['user_id'],
            'score': row['value'] * 2.5,
            'category': row['type'].upper()
        }
        result.append(processed_row)
    
    return result`,
    technique: "Chain of Thought",
    basicPrompt: "This Python script is slow.",
    improvedPrompt: "Analyze this Python data processing script step by step: 1) Identify memory and performance bottlenecks in the current approach. 2) Explain why loading 5GB into memory and using iterrows() is problematic. 3) Provide an optimized version using chunking, vectorized operations, and memory-efficient pandas methods. Include memory usage comparisons."
  },
  {
    id: 14,
    title: "Testing: Write Comprehensive Python Tests",
    description: "Create unit tests for a Python utility class with edge cases.",
    category: "Testing",
    difficulty: "Intermediate",
    language: "Python",
    icon: CodeIcon,
    code: `class EmailValidator:
    def __init__(self, allowed_domains=None):
        self.allowed_domains = allowed_domains or []
    
    def is_valid(self, email):
        if not email or '@' not in email:
            return False
        
        local, domain = email.rsplit('@', 1)
        
        if self.allowed_domains and domain not in self.allowed_domains:
            return False
            
        return len(local) > 0 and '.' in domain`,
    technique: "Give Examples",
    basicPrompt: "Write tests for EmailValidator.",
    improvedPrompt: "Create comprehensive pytest test cases for the EmailValidator class. Include tests for: valid emails, invalid formats, empty strings, allowed domains filtering, edge cases like multiple @ symbols, and boundary conditions. Here's an example test structure: 'def test_valid_email(): validator = EmailValidator() assert validator.is_valid('user@example.com') == True'. Use fixtures and parametrized tests."
  },
  {
    id: 15,
    title: "Documentation: Python Library API Specification",
    description: "Write technical documentation for a new Python machine learning library.",
    category: "Documentation",
    difficulty: "Intermediate",
    language: "Python",
    icon: DescriptionIcon,
    context: "Library Name: 'smartpredict'. Purpose: Simplified ML model training and prediction. Features: Auto feature selection, model comparison, and deployment helpers. Target audience: Data scientists and ML engineers.",
    technique: "Break Down Complex Tasks",
    basicPrompt: "Document a Python ML library.",
    improvedPrompt: "Create API documentation for 'smartpredict' Python library. Structure it in sections: 1. Installation and setup (pip install, requirements). 2. Quick start guide (5-line example showing model training). 3. Core classes (AutoMLModel, FeatureSelector, ModelComparator) with method signatures and parameters. 4. Advanced usage patterns (custom pipelines, hyperparameter tuning). Use Google-style docstrings and include code examples."
  },
  {
    id: 16,
    title: "Project Setup: Python Package Structure",
    description: "Design the folder structure for a new Python data analytics package.",
    category: "Architecture",
    difficulty: "Intermediate",
    language: "Text",
    icon: ArchitectureIcon,
    context: "Package Name: 'datainsights'. Features: Data cleaning, statistical analysis, and report generation. Will be published to PyPI. Needs CLI interface and web dashboard.",
    technique: "Set Clear Guardrails",
    basicPrompt: "Create a Python package structure.",
    improvedPrompt: "Design a Python package structure for 'datainsights' following PEP 518 standards. Include directories for source code, tests, documentation, and CLI. Show the file layout but don't include implementation details, must be PyPI-ready with proper setup.py/pyproject.toml, include type hints structure, and separate web dashboard as optional extra."
  },
  {
    id: 17,
    title: "Security Review: Analyze Python Code Vulnerabilities",
    description: "Review a Python web application for security issues.",
    category: "Security",
    difficulty: "Advanced",
    language: "Python",
    icon: SecurityIcon,
    code: `from flask import Flask, request, render_template_string
import subprocess
import pickle

app = Flask(__name__)

@app.route('/execute')
def execute_command():
    cmd = request.args.get('cmd')
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout

@app.route('/load_data')
def load_data():
    data = request.files['data'].read()
    obj = pickle.loads(data)
    return f"Loaded: {obj}"

@app.route('/template')
def render_template():
    user_input = request.args.get('content', '')
    template = f"<h1>Hello {user_input}</h1>"
    return render_template_string(template)`,
    technique: "Set Role and Context",
    basicPrompt: "Find security issues in this code.",
    improvedPrompt: "You are a cybersecurity engineer auditing a Python Flask application for a healthcare company handling sensitive patient data. Identify security vulnerabilities focusing on command injection, unsafe deserialization, and template injection attacks. Provide specific attack scenarios and secure code alternatives following OWASP guidelines for healthcare applications."
  },
  {
    id: 18,
    title: "Documentation: Python Package README",
    description: "Create a README.md for a new open-source Python package.",
    category: "Documentation",
    difficulty: "Beginner",
    language: "Markdown",
    icon: DescriptionIcon,
    context: "Package Name: 'async-cache-manager'. A Python library for managing distributed caches with async/await support. Features: Redis integration, automatic invalidation, and decorator-based caching.",
    technique: "Give Examples",
    basicPrompt: "Write a README for my Python package.",
    improvedPrompt: "Generate a README.md for the 'async-cache-manager' Python package. Include sections: 'Installation' (pip install), 'Quick Start' (code example like '@cache_manager.cached(ttl=300) async def get_user_data(user_id): ...'), 'Features', 'API Reference', and 'Contributing Guidelines'. The tone should be professional and include badges for PyPI version, Python compatibility, and test coverage."
  },
  {
    id: 19,
    title: "Architecture: Design Python Microservices System",
    description: "Design the architecture for a Python-based microservices application.",
    category: "Architecture",
    difficulty: "Advanced",
    language: "Text",
    icon: ArchitectureIcon,
    context: "Application: Real-time analytics platform. Services needed: Data ingestion (Kafka), processing (ML models), storage (PostgreSQL/Redis), and API (FastAPI). Expected load: 10k requests/second.",
    technique: "Set Clear Guardrails",
    basicPrompt: "Design Python microservices architecture.",
    improvedPrompt: "Design a Python microservices architecture for real-time analytics handling 10k req/s. Show service boundaries and communication patterns but don't include deployment details, must use async Python frameworks, prioritize horizontal scalability over complex patterns, and separate ML model serving from data processing services."
  },
  {
    id: 20,
    title: "Optimization: Improve Python Application Performance",
    description: "Optimize a slow Python data pipeline for better throughput.",
    category: "Performance",
    difficulty: "Advanced",
    language: "Python",
    icon: SpeedIcon,
    context: "Pipeline processes financial transactions: reads from PostgreSQL, applies ML fraud detection, enriches with external APIs, and writes to data warehouse. Currently processes 1k transactions/minute, needs to reach 10k/minute.",
    technique: "Break Down Complex Tasks",
    basicPrompt: "Make my Python pipeline faster.",
    improvedPrompt: "Optimize a Python financial transaction pipeline from 1k to 10k transactions/minute. Break into steps: Step 1: Database optimization (connection pooling, query batching, async database operations). Step 2: ML model optimization (model caching, batch prediction, GPU acceleration). Step 3: API call efficiency (async requests, connection reuse, rate limiting). Step 4: Parallelization strategies (multiprocessing, asyncio, distributed computing with Celery)."
  }
];

const techniqueColors = {
  "Be Specific About the Task": "primary",
  "Chain of Thought": "secondary",
  "Inject Relevant Context": "success",
  "Set Role and Context": "warning",
  "Give Examples": "info",
  "Set Clear Guardrails": "error",
  "Break Down Complex Tasks": "default"
};

// Category definitions with stats
const categories = [
  { name: 'All Categories', count: problems.length, color: 'primary' },
  { name: 'Frontend Development', count: problems.filter(p => p.category === 'Frontend Development').length, color: 'info' },
  { name: 'Backend Development', count: problems.filter(p => p.category === 'Backend Development').length, color: 'success' },
  { name: 'Debugging', count: problems.filter(p => p.category === 'Debugging').length, color: 'error' },
  { name: 'Testing', count: problems.filter(p => p.category === 'Testing').length, color: 'warning' },
  { name: 'Documentation', count: problems.filter(p => p.category === 'Documentation').length, color: 'secondary' },
  { name: 'Architecture', count: problems.filter(p => p.category === 'Architecture').length, color: 'primary' },
  { name: 'Security', count: problems.filter(p => p.category === 'Security').length, color: 'error' },
  { name: 'Performance', count: problems.filter(p => p.category === 'Performance').length, color: 'warning' },
  { name: 'Data Visualization', count: problems.filter(p => p.category === 'Data Visualization').length, color: 'info' }
];

const difficultyColors = {
  'Beginner': 'success',
  'Intermediate': 'warning', 
  'Advanced': 'error'
};

const languageColors = {
  'JavaScript': '#f7df1e',
  'Python': '#3776ab',
  'Text': '#6c757d',
  'Markdown': '#083fa1'
};

export default function EngineeringProblemsPage() {
  const [selectedProblem, setSelectedProblem] = useState(problems[0]);
  const [showSolution, setShowSolution] = useState(false);
  const [completedProblems, setCompletedProblems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter problems based on search and filters
  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.technique.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || problem.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
    const matchesLanguage = selectedLanguage === 'All' || problem.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesLanguage;
  });

  // Scroll handling for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
    setShowSolution(false); // Reset solution visibility when selecting new problem
  };

  const toggleSolution = () => {
    setShowSolution(prev => !prev);
  };

  const toggleCompletion = (problemId) => {
    setCompletedProblems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(problemId)) {
        newSet.delete(problemId);
      } else {
        newSet.add(problemId);
      }
      return newSet;
    });
  };

  const progressPercentage = (completedProblems.size / problems.length) * 100;

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
    a.download = `problem-${problem.id}-${problem.title.toLowerCase().replace(/\\s+/g, '-')}.html`;
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
    <title>All Engineering Practice Problems</title>
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
    <h1>Engineering Practice Problems: All 20 Challenges</h1>
    
    <div class="intro">
        <p><strong>LLM Fundamentals and Prompt Engineering Course Materials</strong></p>
        <p>Time limit: 30 minutes total (~1.5 minutes per problem) | Tool: Use Gemini Flash for all problems</p>
        <p>Goal: Master structured prompting to get production-ready code, actionable solutions, and engineering insights that save development time</p>
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
    a.download = 'all-engineering-practice-problems.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 2, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box sx={{ mb: 2, flexShrink: 0 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
          Engineering Practice Problems: 20 Challenges
        </Typography>
        
        {/* Progress Tracking */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Progress: {completedProblems.size}/{problems.length} completed ({Math.round(progressPercentage)}%)
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progressPercentage} 
            sx={{ height: 6, borderRadius: 1, backgroundColor: 'grey.200' }}
          />
        </Box>
        
        <Box sx={{ p: 1.5, backgroundColor: 'primary.light', borderRadius: 1, color: 'primary.contrastText' }}>
          <Typography variant="body2" component="div">
            <strong>Time:</strong> 30 min total | <strong>Tool:</strong> Gemini Flash | <strong>Goal:</strong> Master structured prompting
          </Typography>
        </Box>
      </Box>

      {/* Split Layout */}
      <Box sx={{ display: 'flex', gap: 3, height: '75vh' }}>
        {/* Left Panel - Problem Index */}
        <Box sx={{ width: { xs: '100%', md: '350px' }, minWidth: '300px' }}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Search and Filters */}
            <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Problems Index</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    size="small" 
                    onClick={() => setShowFilters(!showFilters)}
                    color={showFilters ? 'primary' : 'default'}
                  >
                    <FilterListIcon />
                  </IconButton>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<DownloadIcon />}
                    onClick={downloadAllProblemsHTML}
                    sx={{ textTransform: 'none' }}
                  >
                    Download
                  </Button>
                </Box>
              </Box>
              
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                }}
                sx={{ mb: showFilters ? 2 : 0 }}
              />
              
              <Collapse in={showFilters}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Category</InputLabel>
                    <Select
                      value={selectedCategory}
                      label="Category"
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map((cat) => (
                        <MenuItem key={cat.name} value={cat.name}>
                          {cat.name} ({cat.count})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Difficulty</InputLabel>
                      <Select
                        value={selectedDifficulty}
                        label="Difficulty"
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                      >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Beginner">Beginner</MenuItem>
                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                        <MenuItem value="Advanced">Advanced</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                      <InputLabel>Language</InputLabel>
                      <Select
                        value={selectedLanguage}
                        label="Language"
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                      >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="JavaScript">JavaScript</MenuItem>
                        <MenuItem value="Python">Python</MenuItem>
                        <MenuItem value="Text">Text</MenuItem>
                        <MenuItem value="Markdown">Markdown</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  Showing {filteredProblems.length} of {problems.length} problems
                </Typography>
              </Collapse>
            </Box>
            
            {/* Problem List */}
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
              <List dense>
                {filteredProblems.map((problem, index) => (
                  <ListItem key={problem.id} disablePadding>
                    <ListItemButton
                      selected={selectedProblem.id === problem.id}
                      onClick={() => handleProblemSelect(problem)}
                      sx={{ 
                        py: 1.5,
                        borderLeft: selectedProblem.id === problem.id ? '4px solid' : '4px solid transparent',
                        borderColor: 'primary.main',
                        '&.Mui-selected': {
                          backgroundColor: 'primary.light'
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {completedProblems.has(problem.id) ? (
                          <CheckCircleIcon color="success" />
                        ) : (
                          <RadioButtonUncheckedIcon color="action" />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Chip 
                              label={`#${problem.id}`} 
                              size="small" 
                              color="primary"
                              variant="outlined"
                            />
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {problem.title.replace(/^[^:]+:\s*/, '')}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5, flexWrap: 'wrap' }}>
                            <Chip 
                              label={problem.difficulty} 
                              size="small" 
                              color={difficultyColors[problem.difficulty]}
                              variant="outlined"
                              sx={{ fontSize: '0.65rem', height: '20px' }}
                            />
                            <Chip 
                              label={problem.language} 
                              size="small" 
                              variant="outlined"
                              sx={{ 
                                fontSize: '0.65rem', 
                                height: '20px',
                                borderColor: languageColors[problem.language],
                                color: languageColors[problem.language]
                              }}
                            />
                          </Box>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              
              {filteredProblems.length === 0 && (
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    No problems found
                  </Typography>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>

        {/* Right Panel - Problem Details */}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Problem Header */}
            <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <selectedProblem.icon sx={{ color: 'primary.main', fontSize: 32 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {selectedProblem.title}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip 
                      label={selectedProblem.category} 
                      size="small" 
                      variant="outlined"
                      color="primary"
                    />
                    <Chip 
                      label={selectedProblem.difficulty} 
                      size="small" 
                      color={difficultyColors[selectedProblem.difficulty]}
                      variant="outlined"
                    />
                    <Chip 
                      label={selectedProblem.language} 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        borderColor: languageColors[selectedProblem.language],
                        color: languageColors[selectedProblem.language]
                      }}
                    />
                    <Chip 
                      label={selectedProblem.technique} 
                      size="small" 
                      color={techniqueColors[selectedProblem.technique] || 'default'}
                      variant="outlined"
                    />
                  </Box>
                </Box>
                <Button
                  variant={completedProblems.has(selectedProblem.id) ? "contained" : "outlined"}
                  color={completedProblems.has(selectedProblem.id) ? "success" : "primary"}
                  onClick={() => toggleCompletion(selectedProblem.id)}
                  sx={{ textTransform: 'none' }}
                >
                  {completedProblems.has(selectedProblem.id) ? '✓ Completed' : 'Mark Complete'}
                </Button>
              </Box>
            </Box>
            
            {/* Problem Content */}
            <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                <strong>Problem:</strong> {selectedProblem.description}
              </Typography>
              
              {selectedProblem.context && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Context:</strong>
                  </Typography>
                  <Typography variant="body1">
                    {selectedProblem.context}
                  </Typography>
                </Box>
              )}
              
              {selectedProblem.code && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Code:</strong>
                  </Typography>
                  <SyntaxHighlighter 
                    language={selectedProblem.language.toLowerCase()} 
                    style={tomorrow}
                    customStyle={{
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  >
                    {selectedProblem.code}
                  </SyntaxHighlighter>
                </Box>
              )}

              <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<LightbulbIcon />}
                  onClick={toggleSolution}
                  endIcon={showSolution ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  {showSolution ? 'Hide Example Prompts' : 'Show Example Prompts'}
                </Button>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  onClick={() => downloadProblemHTML(selectedProblem)}
                  sx={{ textTransform: 'none' }}
                >
                  Download Problem
                </Button>
              </Box>

              <Collapse in={showSolution}>
                <Box sx={{ p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Example Prompts</Typography>
                    <Chip 
                      label={selectedProblem.technique} 
                      size="small" 
                      color={techniqueColors[selectedProblem.technique] || 'default'}
                      variant="outlined"
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ p: 3, backgroundColor: 'error.light', borderRadius: 2, height: '100%' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'error.contrastText' }} gutterBottom>
                          ❌ Basic Prompt (Vague)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'error.contrastText', fontStyle: 'italic' }}>
                          "{selectedProblem.basicPrompt}"
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ p: 3, backgroundColor: 'success.light', borderRadius: 2, height: '100%' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.contrastText' }} gutterBottom>
                          ✅ Improved Prompt (Structured)
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'success.contrastText', fontStyle: 'italic' }}>
                          "{selectedProblem.improvedPrompt}"
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Collapse>
              
              {/* Evaluation Criteria */}
              <Box sx={{ mt: 4, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Evaluation Criteria
                </Typography>
                <Typography variant="body2" paragraph>
                  After completing all problems, compare your results:
                </Typography>
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  <Typography component="li" variant="body2"><strong>Specificity:</strong> Are responses more actionable and detailed?</Typography>
                  <Typography component="li" variant="body2"><strong>Relevance:</strong> Do answers fit your exact engineering context?</Typography>
                  <Typography component="li" variant="body2"><strong>Completeness:</strong> Do you get all information needed to implement?</Typography>
                  <Typography component="li" variant="body2"><strong>Code Quality:</strong> Are code suggestions production-ready?</Typography>
                  <Typography component="li" variant="body2"><strong>Time Efficiency:</strong> Do better prompts save you follow-up questions?</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Back to Top Button */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          opacity: showBackToTop ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: showBackToTop ? 'auto' : 'none'
        }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Container>
  );
}
