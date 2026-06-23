import { ChangeEvent } from 'react';
import { formatNumber, useLocalStorage } from '../../lib/utils';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';
import FinancialSummaryBar from '../../components/FinancialSummaryBar';

export default function HarvestCalculator() {
  const [inputs, setInputs] = useLocalStorage('aqua-harvest-calculator-inputs', {
    areaVolume: 10, // units
    stockingDensity: 500, // per unit
    survivalRate: 80, // %
    averageHarvestWeightKg: 0.8,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  };

  const totalStocked = inputs.areaVolume * inputs.stockingDensity;
  const totalSurvivors = totalStocked * (inputs.survivalRate / 100);
  const totalHarvestYieldKg = totalSurvivors * inputs.averageHarvestWeightKg;

  return (
    <>
      <FinancialSummaryBar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6">
        <SEO 
          title="Harvest & Biomass Estimator" 
          description="Estimate harvesting outcomes including survival rates, net harvest weight, and total facility biomass."
          keywords="aquaculture harvest calculator, fish biomass estimator, stocking density to harvest, fish survival rate"
        />
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-medium text-slate-900 dark:text-slate-100 mb-2 transition-colors">Harvest & Survival</h1>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">Estimate total harvest output based on stocking densities and anticipated mortality.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Production Area/Volume</label>
                <input type="number" name="areaVolume" value={inputs.areaVolume} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Stocking Density / Unit</label>
                <input type="number" name="stockingDensity" value={inputs.stockingDensity} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Survival Rate (%)</label>
                <input type="number" name="survivalRate" value={inputs.survivalRate} onChange={handleInputChange} min="0" max="100" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Avg. Harvest Wt. (kg)</label>
                <input type="number" name="averageHarvestWeightKg" value={inputs.averageHarvestWeightKg} onChange={handleInputChange} min="0" step="0.1" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[400px] space-y-6 pt-0 lg:pt-16">
          <div className="bg-[#f8fffe] dark:bg-slate-900 p-6 rounded-xl border border-teal-700 transition-colors">
            <h3 className="font-medium text-teal-700 dark:text-teal-400 mb-4 whitespace-nowrap transition-colors">Yield Breakdown</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Total Stocked</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatNumber(totalStocked)}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Estimated Survivors</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatNumber(totalSurvivors)}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Total Harvest Yield</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatNumber(totalHarvestYieldKg)} kg</p>
              </div>
            </div>
          </div>

          <Disclaimer variant="light" />
        </div>
      </div>
    </>
  );
}
