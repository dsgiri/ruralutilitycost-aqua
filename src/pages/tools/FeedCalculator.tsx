import { ChangeEvent } from 'react';
import { formatCurrency, formatNumber, useLocalStorage } from '../../lib/utils';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';
import FinancialSummaryBar from '../../components/FinancialSummaryBar';

export default function FeedCalculator() {
  const [inputs, setInputs] = useLocalStorage('aqua-feed-calculator-inputs', {
    totalAnimalsStocked: 5000,
    survivalRate: 85, // percentage
    targetHarvestWeightKg: 0.5,
    initialWeightKg: 0.01,
    fcr: 1.5,
    feedCostPerTon: 1200,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  };

  const finalAnimals = inputs.totalAnimalsStocked * (inputs.survivalRate / 100);
  const weightGainPerAnimal = Math.max(0, inputs.targetHarvestWeightKg - inputs.initialWeightKg);
  const totalBiomassGainKg = finalAnimals * weightGainPerAnimal;
  const totalFeedRequiredKg = totalBiomassGainKg * inputs.fcr;
  const totalFeedCost = (totalFeedRequiredKg / 1000) * inputs.feedCostPerTon;

  return (
    <>
      <FinancialSummaryBar 
        totalCost={totalFeedCost}
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 py-6">
        <div className="flex-1 space-y-6">
          <header>
            <SEO 
              title="Feed & FCR Calculator" 
              description="Model feed conversion ratio, feed consumption, and total feed cost for an aquaculture grow-out cycle."
              keywords="aquaculture feed calculator, FCR calculator, feed conversion ratio, fish feed cost"
            />
            <h1 className="text-3xl font-medium text-slate-900 dark:text-slate-100 mb-2 transition-colors">Feed & FCR Calculator</h1>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">Model feed requirements based on target growth, survival, and conversion efficiency.</p>
          </header>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 transition-colors">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Total Animals Stocked</label>
                <input type="number" name="totalAnimalsStocked" value={inputs.totalAnimalsStocked} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Estimated Survival (%)</label>
                <input type="number" name="survivalRate" value={inputs.survivalRate} onChange={handleInputChange} min="0" max="100" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Initial Weight (kg/animal)</label>
                <input type="number" name="initialWeightKg" value={inputs.initialWeightKg} onChange={handleInputChange} min="0" step="0.01" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Target Harvest Wt (kg/animal)</label>
                <input type="number" name="targetHarvestWeightKg" value={inputs.targetHarvestWeightKg} onChange={handleInputChange} min="0" step="0.01" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Feed Conversion Ratio (FCR)</label>
                <input type="number" name="fcr" value={inputs.fcr} onChange={handleInputChange} min="0.1" step="0.1" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Feed Cost per Ton ($)</label>
                <input type="number" name="feedCostPerTon" value={inputs.feedCostPerTon} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[400px] space-y-6 pt-0 lg:pt-16">
          <div className="bg-[#f8fffe] dark:bg-slate-900 p-6 rounded-xl border border-teal-700 transition-colors">
            <h3 className="font-medium text-teal-700 dark:text-teal-400 mb-4 whitespace-nowrap transition-colors">Feed Breakdown</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Total Biomass Gain</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatNumber(totalBiomassGainKg)} kg</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Total Feed Required</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatNumber(totalFeedRequiredKg)} kg</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Feed Cost / kg Gain</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(inputs.feedCostPerTon / 1000 * inputs.fcr)}</p>
              </div>
            </div>
          </div>

          <Disclaimer variant="light" />
        </div>
      </div>
    </>
  );
}
