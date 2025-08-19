# LLM Keywords for Engineers

## Quick Definitions

### **Tokens**
**What it is**: Words and pieces of words that AI models understand  
**Why engineers care**: Longer prompts = more tokens = higher costs. Most models charge per token.  
**Think of it as**: Bytes in a file - you want to be efficient but not lose meaning.

### **Context Window**
**What it is**: The maximum amount of information an AI can "remember" in one conversation  
**Why engineers care**: Like RAM for conversations - once it's full, the AI forgets earlier parts.  
**Think of it as**: A terminal session with limited scroll-back buffer.

### **Prompts**
**What it is**: Instructions you give to AI models  
**Why engineers care**: Bad prompts = unreliable outputs. Good prompts = consistent, useful results.  
**Think of it as**: Function calls - clear inputs produce predictable outputs.

### **Completions**
**What it is**: The AI's response to your prompt  
**Why engineers care**: This is what you actually get back to use in your application.  
**Think of it as**: Return values from an API call.

### **Training**
**What it is**: The process of teaching AI models using massive datasets  
**Why engineers care**: Determines what the model knows and how it behaves. You can't change this after deployment.  
**Think of it as**: Compiling a massive codebase - expensive, time-consuming, done once.

### **Inference**
**What it is**: Running the trained model to get answers from prompts  
**Why engineers care**: This is what happens every time you call an AI API. Affects speed and cost.  
**Think of it as**: Executing a compiled program - fast, cheap, happens every request.

### **Embeddings**
**What it is**: Numbers that represent the "meaning" of text  
**Why engineers care**: Powers search, recommendations, and similarity matching in apps.  
**Think of it as**: Hash functions for semantic meaning instead of exact text.

### **RAG (Retrieval-Augmented Generation)**
**What it is**: AI that can look up information before answering  
**Why engineers care**: Lets AI access your company's data, docs, or real-time info.  
**Think of it as**: AI with a search engine attached.

### **Agents**
**What it is**: AI that can use tools and take multiple steps to complete tasks  
**Why engineers care**: Can automate complex workflows, not just answer questions.  
**Think of it as**: Scripts that can think and adapt while running.

### **Guardrails**
**What it is**: Rules that prevent AI from doing unwanted things  
**Why engineers care**: Keeps AI from suggesting unsafe code, exposing secrets, or going off-topic.  
**Think of it as**: Input validation and security policies for AI systems.

---

## Why This Matters for Engineers

These aren't just buzzwords - they're the building blocks of reliable AI-powered tools. Understanding them helps you:

- Choose the right model for your task
- Write better prompts that work consistently  
- Build AI features that users can trust
- Debug issues when AI outputs go wrong
- Estimate costs and performance for AI features