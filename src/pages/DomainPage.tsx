import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateForm from '../components/CertificateForm';

interface Domain {
  id: string;
  name: string;
  icon: string;
}

interface DomainPageProps {
  domain: Domain;
}

interface FormData {
  fullName: string;
  degree: string;
  college: string;
  courseName: string;
  domain: string;
  duration: string;
}

const DomainPage: React.FC<DomainPageProps> = ({ domain }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate to certificate preview with form data
    navigate('/certificate-preview', { 
      state: { 
        certificateData: formData,
        domain: domain
      } 
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{domain.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {domain.name} Certificate
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below to generate your professional {domain.name.toLowerCase()} certificate
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <CertificateForm
              domain={domain}
              onSubmit={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainPage;