export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors">About Aqua</h1>
      
      <div className="prose prose-slate dark:prose-invert prose-teal">
        <p className="lead text-lg text-slate-600 dark:text-slate-400 mb-4 transition-colors">
          Aqua is the dedicated aquaculture and water-production economics hub within the Rural Utility Cost ecosystem.
        </p>
        
        <p className="mb-4 text-slate-700 dark:text-slate-300 transition-colors">
          Our goal is to help fish farmers, aquaculture operators, hatchery managers, and aquaponics enthusiasts make practical planning and budgeting decisions through accessible, clear estimation tools.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4 transition-colors">What We Do</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300 transition-colors">
          The Aqua dashboard provides a suite of decision-support calculators to help you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700 dark:text-slate-300 transition-colors">
          <li>Estimate startup and operating costs for ponds, tanks, cages, and RAS systems.</li>
          <li>Analyze feed efficiency, feed conversion ratios (FCR), and overall feed budgets.</li>
          <li>Model survival rates, yield predictions, and total harvest outcomes based on stocking densities.</li>
          <li>Calculate potential profitability, profit margins, and critical breakeven pricing.</li>
          <li>Run comparative scenarios to decide between different production environments.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-4 transition-colors">Part of Rural Utility Cost</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300 transition-colors">
          As a specialized subdomain of Rural Utility Cost, Aqua integrates agricultural production economics with water-based systems. We share the rigorous, data-first approach of our parent ecosystem, delivering trustworthy and practical interfaces free of clutter.
        </p>
      </div>
    </div>
  );
}
