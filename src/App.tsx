/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './components/Layout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Legal from './pages/Legal';
import FAQ from './pages/FAQ';
import GenericPage from './pages/GenericPage';
import NotFound from './pages/NotFound';

import CostEstimator from './pages/tools/CostEstimator';
import FeedCalculator from './pages/tools/FeedCalculator';
import HarvestCalculator from './pages/tools/HarvestCalculator';
import ProfitCalculator from './pages/tools/ProfitCalculator';
import SystemComparison from './pages/tools/SystemComparison';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
            
            <Route path="tools">
              <Route path="estimate" element={<CostEstimator />} />
              <Route path="feed" element={<FeedCalculator />} />
              <Route path="harvest" element={<HarvestCalculator />} />
              <Route path="profit" element={<ProfitCalculator />} />
              <Route path="compare" element={<SystemComparison />} />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="legal" element={<Legal />} />
            <Route path="faq" element={<FAQ />} />
            
            {/* Shared generic pages for Rural Ops Tools mapping */}
            <Route path="contact" element={<GenericPage title="Contact Us" />} />
            <Route path="privacy" element={<GenericPage title="Privacy Policy" />} />
            <Route path="terms" element={<GenericPage title="Terms of Service" />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
