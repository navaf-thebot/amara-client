import { useState } from "react";
import {
  Users,
  TrendingUp,
  Globe,
  UserPlus,
  Building2,
  Zap,
  Shield,
  Upload,
  FileText,
  X,
  ChevronDown,
} from "lucide-react"

interface JobApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const JobApplicationModal = ({ open, onOpenChange }: JobApplicationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCountry: "IN",
    phoneCode: "+91",
    phone: "",
    resume: null as File | null,
    coverLetter: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const countries = [
    { code: "IN", name: "India", flag: "🇮🇳", phoneCode: "+91" },
    { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44" },
    { code: "CA", name: "Canada", flag: "🇨🇦", phoneCode: "+1" },
    { code: "AU", name: "Australia", flag: "🇦🇺", phoneCode: "+61" },
    { code: "DE", name: "Germany", flag: "🇩🇪", phoneCode: "+49" },
    { code: "FR", name: "France", flag: "🇫🇷", phoneCode: "+33" },
    { code: "SG", name: "Singapore", flag: "🇸🇬", phoneCode: "+65" },
    { code: "AE", name: "UAE", flag: "🇦🇪", phoneCode: "+971" },
    { code: "JP", name: "Japan", flag: "🇯🇵", phoneCode: "+81" }
  ];

  const clientLogos = [
    { name: "Global Finance", icon: <TrendingUp className="h-6 w-6 text-amber-600" /> },
    { name: "Secure Holdings", icon: <Shield className="h-6 w-6 text-amber-600" /> },
    { name: "World Investments", icon: <Globe className="h-6 w-6 text-amber-600" /> },
    { name: "Rapid Growth", icon: <Zap className="h-6 w-6 text-amber-600" /> },
    { name: "Unity Partners", icon: <Users className="h-6 w-6 text-amber-600" /> },
    { name: "Prime Assets", icon: <Building2 className="h-6 w-6 text-amber-600" /> }
  ];

  const selectedCountry = countries.find(c => c.code === formData.phoneCountry) || countries[0];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{6,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    } else if (formData.coverLetter.trim().length < 50) {
      newErrors.coverLetter = "Cover letter should be at least 50 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onOpenChange(false);
      resetForm();
      alert("Application submitted successfully! We'll review your application and get back to you soon.");
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setFormData(prev => ({
      ...prev,
      phoneCountry: country.code,
      phoneCode: country.phoneCode
    }));
    setShowCountryDropdown(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: "Please upload a PDF or Word document" }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: "File size should be less than 5MB" }));
        return;
      }

      handleInputChange("resume", file);
    }
  };

  const removeFile = () => {
    handleInputChange("resume", null);
    const fileInput = document.getElementById("resume") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneCountry: "IN",
      phoneCode: "+91",
      phone: "",
      resume: null,
      coverLetter: ""
    });
    setErrors({});
    setIsLoading(false);
    setShowCountryDropdown(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      resetForm();
    }
    onOpenChange(newOpen);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => handleOpenChange(false)}
      />

      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <UserPlus className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
              Apply for Position
            </h2>
            <button
              onClick={() => handleOpenChange(false)}
              className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">Join our team and make an impact</p>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mb-4">Trusted by leading organizations</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800 rounded border border-amber-200 dark:border-amber-800">
                  {client.icon}
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center leading-tight">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Personal Information
              </h3>

              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number *
                </label>
                <div className="flex">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center px-3 py-2 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <span className="mr-2">{selectedCountry.flag}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{selectedCountry.phoneCode}</span>
                      <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => handleCountrySelect(country)}
                            className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                          >
                            <span className="mr-3">{country.flag}</span>
                            <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">{country.name}</span>
                            <span className="text-sm text-gray-500">{country.phoneCode}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`flex-1 px-3 py-2 border rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Documents
              </h3>

              <div className="space-y-2">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Resume *
                </label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="resume" className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${errors.resume ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } ${formData.resume ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700' : 'bg-gray-50 dark:bg-gray-900'}`}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {formData.resume ? (
                        <>
                          <FileText className="w-8 h-8 mb-4 text-green-600" />
                          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{formData.resume.name}</p>
                          <p className="text-xs text-gray-500">
                            {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              removeFile();
                            }}
                            className="mt-2 text-xs text-red-600 hover:text-red-800"
                          >
                            Remove file
                          </button>
                        </>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 mb-4 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> your resume
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC or DOCX (MAX. 5MB)</p>
                        </>
                      )}
                    </div>
                    <input
                      id="resume"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                {errors.resume && (
                  <p className="text-sm text-red-600">{errors.resume}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                Cover Letter
              </h3>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                  rows={6}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white resize-none ${errors.coverLetter ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                />
                <div className="flex justify-between items-center">
                  {errors.coverLetter && (
                    <p className="text-sm text-red-600">{errors.coverLetter}</p>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                    {formData.coverLetter.length} characters (minimum 50)
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting Application...
                </>
              ) : (
                <>
                  <UserPlus className="h-5 w-5" />
                  Submit Application
                </>
              )}
            </button>
          </form>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              🔒 Your application and personal information are protected with industry-standard encryption and security measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;