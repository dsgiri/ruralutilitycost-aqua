import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const FAQ_DATA = [
  {
    question: "How do I calculate feed conversion ratio (FCR) for fish?",
    answer: "FCR is calculated by dividing the total weight of the feed given to the fish by the total weight gained by the fish over a specific period. The formula is: FCR = Total Feed Given ÷ Total Weight Gained. For example, if you feed your fish 70 lbs of feed and they gain 40 lbs, your FCR is 70 ÷ 40 = 1.75."
  },
  {
    question: "What is a good FCR for aquaculture?",
    answer: "A 'good' FCR varies significantly by species and the production system you are using. For example, Tilapia often have an FCR between 1.2 and 1.7, whereas some carnivorous species might be higher. There is no single universal number. You should establish a baseline for your specific operation and continually monitor it to identify inefficiencies."
  },
  {
    question: "How much does feed cost as a percentage of total aquaculture operating costs?",
    answer: "Feed is typically the largest single expense in a commercial aquaculture operation, consistently accounting for 50% to 70% of total variable operating costs. Because it makes up such a large portion of your expenses, even small improvements in your Feed Conversion Ratio (FCR) can yield massive impacts on your profitability."
  },
  {
    question: "What's the breakeven price for fish farming?",
    answer: "The breakeven price is the absolute minimum price you must sell your fish for in order to cover all of your costs. You calculate it by dividing your Total Costs (both fixed setup costs and variable operating costs) by your Total Harvest Yield (in kg or lbs). Selling above this price generates profit; selling below it results in a loss."
  },
  {
    question: "Pond vs. tank vs. RAS — which is more cost-effective?",
    answer: "Cost-effectiveness depends entirely on your scale, market price, and available resources. Extensive Ponds generally have lower setup and energy costs but require more land and often yield less per unit of area. Intensive RAS (Recirculating Aquaculture Systems) have very high initial setup and energy costs, but can produce much higher yields in a smaller footprint with better environmental control. You must use the System Comparison tool to model both scenarios based on your specific local costs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    
    if (isOpening) {
      trackEvent('faq_expanded', { question: FAQ_DATA[index].question });
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      <SEO 
        title="Frequently Asked Questions" 
        description="Common questions about aquaculture economics, feed conversion ratios (FCR), breakeven points, and system comparisons."
        keywords="aquaculture FAQ, FCR calculation, fish farming breakeven, RAS vs pond costs"
      />

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 transition-colors">
          Get quick answers on aquaculture economics and production metrics.
        </p>
      </header>

      <div className="space-y-4">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100 pr-8">{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 leading-relaxed transition-colors">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
