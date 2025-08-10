import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold">CertGen Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional certificate generation platform for various technology domains. 
              Create beautiful, verified certificates for your achievements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Verify Certificate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Domains</h3>
            <ul className="space-y-2">
              <li><a href="/domain/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/domain/data-science" className="text-gray-300 hover:text-white transition-colors">Data Science</a></li>
              <li><a href="/domain/ai-ml" className="text-gray-300 hover:text-white transition-colors">AI/ML</a></li>
              <li><a href="/domain/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">abc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">+91 9456 3455</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">ABC street,XYZ country</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
             Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;