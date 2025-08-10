import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Shield, Zap, ChevronRight } from 'lucide-react';

interface Domain {
  id: string;
  name: string;
  icon: string;
}

interface HomeProps {
  domains: Domain[];
}

const Home: React.FC<HomeProps> = ({ domains }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Certificate
              <span className="block bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                Generation Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Create beautiful, verified certificates for various technology domains. 
              Perfect for courses, training programs, and professional achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#domains"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
              >
                Get Started
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/sample-certificate"
                state={{
                  certificateData: {
                    fullName: "John Doe",
                    degree: "Bachelor of Science in Computer Science",
                    college: "Tech University",
                    courseName: "Advanced Web Development Bootcamp",
                    domain: "Web Development",
                    duration: "6-12 months"
                  },
                  domain: { id: 'web-development', name: 'Web Development', icon: '🌐' }
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"
              >
                View Sample Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose CertGen Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the most comprehensive and professional certificate generation platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              High-quality, professionally designed certificates that look great in both digital and print formats.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure & Verified</h3>
            <p className="text-gray-600 leading-relaxed">
              Every certificate comes with unique verification codes and secure blockchain-based validation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Instant Generation</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate certificates instantly with our advanced system. No waiting, no delays, just professional results.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Domain
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our comprehensive list of technology domains to create your certificate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map(domain => (
              <Link
                key={domain.id}
                to={`/domain/${domain.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {domain.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{domain.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">Generate certificates for {domain.name.toLowerCase()} courses and training</p>
                  <span className="text-emerald-600 font-medium group-hover:text-emerald-700 inline-flex items-center">
                    Create Certificate
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">50,000+</div>
            <p className="text-gray-600 text-lg">Certificates Generated</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">8</div>
            <p className="text-gray-600 text-lg">Technology Domains</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <p className="text-gray-600 text-lg">Uptime Guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;