"use client";

import { useState } from "react";
import { X, Mail, Lock, User as UserIcon, Check, ChevronDown } from "lucide-react";
import type { User } from "@/lib/type";

const countries = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { code: "AE", name: "UAE", dialCode: "+971", flag: "🇦🇪" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷" }
];

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: (user: User) => void; 
}

const AuthModal = ({ open, onOpenChange, onAuthSuccess }: AuthModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "" 
  });

  if (!open) return null;

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.dialCode.includes(countrySearch)
  );

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const sendEmailOtp = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowEmailOtp(true);
    }, 1500);
  };

  const verifyEmailOtp = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user: User = {
          id: "1",
          name: registerData.name,
          email: registerData.email,
          phone: `${selectedCountry.dialCode}${registerData.phone}`,
          password: ""
      };
      onAuthSuccess(user);
      onOpenChange(false);
    }, 1500);
  };

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const user: User = {
          id: "1",
          name: "John Doe",
          email: loginData.email,
          phone: "",
          password: ""
      };
      onAuthSuccess(user);
      onOpenChange(false);
    }, 1500);
  };

  const resetStates = () => {
    setShowEmailOtp(false);
    setOtp(["", "", "", "", "", ""]);
    setLoading(false);
    setCountrySearch("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-montserrat p-4">
      <div
        className="absolute inset-0 bg-[#232323]/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      
      <div className="relative bg-[#f0efe2] dark:bg-[#232323] rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 p-1 hover:bg-gray-200/50 dark:hover:bg-white/10 rounded-full z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-3 bg-white/50 dark:bg-[#1a1a1a] border-b border-gray-200/20">
          <div className="relative flex w-full bg-gray-200 dark:bg-[#2d2d2d] rounded-lg p-1">
            <div
              className="absolute top-1 left-1 h-[calc(100%-8px)] w-1/2 bg-[#c6a35d] rounded-md shadow-md transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(${activeTab === "login" ? "0%" : "100%"})` }}
            />
            <button 
              onClick={() => { setActiveTab("login"); resetStates(); }} 
              className={`relative cursor-pointer z-10 w-1/2 py-2 font-semibold text-sm transition-colors duration-300 ${
                activeTab === "login" ? "text-white" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Sign In
            </button>
            <button 
              onClick={() => { setActiveTab("register"); resetStates(); }} 
              className={`relative cursor-pointer z-10 w-1/2 py-2 font-semibold text-sm transition-colors duration-300 ${
                activeTab === "register" ? "text-white" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Register
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {activeTab === "login" ? (
            <div className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full bg-[#c6a35d] hover:bg-[#b8954f] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="text-center">
                  <button className="text-[#c6a35d] hover:text-[#b8954f] text-sm font-medium transition-colors">
                    Forgot Password?
                  </button>
                </div>
              </div>
            </div>
          ) : !showEmailOtp ? (
            <div className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={registerData.name}
                    onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={registerData.email}
                    onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <div className="flex">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="flex items-center gap-2 px-3 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-l-lg hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors min-w-[100px]"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium">{selectedCountry.dialCode}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </button>
                      
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[300px]">
                          <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                            <input
                              type="text"
                              placeholder="Search countries..."
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-600 rounded focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none"
                            />
                          </div>
                          <div className="max-h-48 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setShowCountryDropdown(false);
                                  setCountrySearch("");
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors text-left"
                              >
                                <span className="text-lg">{country.flag}</span>
                                <span className="text-sm font-medium min-w-[50px]">{country.dialCode}</span>
                                <span className="text-sm text-gray-600 dark:text-gray-300 truncate">{country.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={registerData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setRegisterData(prev => ({ ...prev, phone: value }));
                      }}
                      className="flex-1 px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-l-0 border-gray-200 dark:border-gray-700 rounded-r-lg outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <button
                  onClick={sendEmailOtp}
                  disabled={loading}
                  className="w-full bg-[#c6a35d] hover:bg-[#b8954f] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Send Email Verification"
                  )}
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-[#c6a35d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#c6a35d]" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Verify Your Email
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Enter the 6-digit code sent to<br />
                <span className="font-medium text-[#c6a35d]">
                  {registerData.email}
                </span>
              </p>

              <div className="flex justify-center gap-2 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                  />
                ))}
              </div>

              <button
                onClick={verifyEmailOtp}
                disabled={loading || otp.some(digit => !digit)}
                className="w-full bg-[#c6a35d] hover:bg-[#b8954f] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mb-4"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Complete Registration
                  </>
                )}
              </button>

              <div className="space-y-2">
                <button
                  onClick={() => setShowEmailOtp(false)}
                  className="text-[#c6a35d] hover:text-[#b8954f] font-medium text-sm transition-colors block mx-auto"
                >
                  ← Back to Registration
                </button>
                
                <button
                  onClick={sendEmailOtp}
                  disabled={loading}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors block mx-auto"
                >
                  Didn&apos;t receive code? Resend
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;