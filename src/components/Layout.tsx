import { Link, Outlet, useLocation } from "react-router-dom";
import { Droplet, Heart, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import CookieBanner from "./CookieBanner";
import { useLocalStorage } from "../lib/utils";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    "aqua-dark-mode",
    false,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home",
      "/tools/estimate": "Cost Estimator",
      "/tools/feed": "Feed & FCR Calculator",
      "/tools/harvest": "Harvest Calculator",
      "/tools/profit": "Profit & Breakeven",
      "/tools/compare": "System Comparison",
      "/favorites": "Favorites",
      "/about": "About",
      "/contact": "Contact Us",
      "/legal": "Legal & Disclaimer",
      "/privacy": "Privacy Policy",
      "/terms": "Terms of Service",
    };
    const pTitle = titles[location.pathname];
    document.title = pTitle
      ? `${pTitle} | Aqua by Rural Utility Cost`
      : "Aqua - Aquaculture Economics & Planning | Rural Utility Cost";

    // Auto-scroll to top on route change for better mobile UX
    window.scrollTo(0, 0);

    // GTag page view tracking
    try {
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location.pathname,
        });
      }
    } catch (e) {
      console.warn("GTag error", e);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Estimate", path: "/tools/estimate" },
    { name: "Feed", path: "/tools/feed" },
    { name: "Harvest", path: "/tools/harvest" },
    { name: "Profit", path: "/tools/profit" },
    { name: "Compare", path: "/tools/compare" },
    { name: "Favorites", path: "/favorites" },
  ];

  const footerLinks = [
    { name: "About", path: "/about", external: false },
    {
      name: "Contact",
      path: "https://www.ruralutilitycost.com/contact",
      external: true,
    },
    {
      name: "Disclaimer",
      path: "https://www.ruralutilitycost.com/disclaimer",
      external: true,
    },
    {
      name: "Privacy",
      path: "https://www.ruralutilitycost.com/privacy-policy",
      external: true,
    },
    {
      name: "Terms",
      path: "https://www.ruralutilitycost.com/terms-of-use",
      external: true,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#f0faf9] dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between sticky top-0 z-50 transition-colors duration-200">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-teal-700 dark:bg-teal-600 text-white p-1.5 rounded transition-colors group-hover:bg-teal-800 dark:group-hover:bg-teal-500">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold leading-tight">
                Rural Utility Cost
              </p>
              <h1 className="text-xl font-extrabold text-teal-900 dark:text-teal-400 leading-tight tracking-tight">
                Aqua
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors min-h-[48px] flex items-center ${
                isActive(link.path)
                  ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center border-slate-200 dark:border-slate-800 lg:border-l pl-0 lg:pl-6 space-x-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2 min-h-[48px] flex items-center justify-center min-w-[48px] rounded-md transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2 min-h-[48px] flex items-center justify-center min-w-[48px] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex items-center ml-2">
            <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 transition-colors"></div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="w-full mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 lg:hidden pb-1 space-y-1 transition-colors duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium min-h-[48px] flex items-center transition-colors ${
                  isActive(link.path)
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-auto transition-colors duration-200">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">
            aqua.ruralutilitycost.com
          </span>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 dark:hover:text-teal-400 min-h-[48px] flex items-center transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-teal-600 dark:hover:text-teal-400 min-h-[48px] flex items-center transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
            <a
              href="https://ruralutilitycost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 min-h-[48px] flex items-center transition-colors"
            >
              Master Site
            </a>
          </nav>
        </div>
        <div className="text-center sm:text-right mt-4 sm:mt-0 text-[10px] leading-relaxed max-w-xs sm:ml-auto space-y-1">
          <p className="font-medium text-slate-600 dark:text-slate-400">
            Disclaimer: Results are estimates only.
          </p>
          <p>
            <a
              href="https://www.ruralutilitycost.com/disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-500 hover:text-teal-700 dark:hover:text-teal-400 hover:underline inline-flex items-center min-h-[24px] transition-colors"
            >
              See full legal disclaimer
            </a>
          </p>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
