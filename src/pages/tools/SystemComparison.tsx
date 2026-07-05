import { formatCurrency, formatNumber, useLocalStorage } from '../../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SEO from '../../components/SEO';
import Disclaimer from '../../components/Disclaimer';
import FinancialSummaryBar from '../../components/FinancialSummaryBar';

interface SystemScenario {
  name: string;
  setupCost: number;
  feedCost: number;
  laborEnergy: number;
  predictedYieldKg: number;
  expectedPrice: number;
}

export default function SystemComparison() {
  const [scenarios, setScenarios] = useLocalStorage<SystemScenario[]>('aqua-system-comparison-scenarios', [
    { name: 'Extensive Pond', setupCost: 8000, feedCost: 5000, laborEnergy: 3000, predictedYieldKg: 4000, expectedPrice: 5.50 },
    { name: 'Intensive RAS', setupCost: 45000, feedCost: 12000, laborEnergy: 15000, predictedYieldKg: 15000, expectedPrice: 6.00 },
  ]);

  const updateScenario = (index: number, field: keyof SystemScenario, value: number | string) => {
    const newScenarios = [...scenarios];
    newScenarios[index] = { ...newScenarios[index], [field]: typeof value === 'string' ? value : Number(value) };
    setScenarios(newScenarios);
  };

  const chartData = scenarios.map(s => {
    const totalCost = s.setupCost + s.feedCost + s.laborEnergy;
    const revenue = s.predictedYieldKg * s.expectedPrice;
    return {
      name: s.name,
      'Total Cost': totalCost,
      Revenue: revenue,
      Profit: revenue - totalCost,
    };
  });

  return (
    <>
      <FinancialSummaryBar />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 py-6">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="flex-1 space-y-6">
          <header>
            <SEO 
              title="Aquaculture System Comparison" 
              description="Compare different aquaculture systems, scenarios, or production strategies to find the most profitable configuration."
              keywords="RAS vs pond culture comparison, aquaculture system modeling, compare fish farming scenarios, intensive vs extensive aquaculture"
            />
            <h1 className="text-3xl font-medium text-slate-900 dark:text-slate-100 mb-2 transition-colors">System Comparison</h1>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">Model economics across different production systems to evaluate comparative advantages.</p>
          </header>

          <section className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <h2 className="text-xl font-medium text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 mb-4 transition-colors">
              Input Parameters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scenarios.map((scenario, i) => (
                <div key={i} className="space-y-4">
                  <input 
                    type="text" 
                    value={scenario.name}
                    onChange={(e) => updateScenario(i, 'name', e.target.value)}
                    className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2 bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-700 focus:border-teal-700 outline-none w-full pb-1 transition-colors"
                  />
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor={`setupCost-${i}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Setup Cost ($)</label>
                      <input id={`setupCost-${i}`} type="number" value={scenario.setupCost} onChange={(e) => updateScenario(i, 'setupCost', e.target.value)} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor={`feedCost-${i}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Feed Cost ($)</label>
                      <input id={`feedCost-${i}`} type="number" value={scenario.feedCost} onChange={(e) => updateScenario(i, 'feedCost', e.target.value)} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor={`laborEnergy-${i}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Labor & Energy ($)</label>
                      <input id={`laborEnergy-${i}`} type="number" value={scenario.laborEnergy} onChange={(e) => updateScenario(i, 'laborEnergy', e.target.value)} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor={`predictedYieldKg-${i}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Yield (kg)</label>
                      <input id={`predictedYieldKg-${i}`} type="number" value={scenario.predictedYieldKg} onChange={(e) => updateScenario(i, 'predictedYieldKg', e.target.value)} className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor={`expectedPrice-${i}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Expected Price ($/kg)</label>
                      <input id={`expectedPrice-${i}`} type="number" value={scenario.expectedPrice} onChange={(e) => updateScenario(i, 'expectedPrice', e.target.value)} step="0.1" className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border p-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Outputs */}
        <div className="w-full lg:w-[400px] space-y-6 pt-0 lg:pt-16">
          <section className="bg-[#f8fffe] dark:bg-slate-900 p-6 rounded-xl border border-teal-700 transition-colors">
            <h3 className="font-medium text-teal-700 dark:text-teal-400 mb-4 whitespace-nowrap transition-colors">Results Breakdown</h3>
            <div className="grid grid-cols-1 gap-4">
              {scenarios.map((scenario, i) => {
                const totalCost = scenario.setupCost + scenario.feedCost + scenario.laborEnergy;
                const breakeven = totalCost / (scenario.predictedYieldKg || 1);
                return (
                  <div key={`res-${i}`} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors flex justify-between items-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider transition-colors">{scenario.name} Breakeven</p>
                    <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">{formatCurrency(breakeven, true)}/kg</p>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 h-[28rem] transition-colors">
            <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4 transition-colors">Projections</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#64748b" tick={{fontSize: 12}} />
                <YAxis tickFormatter={(val) => '$' + (val / 1000) + 'k'} axisLine={false} tickLine={false} stroke="#64748b" tick={{fontSize: 12}} width={45} />
                <Tooltip 
                  formatter={(value: number) => formatCurrency(value)} 
                  contentStyle={{ backgroundColor: 'var(--tooltip-bg, white)', borderColor: 'var(--tooltip-border, #e2e8f0)', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                <Bar dataKey="Total Cost" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Revenue" fill="#0f766e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Profit" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <Disclaimer variant="light" />
        </div>
      </div>
    </>
  );
}
