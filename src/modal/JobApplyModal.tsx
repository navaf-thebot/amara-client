"use client";

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
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
} from "lucide-react";
import type { AppDispatch, RootState } from "../store/store"; 
import { applyJobThunk } from "../store/authThunks";         
import { clearJobState } from "../store/jobSlice";           


const applicationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().matches(/^[0-9]{6,15}$/, "Please enter a valid phone number").required("Phone number is required"),
  coverLetter: Yup.string().min(10, "Cover letter must be at least 10 characters").required("Cover letter is required"),
  resume: Yup.mixed<File>()
    .required("A resume file is required")
    .test(
      "fileSize",
      "File size must be less than 5MB",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    )
    .test(
      "fileType",
      "Please upload a PDF or Word document",
      (value) =>
        !value || (value && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type))
    ),
});

interface JobApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const JobApplicationModal = ({ open, onOpenChange }: JobApplicationModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const { loading, error: apiError } = useSelector((state: RootState) => state.jobs);
  
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: "IN", name: "India", flag: "🇮🇳", phoneCode: "+91" });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      resume: null as File | null,
      coverLetter: ""
    },
    validationSchema: applicationSchema,
    onSubmit: async (values) => {
      
      const payload = {
        fullName: values.fullName,
        email: values.email,
        phone: `${selectedCountry.phoneCode}${values.phone}`,
        coverLetter: values.coverLetter,
        cvDocument: values.resume, 
      };
      
      const resultAction = await dispatch(applyJobThunk(payload));
      
      if(applyJobThunk.fulfilled.match(resultAction)) {
        toast.success("Application submitted successfully!");
        handleOpenChange(false); 
      }
      
    },
  });

  const countries = [
    { code: "IN", name: "India", flag: "🇮🇳", phoneCode: "+91" },
    { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44" },
    { code: "CA", name: "Canada", flag: "🇨🇦", phoneCode: "+1" },
    { code: "AU", name: "Australia", flag: "🇦🇺", phoneCode: "+61" },
  ];

  const clientLogos = [
    { name: "Global Finance", icon: <TrendingUp className="h-6 w-6 text-amber-600" /> },
    { name: "Secure Holdings", icon: <Shield className="h-6 w-6 text-amber-600" /> },
    { name: "World Investments", icon: <Globe className="h-6 w-6 text-amber-600" /> },
    { name: "Rapid Growth", icon: <Zap className="h-6 w-6 text-amber-600" /> },
    { name: "Unity Partners", icon: <Users className="h-6 w-6 text-amber-600" /> },
    { name: "Prime Assets", icon: <Building2 className="h-6 w-6 text-amber-600" /> }
  ];

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    formik.setFieldValue("resume", file);
  };

  const removeFile = () => {
    formik.setFieldValue("resume", null);
    const fileInput = document.getElementById("resume") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
  
  
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      formik.resetForm();
      dispatch(clearJobState());
    }
    onOpenChange(newOpen);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => handleOpenChange(false)} />
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <UserPlus className="h-6 w-6 text-amber-600" /> Apply for Position
            </h2>
            <button onClick={() => handleOpenChange(false)} className="text-gray-400 p-1 rounded-full"><X className="w-7 h-7" /></button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">Join our team and make an impact</p>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <p className="text-center text-xs text-gray-500 mb-4">Trusted by leading organizations</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">{clientLogos.map((client, index) => (
              <div key={index} className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-800 rounded border border-amber-200 dark:border-amber-800">
                {client.icon}<span className="text-xs text-gray-500 mt-1 text-center leading-tight">{client.name}</span>
              </div>
            ))}</div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium">Full Name *</label>
                <input id="fullName" type="text" {...formik.getFieldProps('fullName')} className={`w-full px-3 py-2 border rounded-md ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Enter your full name" />
                {formik.touched.fullName && formik.errors.fullName ? (<p className="text-sm text-red-600">{formik.errors.fullName}</p>) : null}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address *</label>
                <input id="email" type="email" {...formik.getFieldProps('email')} className={`w-full px-3 py-2 border rounded-md ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Enter your email address" />
                {formik.touched.email && formik.errors.email ? (<p className="text-sm text-red-600">{formik.errors.email}</p>) : null}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">Phone Number *</label>
                <div className="flex">
                  <div className="relative">
                    <button type="button" onClick={() => setShowCountryDropdown(!showCountryDropdown)} className="flex items-center px-3 py-2 border border-r-0 rounded-l-md"><span className="mr-2">{selectedCountry.flag}</span><span>{selectedCountry.phoneCode}</span><ChevronDown className="ml-1 h-4 w-4" /></button>
                    {showCountryDropdown && (<div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">{countries.map(c => <button key={c.code} type="button" onClick={() => handleCountrySelect(c)} className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center"><span className="mr-3">{c.flag}</span><span className="mr-2">{c.name}</span><span>{c.phoneCode}</span></button>)}</div>)}
                  </div>
                  <input id="phone" type="tel" {...formik.getFieldProps('phone')} className={`flex-1 px-3 py-2 border rounded-r-md ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Enter your phone number" />
                </div>
                {formik.touched.phone && formik.errors.phone ? (<p className="text-sm text-red-600">{formik.errors.phone}</p>) : null}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Documents</h3>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Resume *</label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="resume" className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer ${formik.touched.resume && formik.errors.resume ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} ${formik.values.resume ? 'border-green-300 dark:border-green-700' : ''}`}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {formik.values.resume ? (
                        <><FileText className="w-8 h-8 mb-4 text-green-600" /><p className="font-medium">{formik.values.resume.name}</p><p className="text-xs text-gray-500">{(formik.values.resume.size / 1024 / 1024).toFixed(2)} MB</p><button type="button" onClick={removeFile} className="mt-2 text-xs text-red-600">Remove file</button></>
                      ) : (
                        <><Upload className="w-8 h-8 mb-4" /><p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span></p><p className="text-xs">PDF, DOC or DOCX (MAX. 5MB)</p></>
                      )}
                    </div>
                    <input id="resume" name="resume" type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                  </label>
                </div>
                {formik.touched.resume && formik.errors.resume ? (<p className="text-sm text-red-600">{formik.errors.resume as string}</p>) : null}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Cover Letter</h3>
              <div className="space-y-2">
                <label htmlFor="coverLetter" className="block text-sm font-medium">Cover Letter *</label>
                <textarea id="coverLetter" rows={6} {...formik.getFieldProps('coverLetter')} className={`w-full px-3 py-2 border rounded-md resize-none ${formik.touched.coverLetter && formik.errors.coverLetter ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`} placeholder="Tell us why you're interested..."/>
                <div className="flex justify-between items-center">
                  {formik.touched.coverLetter && formik.errors.coverLetter ? (<p className="text-sm text-red-600">{formik.errors.coverLetter}</p>) : null}
                  <p className="text-xs text-gray-500 ml-auto">{formik.values.coverLetter.length} characters (minimum 50)</p>
                </div>
              </div>
            </div>
            
            {apiError && (<div className="p-3 text-center text-red-800 bg-red-100 dark:bg-red-900/20 rounded-md">{apiError}</div>)}
            
            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 text-lg rounded-md disabled:opacity-50 flex items-center justify-center gap-2" disabled={loading}>
              {loading ? (<><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>Submitting Application...</>) : (<><UserPlus className="h-5 w-5" />Submit Application</>)}
            </button>
          </form>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">🔒 Your application and personal information are protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;