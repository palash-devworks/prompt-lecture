// Utility functions for loading and parsing markdown content

/**
 * Parse keywords from markdown content
 * Expected format: ### **TermName** followed by **What it is**, **Why engineers care**, **Think of it as**
 */
export const parseKeywords = (markdownContent) => {
  const keywords = [];
  const lines = markdownContent.split('\n');
  
  let currentKeyword = null;
  let currentField = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Look for keyword headers (### **TermName**)
    const keywordMatch = line.match(/^###\s+\*\*(.*?)\*\*$/);
    if (keywordMatch) {
      // Save previous keyword if exists
      if (currentKeyword) {
        keywords.push(currentKeyword);
      }
      // Start new keyword
      currentKeyword = {
        term: keywordMatch[1],
        definition: '',
        whyEngineersCore: '',
        analogy: ''
      };
      continue;
    }
    
    if (!currentKeyword) continue;
    
    // Look for field headers
    if (line.startsWith('**What it is**:')) {
      currentField = 'definition';
      currentKeyword.definition = line.replace('**What it is**:', '').trim();
    } else if (line.startsWith('**Why engineers care**:')) {
      currentField = 'whyEngineersCore';
      currentKeyword.whyEngineersCore = line.replace('**Why engineers care**:', '').trim();
    } else if (line.startsWith('**Think of it as**:')) {
      currentField = 'analogy';
      currentKeyword.analogy = line.replace('**Think of it as**:', '').trim();
    } else if (line && currentField && !line.startsWith('**') && !line.startsWith('###')) {
      // Continue multi-line content
      const currentValue = currentKeyword[currentField];
      currentKeyword[currentField] = currentValue ? `${currentValue} ${line}` : line;
    }
  }
  
  // Add the last keyword
  if (currentKeyword) {
    keywords.push(currentKeyword);
  }
  
  return keywords;
};

/**
 * Parse techniques from markdown content
 * Expected format: ### **1. TechniqueName** followed by **Template**, **Example**, **When to use**
 */
export const parseTechniques = (markdownContent) => {
  const techniques = [];
  const lines = markdownContent.split('\n');
  
  let currentTechnique = null;
  let currentField = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Look for technique headers that are numbered (### **1. TechniqueName**)
    const techniqueMatch = line.match(/^###\s+\*\*(\d+)\.\s+(.*?)\*\*$/);
    if (techniqueMatch) {
      // Save previous technique if exists
      if (currentTechnique) {
        techniques.push(currentTechnique);
      }
      // Start new technique
      currentTechnique = {
        name: techniqueMatch[2],
        template: '',
        example: '',
        whenToUse: ''
      };
      continue;
    }
    
    if (!currentTechnique) continue;
    
    // Look for field headers
    if (line.startsWith('**Template**:')) {
      currentField = 'template';
      currentTechnique.template = line.replace('**Template**:', '').trim();
    } else if (line.startsWith('**Example**:')) {
      currentField = 'example';
      currentTechnique.example = line.replace('**Example**:', '').trim();
    } else if (line.startsWith('**When to use**:')) {
      currentField = 'whenToUse';
      currentTechnique.whenToUse = line.replace('**When to use**:', '').trim();
    } else if (line && currentField && !line.startsWith('**') && !line.startsWith('###') && !line.startsWith('---') && !line.startsWith('##') && !line.startsWith('|') && line !== '') {
      // Continue multi-line content, but skip section headers, tables, and empty lines
      const currentValue = currentTechnique[currentField];
      currentTechnique[currentField] = currentValue ? `${currentValue} ${line}` : line;
    } else if (line === '' || line.startsWith('---') || line.startsWith('##') || line.startsWith('|')) {
      // Reset current field when we hit a section boundary
      currentField = null;
    }
  }
  
  // Add the last technique
  if (currentTechnique) {
    techniques.push(currentTechnique);
  }
  
  return techniques;
};

/**
 * Load markdown file content from parent directory
 */
export const loadMarkdownFile = async (filename) => {
  try {
    // In a real app, you'd fetch from a server or import dynamically
    // For this demo, we'll use a fetch to the public folder approach
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return null;
  }
};