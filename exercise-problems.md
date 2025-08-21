# Engineering Prompting Exercise: 10 Problems

## Instructions
- **Time limit**: 15 minutes total (~1.5 minutes per problem)
- **Tool**: Use Gemini Flash for all problems
- **Goal**: Apply the 7 prompting techniques to get better, more useful responses

---

## Problem 1: Debug Async Function
**Problem**: Fix a Node.js function that's causing unhandled promise rejections

**Context**:
```javascript
async function createUser(userData) {
    const user = await db.users.create(userData);
    const emailSent = sendWelcomeEmail(user.email);
    return { success: true, userId: user.id };
}
```

**Technique to Apply**: Be Specific About the Task

**Sample Improved Prompt**: 
"This Node.js async function should create a user and send a welcome email, but it's throwing 'UnhandledPromiseRejectionWarning' in production. Find the missing await/error handling that's causing the crash."

---

## Problem 2: Fix React Hook
**Problem**: Resolve infinite re-rendering in a data fetching component

**Context**:
```javascript
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, [user]);
    
    return <div>{user?.name}</div>;
}
```

**Technique to Apply**: Chain of Thought

**Sample Improved Prompt**:
"Debug this React infinite re-render step by step: 1) Identify what's triggering the useEffect 2) Explain why it creates a loop 3) Show the corrected dependency array with reasoning."

---

## Problem 3: Optimize Slow Query
**Problem**: Improve performance of a user dashboard query

**Context**:
```sql
-- Query takes 8+ seconds with 500k users
SELECT u.name, COUNT(o.id) as order_count, SUM(o.total) as total_spent
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id 
WHERE u.created_at > '2023-01-01'
GROUP BY u.id, u.name
ORDER BY total_spent DESC;

-- Tables: users (500k rows), orders (2M rows)
```

**Technique to Apply**: Inject Relevant Context

**Sample Improved Prompt**:
"Given a PostgreSQL database with 500k users and 2M orders on AWS RDS, optimize this analytics query that takes 8+ seconds. Consider indexing strategy and query restructuring for read-heavy dashboard use."

---

## Problem 4: Review Security Code
**Problem**: Check authentication middleware for security vulnerabilities

**Context**:
```javascript
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}
```

**Technique to Apply**: Set Role and Context

**Sample Improved Prompt**:
"You are a security engineer reviewing this Node.js JWT middleware for a fintech application. Identify security vulnerabilities focusing on token handling, error cases, and potential attack vectors."

---

## Problem 5: Generate API Validation
**Problem**: Create input validation for a new endpoint

**Context**:
```javascript
// Existing pattern for login validation
function validateLogin(req, res, next) {
    const errors = [];
    if (!req.body.email || !/\S+@\S+\.\S+/.test(req.body.email)) {
        errors.push('Valid email required');
    }
    if (!req.body.password || req.body.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    next();
}
```

**Technique to Apply**: Give Examples

**Sample Improved Prompt**:
"Here's our existing validation pattern for login. Create validation for user profile update endpoint following the same error handling format, return structure, and validation style. Fields: name (required, 2-50 chars), bio (optional, max 200 chars), age (optional, 13-120)."

---

## Problem 6: Write API Documentation
**Problem**: Document a new REST endpoint for the team

**Context**:
```javascript
// POST /api/orders - Create new order
// Body: { items: [{productId, quantity}], shippingAddress }
// Returns: { orderId, total, estimatedDelivery } or error
```

**Technique to Apply**: Set Clear Guardrails

**Sample Improved Prompt**:
"Write API documentation for this order creation endpoint but focus only on request/response format and example payloads, don't include implementation details, must follow OpenAPI 3.0 format for our existing docs."

---

## Problem 7: Research Technology Comparison
**Problem**: Choose between Redis and Memcached for session storage

**Context**:
Your team is building a Node.js web application expecting 50k daily active users. Currently using in-memory sessions but need distributed storage for horizontal scaling. Budget is limited and team has minimal DevOps experience.

**Technique to Apply**: Break Down Complex Tasks

**Sample Improved Prompt**:
"Compare Redis vs Memcached for session storage: Step 1: Feature comparison for our use case (50k users, Node.js, limited DevOps). Step 2: Cost analysis (hosting + maintenance). Step 3: Implementation complexity. Step 4: Make specific recommendation with reasoning."

---

## Problem 8: Create Technical Design Doc
**Problem**: Outline architecture for a real-time chat feature

**Context**:
Adding chat to an existing React/Node.js e-commerce platform. Need to support customer service conversations between users and support agents. Current infrastructure: AWS EC2, PostgreSQL, Redis for caching.

**Technique to Apply**: Break Down Complex Tasks

**Sample Improved Prompt**:
"Create technical design outline for real-time chat: Step 1: Choose real-time technology (WebSockets vs Server-Sent Events vs polling). Step 2: Database schema for messages and conversations. Step 3: Integration points with existing user system. Step 4: Scaling considerations for 10k concurrent chats."

---

## Problem 9: Choose Database Solution
**Problem**: Select database for a new analytics dashboard feature

**Context**:
Building user behavior analytics dashboard showing page views, click patterns, and conversion funnels. Expecting 1M events per day, read-heavy workload with complex aggregations. Current stack uses PostgreSQL for transactional data.

**Technique to Apply**: Set Role and Context + Set Clear Guardrails

**Sample Improved Prompt**:
"You are a data engineer choosing analytics database for 1M events/day, read-heavy dashboard with complex aggregations. Compare options but don't suggest complete infrastructure overhaul, must integrate with existing PostgreSQL system, prioritize query performance over write speed."

---

## Problem 10: Design Error Handling Strategy
**Problem**: Create consistent error handling across microservices

**Context**:
Team has 5 Node.js microservices (user management, orders, inventory, payments, notifications) with inconsistent error responses causing frontend integration issues. Some return strings, others objects, different status codes for similar errors.

**Technique to Apply**: Give Examples + Set Clear Guardrails

**Sample Improved Prompt**:
"Here's our current user service error format: `{error: 'USER_NOT_FOUND', message: 'User does not exist', code: 404}`. Design standardized error handling for all 5 microservices following this structure but don't change existing API contracts, must be backward compatible, include error classification system."

---

## Evaluation Criteria

After completing all problems, compare your results:

1. **Specificity**: Are responses more actionable and detailed?
2. **Relevance**: Do answers fit your exact engineering context?
3. **Completeness**: Do you get all information needed to implement?
4. **Code Quality**: Are code suggestions production-ready?
5. **Time Efficiency**: Do better prompts save you follow-up questions?

The goal is to see significant improvement in AI output quality using structured prompting techniques.