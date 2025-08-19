# Prompting Techniques for Engineers

## Why This Matters
You're already using AI tools. The difference between getting garbage output and useful code is knowing how to ask. These techniques turn AI from "sometimes helpful" to "reliably useful."

---

## Core Principles

### **1. Treat AI Like a Junior Engineer**
Give context, be specific about what you want, and set boundaries. Don't assume it knows your codebase or constraints.

### **2. Structure Your Requests**
Use clear sections, examples, and constraints. Think: "If I handed this to a new teammate, would they understand exactly what to do?"

### **3. Context is Everything**
The AI doesn't know your tech stack, coding standards, or business rules unless you tell it. Feed it the right information.

### **4. Iterate and Improve**
Start with basic prompts, see what breaks, then add structure. Save patterns that work for your team.

---

## 7 Essential Techniques

### **1. Be Specific About the Task**
**Instead of**: "Fix this code"  
**Try**: "This Python function should return the top 3 users by score, but it's returning all users. Find the bug."

**When to use**: Debugging, code reviews, specific implementation tasks

### **2. Set Your Role and Context**
**Template**: "You are a [role] working on [context]. [Task] considering [constraints]."  
**Example**: "You are a backend engineer at a fintech startup. Review this payment processing code for security issues considering PCI compliance requirements."

**When to use**: Code reviews, architecture decisions, domain-specific tasks

### **3. Show Your Work (Chain of Thought)**
**Template**: "Analyze this step by step: 1) What's happening 2) What could go wrong 3) What's the fix"  
**Example**: "Debug this slow API endpoint step by step: 1) Identify what operations are slow 2) Explain why they're slow 3) Suggest specific optimizations with code examples"

**When to use**: Complex debugging, performance analysis, system design

### **4. Give Examples**
**Template**: "Here's how we usually do [thing]: [example]. Now do [similar thing] following the same pattern."  
**Example**: "Here's how we write error handling in our codebase: [code sample]. Now add error handling to this new function following the same pattern."

**When to use**: Code generation, maintaining consistency, onboarding new patterns

### **5. Inject Relevant Context**
**Template**: "Given [relevant background], [task]"  
**Example**: "Given our microservices architecture using Docker and Kubernetes, design a logging strategy for this new user service that integrates with our existing ELK stack."

**When to use**: Architecture decisions, integration tasks, maintaining consistency

### **6. Break Down Complex Tasks**
**Template**: "Do this in steps: Step 1: [specific task]. Step 2: [specific task]. For each step, show [what you want to see]."  
**Example**: "Design a caching layer: Step 1: Identify what data to cache (show data access patterns). Step 2: Choose caching technology (compare 3 options). Step 3: Design cache invalidation (show code examples)."

**When to use**: System design, feature planning, complex implementations

### **7. Set Clear Boundaries**
**Template**: "[Task] but don't [constraint 1], must [requirement], prioritize [priority]"  
**Example**: "Optimize this database query but don't change the schema, must maintain backward compatibility, prioritize read performance over write speed."

**When to use**: Code optimization, architecture changes, security reviews

---

## Real Engineering Scenarios

### **Code Reviews**
"Act as a senior engineer reviewing this pull request. Focus on security, performance, and maintainability. Here's our coding standard: [paste relevant guidelines]. Flag any issues and suggest improvements."

### **Debugging Production Issues**  
"Analyze this error log step by step. Our system architecture: [brief description]. The error: [log]. Find the root cause and suggest a fix that won't break existing functionality."

### **Learning New Tech**
"I'm a backend engineer learning React. Explain component state management using examples relevant to API data fetching. Compare to how we manage state in backend services."

### **Architecture Decisions**
"We're choosing between PostgreSQL and MongoDB for user data. Our constraints: 100k users, mostly reads, need ACID compliance. Compare both options with pros/cons for our specific use case."

### **Code Generation**
"Generate a REST API endpoint following our pattern: [example endpoint]. New endpoint should handle user preferences with CRUD operations. Include error handling and input validation."

---

## Quick Reference Card

| **Scenario** | **Best Technique** | **Key Phrase** |
|-------------|-------------------|----------------|
| **Bug fixing** | Be Specific + Chain of Thought | "Find the bug step by step..." |
| **Code review** | Set Role + Boundaries | "Act as senior engineer, focus on..." |
| **New feature** | Context + Examples | "Given our architecture, here's similar code..." |
| **Learning** | Specific + Context | "Explain for a [role] working with [tech]..." |
| **Optimization** | Chain of Thought + Boundaries | "Optimize step by step but don't..." |

---

## Common Mistakes to Avoid

- **Too vague**: "Make this better" → Specify what "better" means
- **No context**: Include your tech stack, constraints, and goals  
- **Single shot**: For complex tasks, break into steps
- **No examples**: Show the AI your coding style and patterns
- **No boundaries**: Always specify what NOT to do

The goal is predictable, useful output that saves you time instead of creating more work.