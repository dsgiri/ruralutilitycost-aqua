import SEO from '../components/SEO';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
      <SEO 
        title={title}
        description={`Read the ${title} for Aqua by Rural Utility Cost.`}
      />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors">{title}</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-4 transition-colors">
        This is a shared page inherited from the Rural Utility Cost master ecosystem.
      </p>
      <p className="text-slate-600 dark:text-slate-400 transition-colors">
        Please visit the main <a href="https://www.ruralutilitycost.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline transition-colors">ruralutilitycost.com</a> website for the complete and authoritative {title.toLowerCase()} documentation.
      </p>
    </div>
  );
}
