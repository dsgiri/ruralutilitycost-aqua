import { ChangeEvent } from 'react';
import { formatCurrency, formatNumber, useLocalStorage } from '../../lib/utils';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';
import FinancialSummaryBar from '../../components/FinancialSummaryBar';

export default function ProfitCalculator() {
  const [inputs, setInputs] = useLocalStorage('aqua-profit-calculator-inputs', {
    totalHarvestKg: 4000,
    marketPricePerKg: 6.50,
    totalVariableCost: 15000,
    totalFixedCost: 5000,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  };

  const totalRevenue = inputs.totalHarvestKg * inputs.marketPricePerKg;
  const totalCost = inputs.totalVariableCost + inputs.totalFixedCost;
  const grossProfit = totalRevenue - totalCost;
  const profitMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;
  
  const breakevenCostPerKg = inputs.totalHarvestKg > 0 ? totalCost / inputs.totalHarvestKg : 0;
  const breakevenPrice = totalCost / (inputs.totalHarvestKg || 1);

  return (
    <>
      <FinancialSummaryBar 
        totalCost={totalCost}
        grossRevenue={totalRevenue}
        netProfit={grossProfit}
        breakeven={breakevenCostPerKg}
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6">
        <SEO 
          title="Aquaculture Profit Calculator" 
          description="Analyze overall cycle profitability, gross margin, net revenue, and crucial breakeven metrics for farm viability."
          keywords="aquaculture profit calculator, fish farm breakeven cost, gross margin aquaculture, target ROI fish farming"
        />
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-medium text-slate-900 dark:text-slate-100 mb-2 transition-colors">Profit & Breakeven</h1>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">Analyze overall cycle profitability, margins, and your critical breakeven points.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Total Harvest Yield (kg)</label>
                <input type="number" name="totalHarvestKg" value={inputs.totalHarvestKg} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Market Price ($/kg)</label>
                <input type="number" name="marketPricePerKg" value={inputs.marketPricePerKg} onChange={handleInputChange} min="0" step="0.1" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Total Variable Cost ($)</label>
                <input type="number" name="totalVariableCost" value={inputs.totalVariableCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Total Fixed/Overhead ($)</label>
                <input type="number" name="totalFixedCost" value={inputs.totalFixedCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[400px] space-y-6 pt-0 lg:pt-16">
          <div className="bg-[#f8fffe] dark:bg-slate-900 p-6 rounded-xl border border-teal-700 transition-colors">
            <h3 className="font-medium text-teal-700 dark:text-teal-400 mb-4 whitespace-nowrap transition-colors">Breakeven Analysis</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1 transition-colors">Breakeven Cost / kg</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(breakevenCostPerKg)}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors">Cost to produce each kg.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1 transition-colors">Minimum Sale Price</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(breakevenPrice)}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors">Price to avoid financial loss.</p>
              </div>
            </div>
          </div>

          <Disclaimer variant="light" />
        </div>
      </div>
    </>
  );
}
