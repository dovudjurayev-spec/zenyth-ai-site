import type { TeamMember } from "../types/content";

export const behavioralProblem = [
  "Scrolling is the default behavior under low cognitive energy.",
  "At the moment of choice, users do not have a clear alternative path.",
  "Decision fatigue increases passive consumption and reduces intentional action.",
  "Restriction tools fail because they remove behavior without replacing it."
];

export const solutionFailures = [
  "Blocking creates reactance and immediate workaround behavior.",
  "Users relapse once friction is removed or bypassed.",
  "Most tools do not provide a structured replacement routine.",
  "No action layer means no conversion from intent into behavior."
];

export const approachPoints = [
  "Behavioral substitution instead of restriction.",
  "AI selects one clear alternative at each decision point.",
  "Structured 30–60 minute sessions.",
  "Each session ends with a defined completion state.",
  "Voluntary engagement model designed for sustained return."
];

export const workflowSteps = [
  {
    title: "AI onboarding",
    description: "Captures baseline behavior and context in under three minutes."
  },
  {
    title: "Hobby suggestion",
    description: "Recommends one viable replacement activity with clear rationale."
  },
  {
    title: "Focus selection",
    description: "User commits to one practical direction for the current session."
  },
  {
    title: "Task generation",
    description: "Generates concrete tasks with an achievable finish condition."
  },
  {
    title: "Session completion",
    description: "Closes the loop with completion tracking and next-step logic."
  }
];

export const coreSystem = [
  "AI behavior analysis",
  "Screen-time substitution logic",
  "Personalized task engine",
  "Visible measurable progress",
  "Adaptive session logic"
];

export const marketMetrics = [
  { label: "TAM", value: "1.2B", note: "Gen Z smartphone users" },
  { label: "SAM", value: "75M", note: "University students" },
  { label: "SOM", value: "750K", note: "Initial reachable market" },
  { label: "Revenue Signal", value: "$5M+ ARR", note: "At 1% penetration" }
];

export const mvpValidation = [
  "MVP built in 2 weeks.",
  "Testing D3 and D7 retention.",
  "Testing voluntary return behavior.",
  "Testing structured task completion.",
  "Operating on a 2–4 week validation loop."
];

export const team: TeamMember[] = [
  {
    role: "Founder",
    name: "Dovud Jurayev",
    points: [
      "Product direction and behavioral framework ownership.",
      "MVP execution and validation loop design.",
      "Accelerator-facing strategic narrative."
    ]
  },
  {
    role: "Co-Founder",
    name: "Abduzohid Vakhidjanov",
    points: [
      "Technical architecture and implementation leadership.",
      "AI task-engine integration and iteration support.",
      "Operational delivery across product cycles."
    ]
  }
];
