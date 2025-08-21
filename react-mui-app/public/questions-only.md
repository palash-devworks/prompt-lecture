# Advanced LLM Exercise Questions and Context

## Instructions
- **Time limit**: 90 minutes total (45 minutes per round)
- **Choose your track**: Product or Business
- **Goal**: Experience dramatic improvement from baseline to advanced prompting
- Each exercise targets 9.0+ impact score (immediate applicability, transformative results)

---

# Product Track

## Exercise 1: Crisis Stakeholder Communication (PM)

**Situation**: Your product launch is delayed by 3 weeks due to critical bugs found in final testing. You need to inform the CEO, investors, and key customers. The team is stressed, stakeholders are expecting the launch next Monday, and you need to maintain confidence while being transparent about the delay.

**Context**: 
```
From: qa-lead@company.com
Subject: URGENT - Payment module security issues
Sent: March 8, 11:47 PM

Found 3 critical vulnerabilities in payment processing during final pen testing. Cannot ship Monday. Sarah's team has been working 60+ hour weeks and morale is pretty bad. This is the 2nd delay - first was user authentication issues in February that pushed us a week.

Mike from sales keeps asking when we can tell Enterprise clients. Jennifer (CEO) expects update first thing Monday. Board meeting is Thursday. TechFlow (our main competitor) announced their similar feature launches May 15th.

Payment team estimates 2-3 weeks minimum to fix properly. Could rush it in 1 week but that's how we got here in the first place. Customer Success forwarded complaints from at least 12 enterprise accounts asking about timeline.

---

Slack #general channel:
Jennifer_CEO: "Team all-hands Monday 9am. Need to discuss timeline."
Dave_Eng: "Security can't be rushed. Learned that lesson already."
Sarah_QA: "Team is exhausted. Need realistic timeline this time."
Mike_Sales: "Clients are getting antsy. Some threatening to evaluate alternatives."
```

---

## Exercise 2: User Research Synthesis (Designer/PM)

**Situation**: You've completed 10 user interviews about your mobile app's checkout process. Users are abandoning at 34% rate, and you need to turn these interviews into specific product decisions for next sprint planning. Leadership wants clear priorities, not just a list of user complaints.

**Context**:
```
Interview Transcript Excerpts:

User #3 (Sarah, 28): "So I'm on the payment page and I click Visa but then it still shows PayPal selected? Or maybe I didn't click hard enough? This is confusing... Oh wait there's shipping costs now? Why didn't you tell me that before?" 

User #7 (Mike, 45): "Look I just want to buy this thing. Why do I need to create an account? Amazon doesn't make me do this. Where's guest checkout? Oh it's there but tiny... Your app is fast though, I'll give you that."

User #1 (Jessica, 32): "The promo code thing is broken. I typed SAVE20 and nothing happened. Tried clicking apply, still nothing. Gave up. But I like how it filled in my address automatically."

User #5 (David, 29): "This summary looks good, very clear what I'm buying. But when I put in my credit card I got worried - is this secure? No little lock icon or anything to make me feel better about it."

---

Analytics Dashboard (March data):
Checkout funnel: 10,430 users started → 6,884 completed
Mobile: 66.1% completion, Desktop: 77.8% completion  
Avg time: 3.2min (mobile), 2.8min (desktop)
Top exit points: Payment selection (23%), Shipping (18%), Final review (12%)

---

Slack conversation:
Tom_PM: "Sprint planning tomorrow. Need concrete recommendations not just research summary."
Lisa_Designer: "Users complained about everything. How do I prioritize?"
Mark_VP: "Focus on what actually moves the needle on conversion. No pet projects."
```

---

## Exercise 3: Feature Prioritization Defense (PM)

**Situation**: You decided to build an advanced search feature instead of the highly-requested dark mode. The design team wanted dark mode, engineering said it was easier, and 200+ users requested it. You need to explain this decision to stakeholders without losing team confidence or appearing disconnected from users.

**Context**:
```
From: community@company.com
Subject: Feature Request Summary - March

247 dark mode requests this quarter! Users really want this:
"Please add dark mode, my eyes hurt" 
"Every other app has dark mode now"
"This is a basic feature in 2024"

Advanced search got 45 requests but they're all from enterprise accounts.

---

Slack #design channel:
Alex_Design: "Dark mode would be perfect for our Q3 design system update anyway"
Sarah_Design: "Users are literally begging for it. 247 requests!"
Mike_Eng: "Dark mode is maybe 3 weeks work. Search rebuild is 8+ weeks easy"
Jen_Eng: "Search means touching backend, database, API changes. High risk."

---

Internal metrics (scattered from different sources):
- Revenue breakdown: Enterprise vs consumer unclear but "majority enterprise"
- Current search success rate: "pretty bad" (some engineer mentioned <30%?)
- Enterprise renewals coming up Q2
- Several big enterprise clients mentioned search problems in recent calls

---

Email from CEO:
"Why are we ignoring what users want? 247 requests vs 45 doesn't seem like hard math. Design and engineering both prefer dark mode. Explain the search decision in tomorrow's stakeholder meeting."

---

Overheard in hallway:
"TechFlow and StartupX both have dark mode..."
"None of our competitors have decent search though..."
```

---

## Exercise 4: Design Review Facilitation (Designer)

**Situation**: You're leading a design critique for the new user dashboard. The engineering lead thinks it's too complex, the PM wants more data displayed, the CEO saw a competitor's design and wants something similar, and junior designers are hesitant to give honest feedback. You need productive critique that improves the design without damaging team dynamics.

**Context**:
```
Pre-meeting Slack messages:
Dave_Eng: "That dashboard mockup is going to kill mobile performance. 8 widgets loading different data sources?"
Lisa_PM: "Users need more info. Can we add conversion funnel, user segments, revenue breakdown, churn analysis?"
Mike_JuniorDesigner: "[no messages, but usually stays quiet in critiques]"
Sarah_JuniorDesigner: "Looks good!" [always says this]

---

From CEO this morning:
"Saw FlowMetrics' new dashboard at the conference yesterday. Looks amazing - very modern, lots of data density. Why doesn't ours look like that? Can you make it more similar?"

---

Last critique aftermath (overheard):
Sarah to Mike: "I felt stupid for disagreeing with Alex's feedback"
Alex_SeniorDesigner: "Why did everyone go quiet when I explained the grid system?"
Dave_Eng (to you privately): "These design reviews are a waste of time. Designers get defensive about everything."

---

Recent user research notes (buried in Notion):
"Users mentioned dashboard feels overwhelming"
"Preference for clean, simple interface"
"Hard to find key metrics quickly"
"Too much scrolling on mobile"

---

Project timeline pressure:
Lisa_PM: "Need final designs in 2 weeks for Q2 delivery. No more major changes after that."

---

Engineering concerns (from technical review doc):
"Complex layouts = maintenance nightmare"
"Multiple API calls = slow loading"
"Mobile responsiveness already challenging with current widgets"
```

---

## Exercise 5: Sprint Retrospective Insights (PM/Scrum Master)

**Situation**: Your team's velocity has dropped 30% over the last three sprints, and retrospectives have become complaint sessions without actionable improvements. Team members blame external factors (changing requirements, unclear designs, technical debt), but velocity continues declining. You need to turn frustration into process improvements.

**Context**:
```
Jira velocity chart shows downward trend but reasons unclear:
Sprint 20 (Jan): 32 pts → Sprint 21 (Feb): 28 pts → Sprint 22 (Mar): 22 pts → Sprint 23 (current): 24 pts

---

Last retrospective transcript (partial):
Dave: "Same problems every sprint. Requirements change Tuesday, designs show up Thursday, then we're supposed to deliver Friday?"
Sarah: "I spent 3 days refactoring legacy payment code just to add one field. Technical debt is killing us."
Mike: "Meetings, meetings, meetings. When do I actually code?"
Lisa: "QA is always the bottleneck. We finish development then wait 3 days for testing feedback."
Tom: "Acceptance criteria are vague. 'Make it user-friendly' isn't a requirement."
Jen: "I'm context-switching between the mobile app, web dashboard, and API work. Can't focus."

You: "What actions should we take?"
[Long silence]
Dave: "Fix the requirements process?"
Sarah: "Hire more QA people?"
[Meeting ends with no clear commitments]

---

Slack messages this week:
CEO: "Need to accelerate Q2 delivery. Market window closing."
Compliance: "New SOC2 requirements must be implemented by April 15th."
PM: "Customer escalation on mobile bugs. Can engineering prioritize?"

---

Previous "improvements" attempted:
- Shortened daily standups from 30min to 15min (February)
- Moved weekly architecture review to 4pm Friday (March)
- Added "Definition of Ready" checklist (ignored)
```

---

## Exercise 6: Competitive Feature Analysis (PM)

**Situation**: Your main competitor launched a social sharing feature that's getting significant user engagement and positive reviews. Your CEO wants to "build something similar but better" immediately. Marketing is concerned about falling behind, engineering estimates 6 weeks of work, and you need to decide whether this is strategic or reactive thinking.

**Context**:
```
From: ceo@company.com
Subject: URGENT - Competitor Analysis
Sent: Today, 7:23 AM

"FlowShare just launched social sharing. TechCrunch article says 40% user engagement first week. App Store reviews are glowing - 'Finally can share my progress with team!' Build something similar but better. Want roadmap by Friday."

---

Marketing team Slack panic:
Jess_Marketing: "Our users asking why we don't have social sharing like FlowShare"
Tom_Marketing: "We look behind. Board meeting next week - what do I tell them?"
Sarah_Marketing: "Their social posts are everywhere on LinkedIn. Great brand awareness."

---

Engineering response:
Dave_Lead: "Social sharing means user profiles, privacy controls, sharing permissions, content moderation. 6 weeks minimum. Roadmap is already packed."
Mike_Eng: "FlowShare is consumer-focused. We're B2B. Different audiences?"

---

Customer feedback (mixed sources):
Support ticket #1247: "Love your security features but wish I could share reports"
Feature request board: 23 mentions of "social" over 6 months vs 156 for "API integrations"
Enterprise client email: "Chose you over FlowShare specifically because no social features. Privacy concerns."
Sales feedback: "Enterprise clients don't want social. Compliance issues."

---

Revenue data (approximate):
- Enterprise contracts: majority of revenue (80-90%?)
- Consumer subscriptions: smaller revenue, high support overhead
- FlowShare targets opposite: mostly consumer with some business

---

Internal positioning:
Brand guidelines mention "professional efficiency" and "enterprise security"
FlowShare markets as "social-first collaboration platform"
```

---

## Exercise 7: User Story Translation (PM)

**Situation**: A key customer sent this request: "We need better reporting because our managers can't see what's happening with their teams." This vague request needs to become specific user stories for development. The customer is worth $50K ARR, but you need to understand real requirements before committing to timeline.

**Context**:
```
From: director.ops@strategypartners.com ($50K client)
Subject: Reporting Issues - Need Solution ASAP

"Hi, our managers can't see what's happening with their teams. Current reports don't show the right information and are hard to understand. Can you add dashboards that make sense for managers? This is urgent.

We have 50 people using your system, 8 team managers. The activity logs and completion rates aren't useful. Managers spend hours manually compiling reports for client meetings."

---

Sales follow-up call notes (handwritten):
- Professional services company
- "Managers frustrated with current reporting"
- "Manual work creating Excel reports every week"
- "Need better visibility into team performance"
- "Client billing depends on accurate time tracking"
- "Directors asking questions managers can't answer"

---

Current system data points (from database):
We collect: task completion times, user activity logs, project milestones, client interaction records, time tracking, custom fields per project

---

Engineering notes:
"Current reporting engine basic - just SQL queries to CSV export. New dashboard framework available. API exists but manual export process. Could integrate with their existing tools maybe?"

---

Customer Success feedback:
"This client has been asking about reporting for months. They're considering other solutions. Need to act fast or risk churn."

---

Unanswered questions:
- What specific decisions do managers make?
- How often do they need reports?
- What format works best?
- Which metrics actually matter?
- How do they define "team performance"?
```

---

## Exercise 8: Roadmap Communication (PM)

**Situation**: You're presenting the Q2 roadmap to all stakeholders. Sales wants the enterprise SSO feature moved up, Customer Success is pushing for mobile app improvements, engineering wants infrastructure upgrades, and the CEO wants focus on the new AI features. You need to explain prioritization decisions without losing stakeholder support.

**Context**:
```
Your Q2 roadmap (finalized yesterday):
1. API performance optimization 
2. Advanced search functionality
3. AI-powered recommendations  
4. Mobile UX improvements

---

Slack messages this morning:
Mike_Sales: "Where's enterprise SSO? Lost 3 deals last month because we don't have it. How is search more important?"
Jen_CustomerSuccess: "Mobile app is 3.2 stars. Users complain daily about offline mode. This should be #1 priority."
Dave_Engineering: "We had 2 outages in Q1. Infrastructure debt is going to bite us hard if we keep ignoring it."
Sarah_Design: "Dark mode has 247 user requests. Why isn't that even on the roadmap?"
Tom_Operations: "Still manually importing customer data. Promised bulk tools last quarter."

---

CEO message (private):
"Board wants to see AI initiatives. Competitive differentiation critical. Hope you weighted that heavily in roadmap decisions. Present to stakeholders tomorrow."

---

Background context (from various sources):
- 12 developers total capacity
- Customer retention: 87% (target 90%+)
- Sales cycle: lengthening (enterprise feature gaps?)
- Recent customer feedback mentions slow performance
- Competition launching AI features this quarter
- Engineering capacity fully committed

---

Stakeholder meeting tomorrow agenda:
"Q2 Roadmap Review - All department heads attending. Explain prioritization rationale and resource allocation."

---

Unspoken tension:
Everyone thinks their requests should be #1 priority
Limited engineering resources
Pressure to satisfy everyone
Need stakeholder buy-in for roadmap success
```

---

## Exercise 9: Technology Stack Research & Migration Analysis (PM/Technical Lead)

**Situation**: Your current API is built on Node.js/Express with MongoDB, but you're experiencing performance issues with complex queries and concurrent users (>500). The engineering team suggests migrating to microservices architecture with different databases. You need to research and present technology recommendations to the CTO within 3 days.

**Context**:
```
From: cto@company.com
Subject: API Performance Crisis - Need Migration Plan
Sent: Monday 8:00 AM

"Dashboard loading taking 8+ seconds during peak hours. Customer complaints escalating. Need technology migration plan by Thursday. Budget discussions with CFO Friday."

---

Performance monitoring alerts (last week):
"API response time > 3000ms" - 847 occurrences
"Database timeout error" - 234 occurrences  
"Memory usage > 80%" - Daily 2-4 PM
"User session failures" - 15% of API calls during high load

---

Slack engineering discussion:
Dave_Lead: "MongoDB joins killing us with 50GB dataset. Need relational DB."
Sarah_Backend: "GraphQL + PostgreSQL could be 60-80% faster but we don't know GraphQL"
Mike_Backend: "Microservices + sharding safer. 40-50% improvement, 4 weeks vs 6"
Jen_DevOps: "Migration costs - PostgreSQL tools $15K, sharding setup $8K"

---

Current system (from architecture doc):
- Node.js monolith, 45 endpoints
- MongoDB: 12 collections, largest 2M documents
- React frontend: ~200 API calls per user session
- AWS auto-scaling (sometimes helps, sometimes doesn't)
- 50K daily users, growing 15% monthly

---

Business constraints (from various conversations):
CFO: "Migration budget capped at $30K"
CEO: "Q4 traffic surge expected. Must be done before then." (8 weeks?)
Operations: "Downtime over 4 hours risks SLA violations"
Frontend team: "Don't break our React integration"
HR: "4 backend engineers available for migration work"

---

Unanswered questions:
- Which approach actually solves root performance issues?
- Real-world migration timeline with our team?
- Risk assessment of each option?
- What happens if we do nothing?
```

---

# Business Track

## Exercise 1: Executive Decision Briefing (Business Ops)

**Situation**: Your team has been manually processing customer data exports for 15+ hours weekly. You've evaluated automation tools and recommend investing $72K annually in DataFlow Pro vs current manual process. You need CFO approval and want to present this as strategic investment, not just cost reduction.

**Context**:
```
From: team.lead@company.com
To: cfo@company.com
Subject: DataFlow Pro Investment Proposal - CFO Review Requested

"Sarah, Mike, and I spend most Tuesday/Wednesday doing manual customer exports. Sarah calculated ~5 hours each per week. That's 15 hours weekly team time on copy-paste work at $28/hour average.

Customers keep complaining about delays. Q1 had 8 complaints about wrong data or late delivery. We mess up about 12% of exports and have to redo them (another 3 hours weekly).

Found DataFlow Pro - $72K annually but automates 90% of this work. Claims <1% error rate, real-time exports vs our 24-48 hour delays. Integrates with our CRM and billing systems.

Alternative: Engineering estimates $45K to build internal tool (6 months), $15K yearly maintenance. But engineering bandwidth is tight and timeline uncertain.

We're supposed to grow 40% this year - manual process won't scale. Team could focus on actual strategy work instead of data entry.

Meeting request: 30 minutes this week to discuss?"

---

Slack conversation:
Sarah_Ops: "Another export error today. Client noticed wrong revenue numbers in their report."
Mike_Ops: "Spent 6 hours yesterday on the Morrison account export. This is unsustainable."
You: "DataFlow Pro demo was impressive. Worth the investment?"
Sarah_Ops: "Anything to get us out of Excel hell."

---

CFO's previous comments (overheard):
"Need to see clear ROI on any new software purchases"
"Board wants proof we're scaling efficiently"
"Show me strategic value, not just cost savings"
```

---

## Exercise 2: Performance Conversation Scripts (HR)

**Situation**: Sarah, a marketing coordinator (18 months tenure), has been missing deadlines and making errors that require rework. Her manager notices she seems overwhelmed but isn't asking for help. Recent feedback was met with defensiveness. You need to script a conversation that addresses performance while maintaining the relationship and identifying root causes.

**Context**:
```
From: manager@company.com
To: hr@company.com  
Subject: Need advice on performance conversation with Sarah

"Sarah missed the product launch email deadline last week (3rd missed deadline in 6 weeks). Had to send pricing correction email because wrong numbers went out to 12K subscribers. Her social posts need 3-4 revisions now vs 1-2 before.

She seems stressed in meetings, but won't ask for help. Always says 'I've got it handled' when offered support. Great creative ideas and team loves working with her.

Tried giving feedback 2 weeks ago. She got defensive - 'workload is impossible', 'expectations aren't clear', acted like I was attacking her personally. Meeting went nowhere.

Context: Team restructuring added 30% more work to everyone. New project management system (Asana) rolled out 2 months ago. I'm newly promoted manager with limited experience having tough conversations.

Sarah had excellent reviews before this. Company culture is direct but kind. How do I address performance without damaging our relationship?"

---

Slack observations:
Team_Member1: "Sarah's working late again. Should someone check on her?"
Team_Member2: "She redid the whole campaign brief yesterday. Looked exhausted."

---

HR notes from previous conversation:
"Manager seems conflict-avoidant. Sarah likely feeling overwhelmed but doesn't know how to communicate needs. Classic new system + increased workload stress."
```

---

## Exercise 3: Data-Driven Recommendations (Business Ops)

**Situation**: You've analyzed Q1 customer data and found concerning trends: acquisition costs increased 35%, but customer lifetime value dropped 18%. The marketing team wants to increase ad spend, while finance wants to reduce costs. You need to present recommendations that address root causes, not just symptoms.

**Context**:
```
Slack #leadership channel heated discussion:
Marketing_VP: "Q1 CAC up to $243 from $180 last quarter. Need bigger ad budget to scale efficiently."
Finance_VP: "LTV dropped $1650 to $1350. We're spending more to get customers worth less. Cut marketing spend."
CEO: "These numbers don't make sense together. What's really happening?"

---

Your analysis notes (scattered across multiple spreadsheets):
- Conversion rates: 3.2% → 2.1% (why?)
- TikTok and LinkedIn ads expensive but brought in leads
- Google and email campaigns "not performing like before"
- Churn rate: 6.2% → 8.9% (major red flag)
- Average deal size holding at $150
- Upsell rate crashed from 23% to 16%

---

Customer Success team complaints:
"Clients asking about pricing more"
"Two competitors launched with aggressive pricing Q1"
"Economic uncertainty - B2B budgets tightening"
"Sales cycles taking longer - more approvals needed"

---

Random observations from around the office:
Support team: "Response time hit 18 hours average. Customers frustrated."
Product team: "Shipped 5 new features Q1 but onboarding completion down to 67%"
Sales team: "Focused on new logos. Expansion revenue declining."

---

CEO follow-up:
"Present recommendations Monday. Marketing and Finance both think they're right. Need root cause analysis, not just symptom fixes. Board meeting Wednesday."
```

---

## Exercise 4: Change Communication (HR)

**Situation**: The company is implementing a new performance review system that includes peer feedback and quarterly check-ins instead of annual reviews. Employees are anxious about increased feedback frequency and peer evaluation. Some managers worry about time investment. You need to announce this change without creating resistance.

**Context**:
```
CEO announcement (last week):
"Moving to quarterly performance conversations and 360-degree feedback starting Q2. Goal tracking monthly. Manager training begins next month. HR will communicate rollout details."

---

Water cooler conversations (overheard):
"Quarterly reviews? That's micromanagement."
"Peer feedback is going to ruin relationships. Who wants to rate their friends?"
"More meetings, more paperwork. What's the benefit?"
"Our managers can barely handle annual reviews. Now quarterly?"
"What if I get bad peer feedback? Does that hurt my career?"

---

Manager concerns (from private conversations):
Tom_Manager: "Quarterly conversations with 8 direct reports? When do I do actual work?"
Sarah_Manager: "I hate giving negative feedback. This system forces more difficult conversations."
Mike_Manager: "Peer feedback creates drama. Remember when marketing and sales had that conflict?"
Jen_Manager: "Goal tracking system looks complicated. Need training on the tool itself."

---

Exit interview data (last 6 months):
"Never knew if I was doing well until annual review"
"Manager gave no development feedback throughout year"
"Unclear expectations led to missed promotion"
"Felt disconnected from company goals"
"No regular check-ins with manager"

---

Employee survey results (recent):
68% report unclear performance expectations
43% want more frequent feedback
Manager effectiveness: 2.8/5 (industry average: 3.4/5)
Highest retention teams: frequent 1:1s with managers

---

HR challenge:
Announce change without creating panic or resistance
Address peer feedback anxiety
Show value to both employees and managers
```

---

## Exercise 5: Candidate Assessment Synthesis (Recruiter)

**Situation**: You need to synthesize feedback from 5 interviewers for a Senior Marketing Manager role. Opinions are mixed: strong strategic thinking but concerns about team leadership, great cultural fit but limited experience in your industry, excellent communication but some technical knowledge gaps. The hiring manager wants a clear hire/no-hire recommendation with reasoning.

**Context**:
```
Slack feedback thread (Senior Marketing Manager candidate):

VP_Marketing: "Smart strategic thinker, creative problem-solver. BUT only managed 2 people before and we need someone for 4 direct reports. Asked great questions about our GTM strategy though."

Senior_Marketing_Peer: "I'd love working with them! Collaborative, fresh perspective. Admitted not knowing HubSpot/Salesforce integration but seemed eager to learn. Good cultural fit."

Marketing_Coordinator: "They asked thoughtful questions about my role and challenges. Seemed genuinely interested in developing people. Started formal but relaxed during conversation."

Sales_Director: "Understands sales/marketing alignment well. Limited B2B SaaS background but marketing principles are transferable. Great presentation skills."

HR_Partner: "Values match excellent. Growth mindset, collaborative. Nervous at first but warmed up - authentic enthusiasm for role and company."

---

Hiring Manager follow-up:
"Need hire/no-hire decision by Friday. Team of 4 reports waiting for new manager. Candidate expectations within budget range."

---

Job requirements (from original posting):
- Manage 4 marketing professionals
- Lead demand generation 
- Prefer 3+ years B2B SaaS
- Data-driven approach
- Collaborative leadership

---

Unresolved questions:
- Management experience gap vs culture fit
- Industry knowledge vs transferable skills  
- Technical tool gaps vs learning ability
- Team needs vs candidate strengths
```

---

## Exercise 6: Budget Defense Strategy (Business Ops)

**Situation**: Your department exceeded Q1 budget by $47K (22% over) due to unexpected software licensing costs and contractor expenses for a critical project. The CFO has called a budget review meeting, and you need to defend the overspend while securing Q2 budget approval without cuts.

**Context**:
```
From: cfo@company.com
Subject: URGENT - Budget Review Meeting Thursday
Sent: Monday 2:47 PM

"Your department 22% over Q1 budget ($262K vs $215K planned). Board questioning financial discipline across all departments. Meeting Thursday 10am to discuss overspend and Q2 budget approval.

Need clear justification for $47K variance and assurance this won't repeat."

---

Your Q1 spending (from scattered receipts/invoices):
- Security compliance software: $28K unplanned (SOC2 audit requirement)
- Contractor (data migration): $19K over (project complexity)
- Client travel: $3K unexpected (customer escalations)
- Laptop replacements: $2K (3 failures)
- Training delayed: -$5K savings (rescheduled to Q2)

---

Business outcomes (from different sources):
- Q1 revenue: $180K over plan 
- Customer satisfaction: up 15% (survey results)
- Security audit: PASSED (failed last year)
- Data migration: completed 2 weeks early
- Team productivity metrics: +23% improvement
- Customer downtime: 0 incidents (vs 3 in Q4)

---

Slack conversation:
Team_Member: "SOC2 compliance tools were emergency purchase after audit requirements changed"
You: "Data migration contractor saved us months of internal work"
Another_Team: "Client meetings were critical - prevented churn"

---

CFO's recent comments (heard through grapevine):
"Every department thinks they're special case"
"Board wants predictable spend"
"Need to prove we can scale efficiently"
"Q2 budget approvals contingent on Q1 explanations"

---

Q2 budget needs: $225K planned with strategic initiatives requiring investment
```

---

## Exercise 7: Process Improvement Proposal (Business Ops)

**Situation**: Customer onboarding currently takes 6-8 weeks and involves 12 different touchpoints across 5 departments. New customers frequently get confused about next steps, 23% require timeline extensions, and the process consumes 40+ hours of team time per customer. You want to propose a streamlined process that reduces timeline to 3-4 weeks.

**Context**:
```
Customer onboarding pain (from various complaints):
"Week 3 and still don't know who my point of contact is"
"Got same questionnaire from Sales, Customer Success, and Training"
"Training was scheduled before product was configured - had to reschedule"
"Timeline kept changing - originally 6 weeks, now 8 weeks"

---

Internal process reality (pieced together from different departments):
Weeks 1-2: Sales handoff, account setup, training gets scheduled
Weeks 3-4: Product config starts, data migration planning
Weeks 5-6: Training delivery, testing environment maybe ready
Weeks 7-8: Go-live prep, final testing, hopefully launch

---

Slack frustrations:
Sales: "Customers keep asking me technical questions post-handoff"
Customer_Success: "No visibility into where customer is in onboarding"
Engineering: "Configuration requests come in randomly, no prioritization"
Training: "Constantly rescheduling because product not ready"
Operations: "Spending 40+ hours per customer on coordination"

---

Your proposed solution (draft notes):
- Dedicated onboarding manager (4 weeks)
- Automated workflow system with customer portal
- Configuration and training in parallel
- Self-service options for routine stuff
- Weekly check-ins vs random communications
- Clear milestones and approval gates

---

Expected pushback (from past process discussions):
"Current process works fine" (Sales)
"Dedicated resource costs money" (Finance)
"I need control over my part" (Engineering)
"What if customer experience suffers during transition?" (Customer Success)

---

Stakeholder meeting next week to discuss "onboarding efficiency improvements"
23% of customers need timeline extensions currently
```

---

## Exercise 8: Role-Specific Onboarding Design (HR)

**Situation**: You're hiring your first Head of Engineering and need to design a 30-day onboarding plan. This is a critical leadership role requiring technical assessment of current systems, team evaluation, and strategic planning for scaling. The CEO expects rapid impact, but the role needs deep context to make good decisions.

**Context**:
```
From: ceo@company.com
To: hr@company.com
Subject: Head of Engineering Onboarding - Expectations

"Alex starts in 2 weeks. Senior leader from Microsoft with team building and architecture experience. Unfamiliar with startup pace and resource constraints.

Engineering team (8 people) has been without technical leadership for 3 months since previous manager left. Need rapid impact but can't afford bad decisions from lack of context.

Expectations: technical assessment of current systems, team evaluation, engineering roadmap aligned with product strategy, process improvements, stakeholder relationships established, scaling plan.

Board wants to see engineering leadership progress in 30 days."

---

Current engineering situation (from various conversations):
Developer_1: "Technical debt from rapid growth is slowing us down"
Developer_2: "No clear processes - everyone doing their own thing"
Product_Manager: "40% user growth but engineering velocity declining"
CTO_Previous: "Mixed tech stack, some legacy systems, good team culture"

---

Startup context:
- Series B, fast-growing, cross-functional collaboration critical
- Limited formal processes but high execution expectations
- CEO values strategic thinking AND hands-on involvement
- Transparent, direct communication culture

---

Unresolved onboarding questions:
- How fast can new leader assess 8-person team effectively?
- Balance rapid impact vs deep context gathering?
- Stakeholder meeting schedule without overwhelming new hire?
- Success metrics for first 30 days?
- Support structure for transition from large company to startup?
```

---

## Exercise 9: Compensation Benchmarking & Market Analysis (HR/Business Ops)

**Situation**: Your company's engineering salaries are 15% below market rate according to exit interviews, but the CEO questions this data. Three senior engineers left for better offers, and you're struggling to fill 4 open positions. You need to research comprehensive market compensation data and present a salary adjustment proposal that accounts for location, company stage, and budget constraints.

**Context**:
```
Recent exits (painful):
Sarah (Senior Backend): "Taking offer 28% higher at TechFlow. Love working here but can't ignore money."
Mike (Tech Lead): Fintech startup offered 35% more + equity
Alex (Full Stack): Exit interview - "Significantly underpaid compared to market"
All three had ~18 months tenure

---

CEO's skeptical response:
"Exit interviews always blame compensation. Need hard market data, not anecdotes. Question timing with budget constraints."

---

Hiring reality check:
4 open positions (2 senior, 2 mid-level) for 3+ months
200+ applications but 23% offer acceptance (industry average 65%)
Recruiting agencies burned through $45K with minimal results
Common candidate feedback: "Offer below expectations"

---

Current pay (Austin-based, Series B, 85 employees):
Senior Engineers: $115K-$125K
Mid-level: $85K-$95K  
Tech Leads: $135K-$145K
Total engineering budget: $1.2M (12 people)
No equity below director level
Standard benefits: healthcare, 3 weeks PTO, 401k match

---

Market chatter (overheard/rumored):
"Google Austin hiring at $160K+ for seniors"
"Microsoft remote positions competitive"
"Local startups offering equity packages"
"Industry reports 25% salary increases this year"
Remote work changed everything post-COVID

---

Research challenge:
Verify actual market rates from multiple sources
Austin vs remote location adjustments
Company stage/size comparisons
Equity vs cash trade-offs
Budget impact vs retention costs
```