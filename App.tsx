import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { LanguageProvider } from './i18n/LanguageContext';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { HostelPage } from './pages/HostelPage';
import { SurfSchoolPage } from './pages/SurfSchoolPage';
import { isValidUrlLocale, getBrowserUrlLocale, type UrlLocale } from './i18n/localeUtils';
import { HreflangTags } from './components/seo/HreflangTags';

const LocalizedApp: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  if (!lang || !isValidUrlLocale(lang)) {
    return <Navigate to={`/${getBrowserUrlLocale()}`} replace />;
  }

  return (
    <LanguageProvider urlLocale={lang as UrlLocale}>
      <ScrollToTop />
      <HreflangTags />
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="hostel" element={<HostelPage />} />
          <Route path="surf-school" element={<SurfSchoolPage />} />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

const RootRedirect: React.FC = () => {
  const browserLocale = getBrowserUrlLocale();
  return <Navigate to={`/${browserLocale}`} replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang/*" element={<LocalizedApp />} />
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
