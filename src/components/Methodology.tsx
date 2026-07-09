import React from 'react';

interface MethodologyProps {
  formula: string;
  assumptions: string[];
  workedExample: React.ReactNode;
}

export default function Methodology({ formula, assumptions, workedExample }: MethodologyProps) {
  return (
    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors">Methodology & Assumptions</h2>
      
      <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Core Formula</h3>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 font-mono text-slate-800 dark:text-slate-200">
            {formula}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Assumptions</h3>
          <ul className="list-disc pl-5 space-y-1">
            {assumptions.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Worked Example</h3>
          <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
            {workedExample}
          </div>
        </div>
      </div>
    </div>
  );
}
