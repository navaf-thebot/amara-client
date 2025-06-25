"use client";

import { useState } from "react";
import { X, Mail, Lock, User as UserIcon, Check, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginThunk, registerThunk, verifyOtpThunk, sendOtpThunk } from '../store/authThunks';
import { clearError } from '../store/authSlice';
import type { RegisterCredentials, User } from "@/lib/type";
import type { RootState } from '../store/store';


const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const registerSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});


const countries = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
];

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: (user: User) => void;
}

const AuthModal = ({ open, onOpenChange, onAuthSuccess }: AuthModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [selectedCountry, setSelectedCountry] = useState(countries[6]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [registrationData, setRegistrationData] = useState<RegisterCredentials | null>(null);
  const [registrationEmail, setRegistrationEmail] = useState("");

  const loginFormik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      dispatch(clearError());
      const result = await dispatch(loginThunk(values));
      if (result.type === 'auth/login/fulfilled') {
        const userData = result.payload.currentUser || result.payload.user;
        onAuthSuccess(userData);
        onOpenChange(false);
      }
    },
  });
  const registerFormik = useFormik({
    initialValues: { fullName: '', email: '', phone: '', password: '', confirmPassword: '' },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      dispatch(clearError());
      const { fullName, email, phone, password } = values;
      const payload: RegisterCredentials = {
        fullName,
        email,
        phone: `${selectedCountry.dialCode}${phone}`,
        password,
      };
      setRegistrationData(payload);
      setRegistrationEmail(values.email);
      const result = await dispatch(registerThunk(payload));
      if (result.type === 'auth/register/fulfilled') {
        setShowEmailOtp(true);
      }
    },
  });


  if (!open) {
    return null;
  }


  const verifyEmailOtp = async () => {
    if (!registrationData) return;
    dispatch(clearError());
    const finalOtp = otp.join('');
    const verificationPayload = {
      ...registrationData,
      otp: finalOtp,
    };

    const result = await dispatch(verifyOtpThunk(verificationPayload));
    if (result.type === 'auth/verifyOtp/fulfilled') {
      const userData = result.payload.currentUser || result.payload.user;
      onAuthSuccess(userData);
      onOpenChange(false);
    }
  };

  const resendOtp = async () => {
    if (registrationEmail) {
      dispatch(clearError());
      await dispatch(sendOtpThunk({ email: registrationEmail }));
    }
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.dialCode.includes(countrySearch)
  );

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1 || !/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const resetStates = () => {
    setShowEmailOtp(false);
    setOtp(["", "", "", "", "", ""]);
    setRegistrationData(null);
    setRegistrationEmail("");
    loginFormik.resetForm();
    registerFormik.resetForm();
    setCountrySearch("");
    dispatch(clearError());
  };

  const handleTabSwitch = (tab: "login" | "register") => {
    setActiveTab(tab);
    resetStates();
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-montserrat p-4">
      <div
        className="absolute inset-0 bg-[#232323]/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      <div className="relative bg-[#f0efe2] dark:bg-[#232323] rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
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
              onClick={() => handleTabSwitch("login")}
              className={`relative cursor-pointer z-10 w-1/2 py-2 font-semibold text-sm transition-colors duration-300 ${activeTab === "login" ? "text-white" : "text-gray-600 dark:text-gray-300"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => handleTabSwitch("register")}
              className={`relative cursor-pointer z-10 w-1/2 py-2 font-semibold text-sm transition-colors duration-300 ${activeTab === "register" ? "text-white" : "text-gray-600 dark:text-gray-300"}`}
            >
              Register
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {activeTab === "login" ? (
            <div className="p-6">
              <form onSubmit={loginFormik.handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        {...loginFormik.getFieldProps('email')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    {loginFormik.touched.email && loginFormik.errors.email && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{loginFormik.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="password"
                        placeholder="Password"
                        {...loginFormik.getFieldProps('password')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    {loginFormik.touched.password && loginFormik.errors.password && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{loginFormik.errors.password}</p>
                    )}
                  </div>

                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                  <button type="submit" disabled={loading} className="w-full bg-[#c6a35d] hover:bg-[#b8954f] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Sign In"}
                  </button>
                </div>
              </form>
            </div>
          ) : !showEmailOtp ? (
            <div className="p-6">
              <form onSubmit={registerFormik.handleSubmit} noValidate>
                <div className="space-y-4">
                  <div>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        {...registerFormik.getFieldProps('fullName')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none"
                      />
                    </div>
                    {registerFormik.touched.fullName && registerFormik.errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{registerFormik.errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        {...registerFormik.getFieldProps('email')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    {registerFormik.touched.email && registerFormik.errors.email && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{registerFormik.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <div className="flex">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="flex items-center gap-2 px-3 h-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-l-lg hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors min-w-[100px]"
                          >
                            <span className="text-lg">{selectedCountry.flag}</span>
                            <span className="text-sm font-medium">{selectedCountry.dialCode}</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </button>

                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[300px]">
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
                          {...registerFormik.getFieldProps('phone')}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            registerFormik.setFieldValue('phone', value);
                          }}
                          className="flex-1 w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-l-0 border-gray-200 dark:border-gray-700 rounded-r-lg outline-none transition-all focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent"
                        />
                      </div>
                    </div>
                    {registerFormik.touched.phone && registerFormik.errors.phone && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{registerFormik.errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="password"
                        placeholder="Password"
                        {...registerFormik.getFieldProps('password')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    {registerFormik.touched.password && registerFormik.errors.password && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{registerFormik.errors.password}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        {...registerFormik.getFieldProps('confirmPassword')}
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#c6a35d] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1 ml-1">{registerFormik.errors.confirmPassword}</p>
                    )}
                  </div>

                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                  <button type="submit" disabled={loading} className="w-full bg-[#c6a35d] hover:bg-[#b8954f] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : "Send Email Verification"}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">By registering, you agree to our Terms of Service and Privacy Policy</p>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-[#c6a35d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#c6a35d]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Verify Your Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Enter the 6-digit code sent to<br />
                <span className="font-medium text-[#c6a35d]">{registrationEmail}</span>
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
              {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
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
                  type="button"
                  onClick={() => setShowEmailOtp(false)}
                  className="text-[#c6a35d] hover:text-[#b8954f] font-medium text-sm transition-colors block mx-auto"
                >
                  ← Back to Registration
                </button>
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={loading}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors block mx-auto disabled:opacity-50"
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