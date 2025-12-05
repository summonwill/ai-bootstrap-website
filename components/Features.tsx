const features = [
  {
    name: 'Multi-Mind Verification',
    description: 'Built-in Builder/Critic/Spec Guardian roles ensure changes are validated before execution.',
    icon: '🧠',
  },
  {
    name: 'Persistent State Management',
    description: 'Session continuity across sprints with TODO.md, SESSION_NOTES.md, and context tracking.',
    icon: '💾',
  },
  {
    name: 'Risk Classification System',
    description: 'Automatic HIGH/MEDIUM/LOW risk tagging with engineer approval workflows for critical changes.',
    icon: '⚠️',
  },
  {
    name: 'Built-in Audit Trails',
    description: 'Complete change history with reasoning, verification steps, and compliance documentation.',
    icon: '📋',
  },
  {
    name: 'Deterministic Behavior',
    description: 'Boot protocol ensures consistent AI behavior across sessions, teams, and projects.',
    icon: '🔄',
  },
  {
    name: 'Open Source Core',
    description: 'MIT licensed framework with enterprise features available. No vendor lock-in.',
    icon: '🌟',
  },
];

export default function Features() {
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
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-colors">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
