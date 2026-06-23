import { TOOLS } from '../data';
import ToolCard from '../components/ToolCard';
import { Droplet, TrendingUp, Calculator } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <SEO 
        title="Aquaculture Economics Hub" 
        description="Decision-support tools for fish farms, ponds, tanks, and aquaponics. Estimate startup costs, track feed efficiency, and model scenarios for aquaculture."
        keywords="aquaculture costs, fish farming economics, aquaponics budget, feed conversion ratio calculator, aquaculture profit"
      />
      <aside className="w-full md:w-64 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-700 text-white p-2 rounded">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-teal-900 uppercase tracking-wide">Economics Hub</h3>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 transition-colors">
            Decision-support tools for fish farms, ponds, tanks, and aquaponics. Estimate startup costs, track feed efficiency, and model scenarios.
          </p>
        </div>

        <div className="bg-teal-900 dark:bg-teal-800 rounded-xl p-5 text-white shadow-lg transition-colors">
          <h4 className="text-teal-400 text-xs font-bold uppercase mb-2">Pro Tip</h4>
          <p className="text-sm leading-relaxed text-teal-50">
            Feed often accounts for 50-70% of variable operating costs. Use the FCR tool to model efficiency gains.
          </p>
        </div>
      </aside>

      <section className="flex-1 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors">Planning Tools</h2>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 rounded-full text-xs font-semibold transition-colors">
              {TOOLS.length} Tools Available
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 mt-8 transition-colors">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 items-center flex gap-2 transition-colors">
            <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-500" />
            Data-Driven Decisions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 transition-colors">
                Whether you are running a high-intensity tank culture, managing extensive ponds, or exploring aquaponics, understanding your economic baseline is critical.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">
                Our calculators help you estimate the impact of feed conversion ratios (FCR), variable survival rates, and volatile market prices on your bottom line.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700 transition-colors">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-3 uppercase tracking-wider transition-colors">Key Fundamentals Evaluated</h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 transition-colors">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <strong>Feed Efficiency:</strong> The largest variable cost in most systems.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <strong>Stocking Density:</strong> Balancing yield potential with carrying capacity.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <strong>Breakeven Modeling:</strong> Knowing your absolute minimum acceptable price.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
