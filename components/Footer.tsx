import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">AI Bootstrap Systems</h3>
            <p className="text-sm leading-6 mb-4">
              The Governance OS for Safe, Predictable AI Development
            </p>
            <p className="text-xs text-gray-400">
              © 2025 AI Bootstrap Systems. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="https://github.com/summonwill/AI-Bootstrap-Framework" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/license" className="hover:text-white transition-colors">MIT License</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:text-white transition-colors">Liability Disclaimer</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-400">
          <p className="mb-2">
            <strong>Disclaimer:</strong> AI Bootstrap Systems provides a governance framework and does not directly modify or execute user code. 
            All code changes must be reviewed and approved by a qualified engineer.
          </p>
          <p>
            The software is provided &quot;as-is&quot; without warranty of any kind. 
            The authors assume no responsibility for bugs, regressions, data loss, or system failures. 
            See our <Link href="/legal/disclaimer" className="underline hover:text-white">liability disclaimer</Link> for details.
          </p>
        </div>
      </div>
    </footer>
  );
}
