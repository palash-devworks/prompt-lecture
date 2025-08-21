# Prompting Techniques for Engineers

## Why This Matters
You're already using AI tools. The difference between getting garbage output and useful code is knowing how to ask. These techniques turn AI from "sometimes helpful" to "reliably useful."

---

## Core Principles

### **1. Treat AI Like a Very Enthusiastic Intern**
Give context, be specific about what you want, and set boundaries. Don't assume it knows your codebase or constraints.

### **2. Structure Your Requests**
Use clear sections, examples, and constraints. Think: "If I handed this to a new teammate, would they understand exactly what to do?"

### **3. Context + Examples + Boundaries = Success**
The AI needs your tech stack, coding standards, desired output format, and explicit constraints. Feed it the right information in the right structure.

---

## 10 Essential Techniques

### **1. Be Specific About the Task**
**Template**: "[Specific problem description] with [expected behavior] but [actual behavior]. [Action needed]."
**Example**: "This Node.js authentication middleware should redirect to login page for invalid tokens, but it's throwing 500 errors. Find and fix the bug."
**When to use**: Debugging, code reviews, specific implementation tasks

### **2. Set Role and Context**
**Template**: "You are a [role] working on [context]. [Task] considering [constraints]."
**Example**: "You are a backend engineer at a fintech startup. Review this payment processing code for security issues considering PCI compliance requirements."
**When to use**: Code reviews, architecture decisions, domain-specific tasks

### **3. Chain of Thought**
**Template**: "Analyze this step by step: 1) [step 1] 2) [step 2] 3) [step 3]. Show your reasoning for each step."
**Example**: "Debug this slow API endpoint step by step: 1) Identify bottlenecks 2) Explain root causes 3) Suggest optimizations with code examples. Show your analysis for each step."
**When to use**: Complex debugging, performance analysis, system design

### **4. Few-Shot Learning**
**Template**: "Here are examples of [pattern]: [Example 1: input → output], [Example 2: input → output]. Now apply this pattern to: [new task]"
**Example**: "Here are our API error formats: [401: {error: 'unauthorized', code: 'AUTH_001'}], [404: {error: 'not_found', code: 'RES_001'}]. Now create an error response for rate limiting."
**When to use**: Code generation, maintaining patterns, unfamiliar tasks

### **5. Progressive Refinement**
**Template**: "Start with [basic approach], then improve by adding [enhancement 1], then [enhancement 2]. Show each iteration."
**Example**: "Design a user authentication system: Start with basic login/logout, then add JWT tokens, then add refresh token rotation. Show code for each iteration."
**When to use**: Feature development, iterative improvements, learning new concepts

### **6. Break Down Complex Tasks**
**Template**: "Do this in steps: Step 1: [specific task] Step 2: [specific task] Step 3: [specific task]. For each step, show [expected output]."
**Example**: "Design a caching layer: Step 1: Identify cacheable data (show data access patterns) Step 2: Choose technology (compare Redis vs Memcached) Step 3: Design invalidation (show code examples)."
**When to use**: System design, feature planning, complex implementations

### **7. Meta Prompting**
**Template**: "Before solving [problem], first: 1) Identify what type of problem this is 2) Choose the best approach 3) Execute the solution."
**Example**: "Before optimizing this database query, first: 1) Identify if it's an indexing, query structure, or data volume problem 2) Choose between query rewrite, index creation, or caching 3) Implement the chosen solution."
**When to use**: Unfamiliar problems, systematic problem-solving, learning

### **8. Self-Consistency**
**Template**: "Solve [problem] using 3 different approaches: 1) [approach 1] 2) [approach 2] 3) [approach 3]. Compare results and recommend the best solution."
**Example**: "Debug this memory leak using: 1) Static analysis with ESLint 2) Runtime profiling with Node.js inspector 3) Code review checklist. Compare findings and recommend the best fix."
**When to use**: Critical bugs, architecture decisions, high-stakes debugging

### **9. Zero-Shot Optimization**
**Template**: "Work step-by-step. This is important for [context]: [task]"
**Example**: "Work step-by-step. This is important for our production deployment: Analyze this Kubernetes configuration for security vulnerabilities and suggest fixes."
**When to use**: High-stakes tasks, initial problem solving, when examples aren't available

### **10. Set Clear Boundaries**
**Template**: "[Task] but don't [constraint 1], must [requirement], prioritize [priority]"
**Example**: "Optimize this React component but don't change the API interface, must maintain accessibility, prioritize rendering performance over bundle size."
**When to use**: Code optimization, architecture changes, constrained environments

---

## Quick Reference Card

| **Scenario** | **Best Technique** | **Key Phrase** |
|-------------|-------------------|----------------|
| **Bug fixing** | #1 Be Specific + #3 Chain of Thought | "This should do X but does Y. Debug step by step..." |
| **Code review** | #2 Set Role + #10 Boundaries | "You are a senior engineer, focus on... but don't..." |
| **New feature** | #4 Few-Shot + #5 Progressive | "Here are examples... Start basic, then add..." |
| **Learning** | #7 Meta + #9 Zero-Shot | "First identify the problem type, then solve..." |
| **Critical issues** | #8 Self-Consistency | "Solve using 3 approaches, compare results..." |
| **Complex tasks** | #6 Break Down + #3 Chain of Thought | "Do in steps... show reasoning for each..." |

---

## Technique Combinations

### **For Complex Debugging (#1 + #3 + #8)**
```
Specific problem description → Chain of thought analysis → Multiple solution approaches

"This React component should update state on API response but crashes on null data. 
Analyze step by step: 1) Trace data flow 2) Identify null handling gaps 3) Propose fixes.
Solve using: 1) Defensive coding approach 2) Error boundary approach 3) Data validation approach.
Compare and recommend best solution."
```

### **For New Features (#2 + #4 + #5)**
```
Role/context → Examples → Progressive development

"You are a full-stack engineer building user authentication.
Here are examples of our existing API patterns: [auth endpoints].
Start with basic login/logout, then add JWT refresh, then add OAuth integration.
Show code for each iteration."
```

### **For Learning (#7 + #9)**
```
Meta analysis → Zero-shot execution

"Before implementing Redis caching, first: 1) Identify if this is a read optimization, write optimization, or memory problem 2) Choose between application-level, database-level, or CDN caching.
Work step-by-step. This is important for our performance goals."
```

---

## Common Mistakes to Avoid

- **Too vague**: "Make this better" → Use #1: Be specific about the problem
- **No context**: "Fix this" → Use #2: Set role and provide system context  
- **Single approach**: For complex tasks → Combine techniques (#6 + #3 or #4 + #5)
- **No examples**: When maintaining patterns → Use #4: Few-shot learning
- **High-stakes guessing**: For critical bugs → Use #8: Self-consistency
- **Missing constraints**: When optimizing → Use #10: Clear boundaries

## Evaluation Checklist

✓ **Technique Selection**: Have I chosen the right technique(s) for this task type?  
✓ **Template Usage**: Am I following the proven template structure?  
✓ **Context**: Have I provided tech stack, constraints, and system info?  
✓ **Examples**: For patterns/consistency, have I shown desired format?  
✓ **Boundaries**: Have I specified what NOT to do and priorities?  
✓ **Combinations**: For complex tasks, am I using 2-3 complementary techniques?  

The goal is predictable, useful output that saves you time instead of creating more work.