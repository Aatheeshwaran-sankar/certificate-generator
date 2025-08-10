import React, { useState } from 'react';
import { User, GraduationCap, Building, BookOpen, Clock, Sparkles } from 'lucide-react';

interface Domain {
  id: string;
  name: string;
  icon: string;
}

interface FormData {
  fullName: string;
  degree: string;
  college: string;
  courseName: string;
  domain: string;
  duration: string;
}

// Define touched fields with boolean values instead of string
type TouchedFields = Partial<Record<keyof FormData, boolean>>;

interface CertificateFormProps {
  domain: Domain;
  onSubmit: (formData: FormData) => void;
  isSubmitting: boolean;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ domain, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    degree: '',
    college: '',
    courseName: '',
    domain: domain.name,
    duration: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.degree.trim()) {
      newErrors.degree = 'Degree is required';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College/Institution is required';
    }

    if (!formData.courseName.trim()) {
      newErrors.courseName = 'Course name is required';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      fullName: true,
      degree: true,
      college: true,
      courseName: true,
      domain: true,
      duration: true
    });

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const getFieldError = (fieldName: keyof FormData) => {
    return touched[fieldName] && errors[fieldName];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Certificate Details</h2>
        <p className="text-gray-600">Please provide accurate information for your certificate</p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <User className="w-4 h-4 mr-2 text-emerald-600" />
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
            getFieldError('fullName') ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Enter your full name"
        />
        {getFieldError('fullName') && (
          <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Degree */}
      <div>
        <label htmlFor="degree" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <GraduationCap className="w-4 h-4 mr-2 text-teal-600" />
          Degree/Qualification *
        </label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
            getFieldError('degree') ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="e.g., Bachelor of Science, High School Diploma"
        />
        {getFieldError('degree') && (
          <p className="text-red-600 text-sm mt-1">{errors.degree}</p>
        )}
      </div>

      {/* College */}
      <div>
        <label htmlFor="college" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <Building className="w-4 h-4 mr-2 text-green-600" />
          College/Institution *
        </label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
            getFieldError('college') ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder="Enter your college or institution name"
        />
        {getFieldError('college') && (
          <p className="text-red-600 text-sm mt-1">{errors.college}</p>
        )}
      </div>

      {/* Course Name */}
      <div>
        <label htmlFor="courseName" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <BookOpen className="w-4 h-4 mr-2 text-orange-600" />
          Course Name *
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
            getFieldError('courseName') ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
          placeholder={`Enter your ${domain.name.toLowerCase()} course name`}
        />
        {getFieldError('courseName') && (
          <p className="text-red-600 text-sm mt-1">{errors.courseName}</p>
        )}
      </div>

      {/* Domain (Pre-filled) */}
      <div>
        <label htmlFor="domain" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <span className="text-lg mr-2">{domain.icon}</span>
          Domain
        </label>
        <input
          type="text"
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
          disabled
        />
        <p className="text-gray-500 text-sm mt-1">Domain is automatically set based on your selection</p>
      </div>

      {/* Duration */}
      <div>
        <label htmlFor="duration" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <Clock className="w-4 h-4 mr-2 text-indigo-600" />
          Course Duration *
        </label>
        <select
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
            getFieldError('duration') ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        >
          <option value="">Select duration</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2+ years">2+ years</option>
        </select>
        {getFieldError('duration') && (
          <p className="text-red-600 text-sm mt-1">{errors.duration}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Generating Certificate...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Certificate
            </>
          )}
        </button>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>* Required fields must be filled out to generate your certificate</p>
      </div>
    </form>
  );
};

export default CertificateForm;
