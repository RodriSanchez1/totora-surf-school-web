import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { LanguageProvider } from './i18n/LanguageContext';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { HostelPage } from './pages/HostelPage';
import { SurfSchoolPage } from './pages/SurfSchoolPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/hostel" element={<HostelPage />} />
            <Route path="/surf-school" element={<SurfSchoolPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
