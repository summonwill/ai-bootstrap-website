import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-blue-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build reliable AI systems?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Start with open source today, or contact us about enterprise features.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://github.com/summonwill/AI-Bootstrap-System"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              View on GitHub
            </Link>
            <a
              href="mailto:hello@aibootstrapsystems.com"
              className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
            >
              Contact Sales <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
