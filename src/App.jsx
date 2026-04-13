import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PageNotFound from './lib/PageNotFound';
import About from './pages/About';
import Stations from './pages/Stations';
import SearchResults from './pages/SearchResults';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FuelingStations from './pages/FuelingStations';
import EngineOils from './pages/EngineOils';
import NationwideFuel from './pages/NationwideFuel';
import LPGServices from './pages/LPGServices';
import BulkFuelSupply from './pages/BulkFuelSupply';
import SaltMining from './pages/SaltMining';
import GalleryPhoto from './pages/GalleryPhoto';
import TeamMember from './pages/TeamMember';

import CookieConsentBanner from './components/CookieConsentBanner';

const { Pages, Layout } = pagesConfig;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  
  return null;
};

function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/About" element={<About />} />
          <Route path="/Stations" element={<Stations />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FuelingStations" element={<FuelingStations />} />
          <Route path="/EngineOils" element={<EngineOils />} />
          <Route path="/NationwideFuel" element={<NationwideFuel />} />
          <Route path="/LPGServices" element={<LPGServices />} />
          <Route path="/GenoraHaulage" element={<Navigate to="/PalmergHaulage" replace />} />
          <Route path="/GenoraPrestige" element={<Navigate to="/PalmergPrestige" replace />} />
          <Route path="/BulkFuelSupply" element={<BulkFuelSupply />} />
          <Route path="/SaltMining" element={<SaltMining />} />
          <Route path="/GalleryPhoto" element={<GalleryPhoto />} />
          <Route path="/TeamMember" element={<TeamMember />} />
          {Object.entries(Pages).map(([path, Page]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <LayoutWrapper currentPageName={path}>
                  <Page />
                </LayoutWrapper>
              }
            />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <CookieConsentBanner />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App