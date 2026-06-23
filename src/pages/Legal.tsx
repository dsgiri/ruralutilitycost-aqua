import SEO from '../components/SEO';
import { defaultDisclaimerText } from '../components/Disclaimer';

export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <SEO 
        title="Legal & Disclaimer" 
        description="Legal information and disclaimers for the Aqua estimators and tools." 
      />
      <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors">Legal & Disclaimer</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 transition-colors">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 mb-8 transition-colors">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0 mb-3 transition-colors">Universal Tool Disclaimer</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed m-0 transition-colors">
              {defaultDisclaimerText}
            </p>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 transition-colors">Estimates Only</h2>
          <p className="mb-4">
            All data, calculations, and projections provided by the Aqua estimators are <strong className="dark:text-slate-200">estimates only</strong>. They are intended for educational, planning, and decision-support purposes and do not constitute a guarantee of future performance.
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 transition-colors">Variables and Risks</h2>
          <p className="mb-4">
            Actual outcomes in aquaculture are highly dependent on complex, unpredictable biological and environmental factors. Your actual results <strong className="dark:text-slate-200">will vary</strong> based on, but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Water quality fluctuations and dissolved oxygen availability.</li>
            <li>Disease outbreaks, weather events, and variable mortality rates.</li>
            <li>Changes in local market prices for harvested products.</li>
            <li>Fluctuations in the cost of commercial feed, energy, and labor.</li>
            <li>Variations in feed conversion performance under field conditions.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 transition-colors">Not Professional Advice</h2>
          <p className="mb-4">
            The Aqua app does not replace professional advice. Information provided here does not constitute veterinary, engineering, legal, environmental compliance, or financial advice. 
          </p>
          <p className="mb-4 font-semibold text-slate-900 dark:text-slate-100 transition-colors">
            Users must verify important planning and investment decisions independently using certified professionals (e.g., aquatic veterinarians, agricultural economists, and structural engineers).
          </p>
        </div>
      </div>
    </div>
  );
}
