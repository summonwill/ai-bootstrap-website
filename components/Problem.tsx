export default function Problem() {
  return (
    <section className="py-24 sm:py-32 bg-red-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Problem: AI is Fast — But Unstable
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AI coding tools accelerate development, but at what cost?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Uncontrolled Refactors',
                description: 'Entire files rewritten without warning, breaking existing patterns'
              },
              {
                title: 'Lost Context',
                description: 'Agents forget previous decisions, leading to inconsistent code'
              },
              {
                title: 'No Audit Trail',
                description: 'Changes happen without documentation or reasoning'
              },
              {
                title: 'Compliance Nightmares',
                description: 'No way to prove what AI did or why for regulatory requirements'
              },
              {
                title: 'Architecture Drift',
                description: 'AI makes decisions that conflict with your system design'
              },
              {
                title: 'High-Risk Operations',
                description: 'Dangerous bulk changes with no validation or safeguards'
              }
            ].map((problem) => (
              <div key={problem.title} className="relative bg-white rounded-lg p-6 shadow-sm border border-red-200">
                <dt className="text-base font-semibold leading-7 text-red-900">
                  ❌ {problem.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {problem.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-900">
              Development teams want AI acceleration <span className="text-red-600">without compromising safety</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
