import { Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';
import { Tool } from '../types';
import { useFavorites } from '../lib/utils';

interface ToolCardProps {
  tool: Tool;
  key?: string | number;
}

function toCategoryColor(cat: string) {
  const normalized = cat.toLowerCase();
  if (normalized.includes('startup') || normalized.includes('cost')) return 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
  if (normalized.includes('efficiency') || normalized.includes('feed')) return 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400';
  if (normalized.includes('economics') || normalized.includes('profit') || normalized.includes('harvest')) return 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400';
  if (normalized.includes('comparison') || normalized.includes('compare')) return 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400';
  return 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400';
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(tool.id);
  const colorClass = toCategoryColor(tool.category);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full group">
      <div>
        <div className="flex justify-between items-start">
          <span className={`${colorClass} px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide transition-colors`}>
            {tool.category}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(tool.id);
            }}
            className="text-slate-300 dark:text-slate-600 hover:text-red-400 dark:hover:text-red-400 transition-colors focus:outline-none"
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500 dark:text-red-500' : ''}`} />
          </button>
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-800 dark:text-slate-100 transition-colors">{tool.title}</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 transition-colors">{tool.description}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors">
        <div className="text-xs text-slate-400 dark:text-slate-500 transition-colors">
          Outcome: <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm whitespace-nowrap transition-colors">{tool.primaryOutcome}</span>
        </div>
        <Link 
          to={tool.path}
          className="bg-teal-600 dark:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 text-center w-full sm:w-auto transition-colors"
        >
          Launch Tool
        </Link>
      </div>
    </div>
  );
}
