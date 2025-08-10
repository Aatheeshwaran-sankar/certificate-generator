import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DomainPage from './pages/DomainPage';
import CertificatePreview from './pages/CertificatePreview';

const domains = [
  { id: 'web-development', name: 'Web Development', icon: '🌐' },
  { id: 'data-science', name: 'Data Science', icon: '📊' },
  { id: 'ai-ml', name: 'AI/ML', icon: '🤖' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
  { id: 'cloud-computing', name: 'Cloud Computing', icon: '☁️' },
  { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
  { id: 'mobile-development', name: 'Mobile Development', icon: '📱' },
  { id: 'devops', name: 'DevOps', icon: '🚀' }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header domains={domains} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home domains={domains} />} />
            {domains.map(domain => (
              <Route
                key={domain.id}
                path={`/domain/${domain.id}`}
                element={<DomainPage domain={domain} />}
              />
            ))}
            <Route path="/certificate-preview" element={<CertificatePreview />} />
            <Route path="/sample-certificate" element={<CertificatePreview />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;