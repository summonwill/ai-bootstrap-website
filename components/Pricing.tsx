import Link from 'next/link';

const tiers = [
  {
    name: 'Open Source',
    id: 'free',
    href: 'https://github.com/summonwill/AI-Bootstrap-Framework',
    price: '$0',
    description: 'Framework files for manual governance',
    features: [
      'AI Bootstrap Framework (governance files)',
      'Templates (TODO, SESSION_NOTES, AI_RULES)',
      'Manual workflow documentation',
      'Community support',
      'MIT License - use anywhere',
    ],
    cta: 'Download Free',
    highlighted: false,
  },
  {
    name: 'Professional',
    id: 'pro',
    href: '#contact',
    price: '$19',
    description: 'Founding Members — automated governance with ABS Platform',
    features: [
      'ABS Platform desktop app (Windows, macOS, Linux)',
      'Multi-provider AI (OpenAI, Claude, Gemini, Ollama)',
      'Governance auto-loaded into every session',
      'AI file operations (create, update, delete)',
      'Session tracking & auto-documentation',
      'Bring your own API keys',
      'Priority Discord & email support',
    ],
    cta: 'Launch: Jan 2026',
    highlighted: false,
  },
  {
    name: 'Team',
    id: 'team',
    href: '#contact',
    price: '$299',
    description: 'For teams needing consistent governance across projects',
    features: [
      'Everything in Professional',
      'Up to 20 ABS Platform licenses',
      'Multi-repo governance dashboard',
      'Shared team policies & workspace sync',
      'Mobile apps (iOS & Android)',
      'Slack/Discord alert integrations',
      'Advanced audit logging',
      'Priority team support',
    ],
    cta: 'Q3 2026',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    href: '#contact',
    price: 'Custom',
    description: 'Governed multi-agent teams with compliance',
    features: [
      'Everything in Team',
      'Multi-agent architecture (specialized AI teams)',
      'SOC2 / HIPAA compliance mode',
      'SSO integration (Okta, Azure AD, Google)',
      'Managed API keys (no BYOK required)',
      'Dedicated support & SLA',
      'Determinism certification program',
      'Custom training & implementation',
    ],
    cta: 'Contact Sales',
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start free with open source. <strong>Founding Members</strong> lock in $19/mo forever — price increases to $24/mo (Q2) and $29/mo (Q3+).
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ${
                tier.highlighted
                  ? 'bg-blue-600 text-white ring-2 ring-blue-600'
                  : 'bg-white ring-1 ring-gray-200'
              }`}
            >
              <div>
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    tier.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      tier.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && tier.price !== '$0' && (
                    <span
                      className={`text-sm font-semibold leading-6 ${
                        tier.highlighted ? 'text-blue-100' : 'text-gray-600'
                      }`}
                    >
                      /month
                    </span>
                  )}
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    tier.highlighted ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    tier.highlighted ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className={`h-6 w-5 flex-none ${
                          tier.highlighted ? 'text-white' : 'text-blue-600'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                target={tier.id === 'free' ? '_blank' : undefined}
                rel={tier.id === 'free' ? 'noopener noreferrer' : undefined}
                className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 focus-visible:outline-white'
                    : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
