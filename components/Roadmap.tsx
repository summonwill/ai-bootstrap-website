export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Product Roadmap
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to transparent development. Here&apos;s what&apos;s coming and when.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {[
              {
                quarter: 'Q1 2025',
                status: 'In Progress',
                color: 'green',
                items: [
                  '✅ Bootstrap Pack v1.0 (AI_RULES_AND_BEST_PRACTICES.md)',
                  '✅ Landing page and documentation',
                  '✅ GitHub templates and examples',
                  '🔄 Community building and early adoption'
                ]
              },
              {
                quarter: 'Q2 2025',
                status: 'Coming Soon',
                color: 'blue',
                items: [
                  'VS Code extension (governance validation)',
                  'GitHub Action for CI/CD enforcement',
                  'Professional tier launch ($39/mo)',
                  'Determinism Test Suite v1.0',
                  'First paid teams onboarding'
                ]
              },
              {
                quarter: 'Q3 2025',
                status: 'Planned',
                color: 'gray',
                items: [
                  'Team tier launch ($299/mo)',
                  'Compliance dashboards (SOC2/HIPAA mode)',
                  'Enterprise onboarding program',
                  'Hosted platform beta',
                  'Multi-team collaboration features'
                ]
              },
              {
                quarter: 'Q4 2025',
                status: 'Planned',
                color: 'gray',
                items: [
                  'Enterprise tier general availability',
                  'Partnerships with LLM providers (OpenAI, Anthropic)',
                  'Open Standard v1.0 release',
                  'Determinism Certification Program',
                  'Full enterprise platform with SSO'
                ]
              }
            ].map((phase) => (
              <div key={phase.quarter} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{phase.quarter}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    phase.color === 'green' ? 'bg-green-100 text-green-800' :
                    phase.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-lg mt-0.5">
                        {item.startsWith('✅') ? '✅' : item.startsWith('🔄') ? '🔄' : '📅'}
                      </span>
                      <span>{item.replace(/^[✅🔄📅]\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Want to influence our roadmap?
            </h3>
            <p className="text-gray-600 mb-4">
              We&apos;re building in the open. Join our community to suggest features and vote on priorities.
            </p>
            <a 
              href="https://github.com/summonwill/AI-Bootstrap-System" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              Join the Discussion on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
