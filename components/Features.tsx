'use client';

import { useState } from 'react';

const features = [
  {
    name: 'Multi-Mind Verification',
    description: 'Built-in Builder/Critic/Spec Guardian roles ensure changes are validated before execution.',
    icon: '🧠',
    details: [
      'Builder role proposes solutions and implementations',
      'Critic role actively searches for flaws, edge cases, and missed constraints',
      'Spec Guardian compares changes against project specs and documentation',
      'Automated reconciliation process before code execution',
      'Prevents single-perspective bias in AI-generated code'
    ]
  },
  {
    name: 'Persistent State Management',
    description: 'Session continuity across sprints with TODO.md, SESSION_NOTES.md, and context tracking.',
    icon: '💾',
    details: [
      'TODO.md tracks tasks across sessions with clear status tracking',
      'SESSION_NOTES.md provides chronological work logs with reasoning',
      'AI_CONTEXT_INDEX.md maps project structure and key areas',
      'Deterministic memory using files instead of conversational context',
      'Cross-session consistency for team collaboration'
    ]
  },
  {
    name: 'Risk Classification System',
    description: 'Automatic HIGH/MEDIUM/LOW risk tagging with engineer approval workflows for critical changes.',
    icon: '⚠️',
    details: [
      '🔴 HIGH RISK: Auth, payments, security, data deletion - requires engineer approval',
      '🟡 MEDIUM RISK: Business logic, schema changes - requires extra verification',
      '🟢 LOW RISK: Docs, comments, formatting - standard process',
      'Automatic escalation for uncertainty or conflicting requirements',
      'Safe Mode prevents irreversible changes in high-risk scenarios'
    ]
  },
  {
    name: 'Built-in Audit Trails',
    description: 'Complete change history with reasoning, verification steps, and compliance documentation.',
    icon: '📋',
    details: [
      'Every change logged with justification and context',
      'Verification steps and test results documented',
      'Files touched and risk classifications tracked',
      'Archive system for historical state preservation',
      'Compliance mode for regulated industries and teams'
    ]
  },
  {
    name: 'Deterministic Behavior',
    description: 'Boot protocol ensures consistent AI behavior across sessions, teams, and projects.',
    icon: '🔄',
    details: [
      'Boot sequence reads AI_RULES_AND_BEST_PRACTICES.md first',
      'Auto-generates missing state files from templates',
      'Consistent behavior across different AI models and providers',
      'Version-controlled rules evolve with your project',
      'Reproducible workflows for debugging and auditing'
    ]
  },
  {
    name: 'Open Source Core',
    description: 'MIT licensed framework with enterprise features available. No vendor lock-in.',
    icon: '🌟',
    details: [
      'MIT License - use freely in commercial and open source projects',
      'Works with any AI model: Claude, GPT-4, Gemini, and more',
      'Self-contained markdown files - no external dependencies',
      'Community-driven development and improvements',
      'Enterprise support and custom features available'
    ]
  },
];

export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (name: string) => {
    setExpandedFeature(expandedFeature === name ? null : name);
  };

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for safe AI-assisted development
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built by developers, for developers. Prevent AI disasters before they happen.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Self-bootstrapping framework with safety-first principles, persistent memory, and built-in compliance features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-all cursor-pointer"
                onClick={() => toggleFeature(feature.name)}
              >
                <dt className="flex items-center justify-between gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center gap-x-3">
                    <span className="text-3xl">{feature.icon}</span>
                    {feature.name}
                  </div>
                  <span className="text-blue-600 text-xl">
                    {expandedFeature === feature.name ? '−' : '+'}
                  </span>
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
                {expandedFeature === feature.name && (
                  <dd className="mt-4 pt-4 border-t border-gray-200">
                    <ul className="space-y-2 text-sm leading-6 text-gray-600">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-x-2">
                          <span className="text-blue-600">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
