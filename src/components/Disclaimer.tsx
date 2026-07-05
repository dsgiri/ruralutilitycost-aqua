import { Link } from 'react-router-dom';

interface DisclaimerProps {
  customText?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export const defaultDisclaimerText = "Disclaimer: These figures are estimates based on standard assumptions and user inputs. This tool is for informational purposes only and does not replace professional financial, legal, engineering, or agricultural advice. We disclaim all liability for decisions, costs, losses, or damages arising from reliance on these results. Please consult qualified local professionals or certified advisors for guidance specific to your situation.";

export default function Disclaimer({ customText, className = '', variant = 'light' }: DisclaimerProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`mt-4 p-4 rounded-lg text-xs leading-relaxed border ${
      isDark 
        ? 'bg-slate-800 border-slate-700 text-slate-400' 
        : 'bg-slate-50 border-slate-200 text-slate-500'
    } ${className}`}>
      <p>
        <strong>Disclaimer:</strong> {customText ? customText.replace(/^Disclaimer:\s*/, '') : defaultDisclaimerText.replace(/^Disclaimer:\s*/, '')}
      </p>
      <div className={`mt-2 ${isDark ? 'text-teal-400' : 'text-teal-600'} hover:underline`}>
        <a href="https://www.ruralopstools.com/disclaimer" target="_blank" rel="noopener noreferrer">Read full legal disclaimer</a>
      </div>
    </div>
  );
}
