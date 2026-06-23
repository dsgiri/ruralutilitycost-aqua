import { ChangeEvent } from 'react';
import { formatCurrency, useLocalStorage } from '../../lib/utils';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';
import FinancialSummaryBar from '../../components/FinancialSummaryBar';

export default function CostEstimator() {
  const [inputs, setInputs] = useLocalStorage('aqua-cost-estimator-inputs', {
    systemType: 'pond',
    volumeSize: 1, // unit based on system
    stockingDensity: 1000,
    fingerlingCost: 0.25,
    equipmentCost: 5000,
    licensingCost: 500,
    energyCostPerMonth: 150,
    laborCostPerMonth: 500,
    cycleLengthMonths: 6,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'systemType' ? value : Number(value)
    }));
  };

  const totalFingerlingsCost = inputs.stockingDensity * inputs.fingerlingCost * inputs.volumeSize;
  const fixedStartupCost = inputs.equipmentCost + inputs.licensingCost;
  const variableOperatingCost = (inputs.energyCostPerMonth + inputs.laborCostPerMonth) * inputs.cycleLengthMonths + totalFingerlingsCost;
  const totalCost = fixedStartupCost + variableOperatingCost;

  return (
    <>
      <FinancialSummaryBar 
        totalCost={totalCost}
      />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6">
        <SEO 
          title="Aqua Cost Estimator" 
          description="Estimate total startup, variable, and overhead costs for your production system. Evaluate equipment, licensing, energy and labor."
          keywords="aquaculture startup cost, fish farming cost estimator, pond culture costs, RAS cost"
        />
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-medium text-slate-900 dark:text-slate-100 mb-2 transition-colors">Aqua Cost Estimator</h1>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">Model your upfront capital requirements and baseline variable costs per cycle.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 transition-colors">System Parameters</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">System Type</label>
                <select 
                  name="systemType" 
                  value={inputs.systemType} 
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-colors"
                >
                  <option value="pond">Pond Culture</option>
                  <option value="tank">Tank Culture</option>
                  <option value="cage">Cage Culture</option>
                  <option value="ras">RAS</option>
                  <option value="aquaponics">Aquaponics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Units (Acres / m³)</label>
                <input type="number" name="volumeSize" value={inputs.volumeSize} onChange={handleInputChange} min="0.1" step="0.1" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Stocking Density (per unit)</label>
                <input type="number" name="stockingDensity" value={inputs.stockingDensity} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Fingerling Cost ($ each)</label>
                <input type="number" name="fingerlingCost" value={inputs.fingerlingCost} onChange={handleInputChange} min="0" step="0.01" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
            </div>

            <h2 className="text-xl font-medium text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 pt-4 transition-colors">Fixed Setup Costs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Equipment Setup ($)</label>
                <input type="number" name="equipmentCost" value={inputs.equipmentCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Permits / Licenses ($)</label>
                <input type="number" name="licensingCost" value={inputs.licensingCost} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
            </div>

            <h2 className="text-xl font-medium text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 pt-4 transition-colors">Operational Overheads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Energy / Mo ($)</label>
                <input type="number" name="energyCostPerMonth" value={inputs.energyCostPerMonth} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Labor / Mo ($)</label>
                <input type="number" name="laborCostPerMonth" value={inputs.laborCostPerMonth} onChange={handleInputChange} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Cycle (Months)</label>
                <input type="number" name="cycleLengthMonths" value={inputs.cycleLengthMonths} onChange={handleInputChange} min="1" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[400px] space-y-6 pt-0 lg:pt-16">
          <div className="bg-[#f8fffe] dark:bg-slate-900 p-6 rounded-xl border border-teal-700 transition-colors">
            <h3 className="font-medium text-teal-700 dark:text-teal-400 mb-4 whitespace-nowrap transition-colors">Cost Breakdown</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Total Fingerlings</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(totalFingerlingsCost)}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Fixed Startup</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(fixedStartupCost)}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">Operating / Cycle</p>
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(variableOperatingCost - totalFingerlingsCost)}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center transition-colors">Excludes feed and unexpected mortalities.</p>
          </div>

          <Disclaimer variant="light" />
        </div>
      </div>
    </>
  );
}
