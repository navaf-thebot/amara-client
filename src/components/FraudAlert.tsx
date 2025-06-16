import Link from 'next/link';
import Image from 'next/image';
import { Shield, AlertTriangle, Mail, Globe, CheckCircle, XCircle } from 'lucide-react';

export default function FraudAlert() {
  const commonScams = [
    {
      title: "Fake Job Offers",
      description: "Scammers pose as Amaraa Group recruiters offering high-paying jobs with minimal requirements.",
      warning: "We never ask for upfront fees or personal banking details during recruitment."
    },
    {
      title: "Investment Fraud",
      description: "Fraudulent investment schemes claiming association with Amaraa Group companies.",
      warning: "All official investments are handled through Amaraa Financial Services Ltd. only."
    },
    {
      title: "Phishing Emails",
      description: "Fake emails claiming to be from Amaraa Group requesting sensitive information.",
      warning: "We never request passwords, banking details, or personal information via email."
    },
    {
      title: "Social Media Impersonation",
      description: "Fake social media accounts using Amaraa Group branding and logos.",
      warning: "Always verify official accounts through our website before engaging."
    },
    {
      title: "Contract Scams",
      description: "Fraudulent contracts or partnerships claiming to represent Amaraa Group.",
      warning: "All official contracts are signed by authorized representatives only."
    },
    {
      title: "Cryptocurrency Schemes",
      description: "Fake cryptocurrency or trading platforms using Amaraa Group's name.",
      warning: "We do not operate any cryptocurrency trading platforms or schemes."
    }
  ];

  const verificationSteps = [
    "Check the official Amaraa Group website for announcements",
    "Contact us directly at info@amaraaglobal.com",
    "Verify through our official social media channels",
    "Ask for official identification and credentials",
    "Request written confirmation on official letterhead"
  ];

  const amaraaCompanies = [
    "Amaraa Agro Group Ltd.", "Amaraa Security Shield Ltd.", "Amaraa Auto Group Ltd.",
    "Amaraa IT Services Ltd.", "Amaraa Food & Beverages Ltd.", "Amaraa Aviation Ltd.",
    "Amaraa Real Estate Ltd.", "Amaraa Energy Solutions Ltd.", "Amaraa Healthcare Ltd.",
    "Amaraa Education Foundation", "Amaraa Logistics Ltd.", "Amaraa Manufacturing Ltd.",
    "Amaraa Engineering Services Ltd.", "Amaraa Global Trading Ltd.", "Amaraa Tech Innovations Ltd.",
    "Amaraa Financial Services Ltd.", "Amaraa Hospitality Ltd.", "Amaraa Media & Communications Ltd.",
    "Amaraa Sports & Recreation Ltd.", "Amaraa Environmental Solutions Ltd.", "Amaraa Consulting Ltd."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0efe2] via-white to-[#f0efe2] dark:from-[#1a1a1a] dark:via-[#232323] dark:to-[#1a1a1a]">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle size={32} className="animate-pulse" />
            <h1 className="font-bodoni text-2xl md:text-3xl font-bold">
              FRAUD ALERT
            </h1>
            <AlertTriangle size={32} className="animate-pulse" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white dark:bg-[#232323] rounded-2xl shadow-2xl border-4 border-red-500 dark:border-red-400 p-8 mb-12">
          <div className="text-center mb-8">
            <Image 
              src="/images/logo/logo.png" 
              alt="Amaraa Group Logo" 
              width={120} 
              height={60} 
              className="mx-auto mb-6"
            />
            <h2 className="font-bodoni text-4xl md:text-5xl font-bold text-[#232323] dark:text-white mb-4">
              Protect Yourself From Fraud
            </h2>
            <p className="font-montserrat text-lg text-[#232323]/70 dark:text-white/70 max-w-3xl mx-auto">
              Amaraa Group is committed to protecting our stakeholders from fraudulent activities. 
              Be aware of scams using our company name and always verify authenticity.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-6 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield size={24} className="text-red-600" />
              <h3 className="font-bodoni text-xl font-semibold text-red-800 dark:text-red-300">
                IMPORTANT SECURITY NOTICE
              </h3>
            </div>
            <p className="font-montserrat text-red-700 dark:text-red-200 leading-relaxed">
              Fraudsters are actively using Amaraa Group&apos;s name and reputation to deceive individuals. 
              Always verify any communication, job offer, investment opportunity, or business proposal 
              through our official channels before proceeding.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-bodoni text-3xl font-bold text-[#232323] dark:text-white text-center mb-8">
            Common Fraud Scenarios
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonScams.map((scam, index) => (
              <div key={index} className="bg-white dark:bg-[#2a2a2a] rounded-xl shadow-lg p-6 border-l-4 border-[#c6a35d]">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle size={24} className="text-red-500" />
                  <h4 className="font-bodoni text-xl font-semibold text-[#232323] dark:text-white">
                    {scam.title}
                  </h4>
                </div>
                <p className="font-montserrat text-[#232323]/70 dark:text-white/70 mb-4">
                  {scam.description}
                </p>
                <div className="bg-[#c6a35d]/10 dark:bg-[#c6a35d]/20 rounded-lg p-3">
                  <p className="font-montserrat text-sm font-medium text-[#232323] dark:text-white">
                    <strong className="text-[#c6a35d]">Remember:</strong> {scam.warning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#232323] rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="font-bodoni text-3xl font-bold text-[#232323] dark:text-white text-center mb-8">
            How to Verify Authenticity
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bodoni text-xl font-semibold text-[#c6a35d] mb-6">
                Verification Checklist
              </h4>
              <div className="space-y-4">
                {verificationSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="font-montserrat text-[#232323]/80 dark:text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bodoni text-xl font-semibold text-[#c6a35d] mb-6">
                Official Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-lg">
                  <Mail size={20} className="text-[#c6a35d]" />
                  <div>
                    <p className="font-montserrat font-medium text-[#232323] dark:text-white">Email</p>
                    <p className="font-montserrat text-[#232323]/70 dark:text-white/70">info@amaraagroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-lg">
                  <Globe size={20} className="text-[#c6a35d]" />
                  <div>
                    <p className="font-montserrat font-medium text-[#232323] dark:text-white">Official Website</p>
                    <p className="font-montserrat text-[#232323]/70 dark:text-white/70">Available on our website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#232323] rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="font-bodoni text-3xl font-bold text-[#232323] dark:text-white text-center mb-8">
            Official Amaraa Group Companies
          </h3>
          <p className="font-montserrat text-[#232323]/70 dark:text-white/70 text-center mb-8">
            These are the only legitimate companies under the Amaraa Group umbrella:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {amaraaCompanies.map((company, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-lg">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                <p className="font-montserrat text-sm text-[#232323] dark:text-white">{company}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 mb-12">
          <h3 className="font-bodoni text-3xl font-bold text-[#232323] dark:text-[#f0efe2] text-center mb-8">
            If You&apos;ve Been Targeted
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bodoni text-xl font-semibold text-red-600 mb-4">
                Immediate Actions
              </h4>
              <ul className="space-y-3 font-montserrat text-[#232323]/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">1.</span>
                  <span className='font-montserrat text-black dark:text-white'>Stop all communication with the fraudster immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">2.</span>
                  <span className='font-montserrat text-black dark:text-white'>Do not send any money or personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">3.</span>
                  <span className='font-montserrat text-black dark:text-white'>Save all evidence (emails, messages, documents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">4.</span>
                  <span className='font-montserrat text-black dark:text-white'>Contact us immediately at info@amaraagroup.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bodoni text-xl font-semibold text-red-600 mb-4">
                Report the Fraud
              </h4>
              <ul className="space-y-3 font-montserrat text-[#232323]/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className='font-montserrat text-black dark:text-white'>Report to local police authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className='font-montserrat text-black dark:text-white'>Contact your bank if financial information was shared</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className='font-montserrat text-black dark:text-white'>Report to cybercrime authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span className='font-montserrat text-black dark:text-white'>Notify us so we can alert others</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-[#c6a35d] rounded-2xl p-8 text-white">
          <h3 className="font-bodoni text-2xl font-bold mb-4">
            Stay Safe, Stay Informed
          </h3>
          <p className="font-montserrat mb-6 max-w-2xl mx-auto">
            Your security is our priority. When in doubt, always verify directly with us. 
            Together, we can stop fraudsters from using our trusted name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-[#c6a35d] px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-[#f0efe2] transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-white hover:text-[#c6a35d] transition-colors"
            >
              Visit Our Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}