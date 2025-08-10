import React, { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Download, Share2, Home, ArrowLeft } from 'lucide-react';

interface CertificateData {
  fullName: string;
  degree: string;
  college: string;
  courseName: string;
  domain: string;
  duration: string;
}

interface Domain {
  id: string;
  name: string;
  icon: string;
}

const CertificatePreview: React.FC = () => {
  const location = useLocation();
  const certificateRef = useRef<HTMLDivElement>(null);
  const { certificateData, domain } = location.state as { certificateData: CertificateData; domain: Domain } || {};

  if (!certificateData || !domain) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No certificate data found</h2>
          <p className="text-gray-600 mb-6">Please go back and fill out the form to generate a certificate.</p>
          <Link
            to="/"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const certificateId = `CERT-${domain.id.toUpperCase()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  const handleDownload = () => {
    // In a real application, you would implement PDF generation here
    alert('Download functionality would be implemented here with PDF generation');
  };

  const handleShare = () => {
    if (navigator.share) {
      try {
        navigator.share({
          title: `${certificateData.fullName}'s ${domain.name} Certificate`,
          text: `Check out my certificate in ${domain.name}!`,
          url: window.location.href
        }).catch((error) => {
          // Handle promise rejection from navigator.share
          console.log('Share failed:', error);
          navigator.clipboard.writeText(window.location.href);
          alert('Certificate link copied to clipboard!');
        });
      } catch (error) {
        // Handle synchronous errors
        console.log('Share error:', error);
        navigator.clipboard.writeText(window.location.href);
        alert('Certificate link copied to clipboard!');
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Certificate link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link
              to={`/domain/${domain.id}`}
              className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Form
            </Link>
            <div className="flex space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificate Preview</h1>
            <p className="text-gray-600">Your professional certificate is ready!</p>
          </div>
        </div>

        {/* Certificate */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={certificateRef}
            className="bg-white shadow-2xl rounded-lg overflow-hidden"
            style={{ aspectRatio: '11/8.5' }}
          >
            {/* Certificate Content */}
            <div className="relative h-full p-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600"></div>
              
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">CERTIFICATE OF COMPLETION</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
              </div>

              {/* Domain Icon */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">{domain.name}</h3>
              </div>

              {/* Main Content */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 inline-block">
                  {certificateData.fullName}
                </h1>
                <p className="text-lg text-gray-600 mb-2">holding degree in</p>
                <p className="text-xl font-semibold text-gray-700 mb-4">{certificateData.degree}</p>
                <p className="text-lg text-gray-600 mb-2">from</p>
                <p className="text-xl font-semibold text-gray-700 mb-4">{certificateData.college}</p>
                <p className="text-lg text-gray-600 mb-2">has successfully completed the course</p>
                <p className="text-2xl font-bold text-emerald-600 mb-4">{certificateData.courseName}</p>
                <p className="text-lg text-gray-600 mb-2">in the domain of {domain.name}</p>
                <p className="text-lg text-gray-600 mb-6">Duration: {certificateData.duration}</p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-end">
                <div className="text-left">
                  <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                  <p className="text-sm font-semibold text-gray-700">Director</p>
                  <p className="text-sm text-gray-600">CertGen Pro</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">VERIFIED</span>
                  </div>
                  <p className="text-xs text-gray-500">Digital Seal</p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Date: {currentDate}</p>
                  <p className="text-xs text-gray-600">Certificate ID:</p>
                  <p className="text-xs font-mono text-gray-500">{certificateId}</p>
                </div>
              </div>

              {/* Watermark */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 text-6xl font-bold text-gray-400 pointer-events-none -rotate-45">
                CERTIFIED
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <Download className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Download your certificate as a high-quality PDF</p>
              </div>
              <div className="text-center p-4">
                <Share2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Share your achievement on social media</p>
              </div>
              <div className="text-center p-4">
                <Home className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Generate more certificates for other domains</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-colors inline-flex items-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Generate Another Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;