import { formatCurrency, formatNumber } from '../lib/utils';

interface FinancialSummaryBarProps {
  totalCost?: number | null;
  grossRevenue?: number | null;
  netProfit?: number | null;
  breakeven?: number | null;
}

export default function FinancialSummaryBar({
  totalCost = null,
  grossRevenue = null,
  netProfit = null,
  breakeven = null
}: FinancialSummaryBarProps) {
  return (
    <div className="sticky top-[73px] z-40 bg-[#f8fffe] dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 shadow-sm mb-6 px-4 py-3 sm:px-6 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 min-w-[120px]">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">Total Cost</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors">
            {totalCost !== null ? formatCurrency(totalCost) : '-'}
          </p>
        </div>
        <div className="flex-1 min-w-[120px] sm:border-l border-slate-200 dark:border-slate-800 sm:pl-4 transition-colors">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">Gross Revenue</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors">
            {grossRevenue !== null ? formatCurrency(grossRevenue) : '-'}
          </p>
        </div>
        <div className="flex-1 min-w-[120px] sm:border-l border-slate-200 dark:border-slate-800 sm:pl-4 transition-colors">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">Net Profit</p>
          <p className={`text-lg font-semibold transition-colors ${netProfit !== null ? (netProfit >= 0 ? 'text-teal-700 dark:text-teal-400' : 'text-red-600 dark:text-red-400') : 'text-slate-900 dark:text-slate-100'}`}>
            {netProfit !== null ? formatCurrency(netProfit) : '-'}
          </p>
        </div>
        <div className="flex-1 min-w-[120px] sm:border-l border-slate-200 dark:border-slate-800 sm:pl-4 transition-colors">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">Breakeven $/kg</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 transition-colors">
            {breakeven !== null ? formatCurrency(breakeven, true) : '-'}
          </p>
        </div>
      </div>
    </div>
  );
}
