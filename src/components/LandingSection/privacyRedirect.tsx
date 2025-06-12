'use client';
import Link from 'next/link';

const PrivacyPolicyCtaSection = () => {
  return (
    <section 
      className="bg-[#232323] text-[#f0efe2]"
      aria-labelledby="privacy-heading"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20 lg:px-8">
        
        <h2 
          id="privacy-heading"
          className="font-bodoni text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Our Commitment to Your Privacy
        </h2>

        <p className="font-montserrat mt-6 text-lg leading-8">
          We value the trust you place in us. Our Privacy Policy details how we handle 
          your personal information with care and transparency.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/privacy-policy"
            className="
              font-montserrat
              inline-block 
              rounded-md 
              bg-[#c6a35d] 
              px-6 
              py-3 
              text-base 
              font-semibold 
              text-[#232323] 
              shadow-sm 
              transition 
              hover:bg-opacity-90 
              focus-visible:outline-2 
              focus-visible:outline-offset-2 
              focus-visible:outline-[#c6a35d]
            "
          >
            Read Our Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyCtaSection;