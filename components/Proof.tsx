export default function Proof() {
  return (
    <section id="proof" className="py-24 sm:py-32 bg-green-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proof: Deterministic AI in Action
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. See the governance OS at work with real examples.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <dt className="text-lg font-semibold leading-7 text-gray-900 mb-4">
                📊 Determinism Benchmark
              </dt>
              <dd className="text-base leading-7 text-gray-600 mb-6">
                See side-by-side comparisons of AI behavior with and without governance. 
                Our tests show 90-98% diff consistency vs 20-40% without rules.
              </dd>
              <a 
                href="https://github.com/summonwill/AI-Bootstrap-Framework" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
              >
                View Benchmark Results →
              </a>
            </div>

            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <dt className="text-lg font-semibold leading-7 text-gray-900 mb-4">
                📋 Sample Audit Logs
              </dt>
              <dd className="text-base leading-7 text-gray-600 mb-6">
                Download real SESSION_NOTES.md files showing how agents document decisions, 
                classify risk, and maintain full audit trails.
              </dd>
              <a 
                href="https://github.com/summonwill/AI-Bootstrap-Framework" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
              >
                Download Sample Logs →
              </a>
            </div>

            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <dt className="text-lg font-semibold leading-7 text-gray-900 mb-4">
                🔬 Live Demo Repository
              </dt>
              <dd className="text-base leading-7 text-gray-600 mb-6">
                Explore a real repository using the governance OS. See commit history, 
                change logs, and how rules constrain AI behavior.
              </dd>
              <a 
                href="https://github.com/summonwill/AI-Bootstrap-Framework" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
              >
                Explore Demo Repo →
              </a>
            </div>
          </dl>

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Technical Whitepaper: Deterministic AI Development
            </h3>
            <p className="text-base leading-7 text-gray-600 mb-6">
              Our comprehensive whitepaper details the methodology, metrics, and test results that prove 
              governance-driven AI achieves 90%+ behavioral consistency across sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/AI-Bootstrap-Systems-Determinism-Whitepaper.pdf" 
                download
                className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
              >
                Download Whitepaper (PDF)
              </a>
              <a 
                href="https://github.com/summonwill/AI-Bootstrap-Framework" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                View Test Suite on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
