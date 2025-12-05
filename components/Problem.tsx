'use client';

import { useState } from 'react';

const problems = [
  {
    title: 'Uncontrolled Refactors',
    description: 'Entire files rewritten without warning, breaking existing patterns',
    examples: [
      'AI rewrites entire functions when asked to add a single line',
      'Converts working patterns to different styles inconsistently',
      'Removes comments and documentation during refactors',
      'Changes variable naming conventions across the codebase',
      'Introduces breaking changes to public APIs without notification'
    ]
  },
  {
    title: 'Lost Context',
    description: 'Agents forget previous decisions, leading to inconsistent code',
    examples: [
      'Forgets architectural decisions made in previous sessions',
      'Rewrites code that was carefully optimized earlier',
      'Introduces duplicate logic because it can\'t remember what exists',
      'Contradicts previous design patterns and conventions',
      'Loses track of project-specific requirements and constraints'
    ]
  },
  {
    title: 'No Audit Trail',
    description: 'Changes happen without documentation or reasoning',
    examples: [
      'No record of why specific changes were made',
      'Can\'t trace which AI session caused a bug',
      'No way to review AI decisions for compliance',
      'Missing documentation for code modifications',
      'Impossible to recreate the reasoning behind changes'
    ]
  },
  {
    title: 'Compliance Nightmares',
    description: 'No way to prove what AI did or why for regulatory requirements',
    examples: [
      'SOC2 audits fail due to lack of change documentation',
      'HIPAA compliance requires human approval records',
      'Financial services regulations demand full audit trails',
      'No proof of human oversight for critical system changes',
      'Can\'t demonstrate due diligence in security-sensitive code'
    ]
  },
  {
    title: 'Architecture Drift',
    description: 'AI makes decisions that conflict with your system design',
    examples: [
      'Introduces new dependencies without architectural review',
      'Violates established separation of concerns',
      'Creates circular dependencies in module structure',
      'Bypasses established design patterns for expedience',
      'Makes changes that conflict with scalability goals'
    ]
  },
  {
    title: 'High-Risk Operations',
    description: 'Dangerous bulk changes with no validation or safeguards',
    examples: [
      'Mass file modifications with no verification step',
      'Database schema changes applied without backups',
      'Bulk deletions without confirmation or dry-run',
      'Production config changes with no rollback plan',
      'Security-critical code modified without review gates'
    ]
  }
];

export default function Problem() {
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  const toggleProblem = (title: string) => {
    setExpandedProblem(expandedProblem === title ? null : title);
  };

  return (
    <section className="py-24 sm:py-32 bg-red-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="mx-auto max-w-4xl cursor-pointer"
          onClick={() => setIsMainExpanded(!isMainExpanded)}
        >
          <div className="flex items-center justify-between bg-white rounded-lg p-6 shadow-lg border-2 border-red-300 hover:border-red-500 transition-all">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Problem: AI is Fast — But Unstable
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                AI coding tools accelerate development, but at what cost?
              </p>
            </div>
            <span className="text-red-600 text-4xl ml-4">
              {isMainExpanded ? '−' : '+'}
            </span>
          </div>
        </div>

        {isMainExpanded && (
          <div className="mx-auto mt-8 max-w-4xl">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {problems.map((problem) => (
                <div 
                  key={problem.title} 
                  className="relative bg-white rounded-lg p-6 shadow-sm border border-red-200 hover:border-red-400 transition-all cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProblem(problem.title);
                  }}
                >
                  <dt className="flex items-center justify-between text-base font-semibold leading-7 text-red-900">
                    <span className="flex items-center gap-2">
                      <span>❌</span>
                      <span>{problem.title}</span>
                    </span>
                    <span className="text-red-600 text-xl">
                      {expandedProblem === problem.title ? '−' : '+'}
                    </span>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {problem.description}
                  </dd>
                  
                  {expandedProblem === problem.title && (
                    <dd className="mt-4 pt-4 border-t border-red-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                      <ul className="space-y-2 text-sm leading-6 text-gray-600">
                        {problem.examples.map((example, idx) => (
                          <li key={idx} className="flex gap-x-2">
                            <span className="text-red-600">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  )}
                </div>
              ))}
            </dl>
            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-gray-900">
                Development teams want AI acceleration <span className="text-red-600">without compromising safety</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
