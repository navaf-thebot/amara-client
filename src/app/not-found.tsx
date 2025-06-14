import Link from 'next/link';
import { Home, Wrench, HardHat, Hammer } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0efe2] via-white to-[#f0efe2] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 transform rotate-12">
          <Wrench size={120} className="text-[#c6a35d]" />
        </div>
        <div className="absolute bottom-20 right-20 transform -rotate-12">
          <Hammer size={100} className="text-[#c6a35d]" />
        </div>
        <div className="absolute top-1/2 left-10 transform -rotate-45">
          <HardHat size={80} className="text-[#c6a35d]" />
        </div>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#c6a35d] via-[#d4b66a] to-[#c6a35d] h-6 rounded-full relative overflow-hidden mb-4">
            <div className="absolute inset-0 bg-repeating-linear-gradient bg-[length:40px_40px] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-8 shadow-2xl border-4 border-[#c6a35d]/30 border-dashed">
            <div className="flex justify-center mb-6">
              <div className="bg-[#c6a35d] p-4 rounded-full animate-bounce">
                <HardHat size={48} className="text-white" />
              </div>
            </div>
            
            <h1 className="font-bodoni text-5xl md:text-6xl font-bold text-[#232323] mb-4">
              Under Construction
            </h1>
            
            <h2 className="font-bodoni text-2xl md:text-3xl font-semibold text-[#c6a35d] mb-6">
              This Page is Being Built
            </h2>
            
            <p className="font-montserrat text-lg text-[#232323]/70 mb-8 leading-relaxed">
              Our digital architects are hard at work crafting something amazing for you. 
              This section is currently under construction and will be available soon.
            </p>

            <div className="mb-8">
              <div className="bg-[#f0efe2] rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-[#c6a35d] to-[#d4b66a] h-full w-3/4 rounded-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/"
            className="group flex items-center gap-3 bg-[#c6a35d] hover:bg-[#b8945a] text-white px-8 py-4 rounded-full font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </div>

        <div className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-[#c6a35d]/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wrench size={24} className="text-[#c6a35d]" />
            <h3 className="font-bodoni text-xl font-semibold text-[#232323]">
              What&apos;s Already Available
            </h3>
          </div>
          <p className="font-montserrat text-[#232323]/70 mb-4">
            While we work on this section, feel free to explore these completed areas:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about/our-story" className="px-4 py-2 bg-[#c6a35d]/10 hover:bg-[#c6a35d]/20 text-[#232323] rounded-full font-montserrat text-sm transition-colors">
              About Us
            </Link>
            <Link href="/business" className="px-4 py-2 bg-[#c6a35d]/10 hover:bg-[#c6a35d]/20 text-[#232323] rounded-full font-montserrat text-sm transition-colors">
              Our Businesses
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-[#c6a35d]/10 hover:bg-[#c6a35d]/20 text-[#232323] rounded-full font-montserrat text-sm transition-colors">
              Get in Touch
            </Link>
            <Link href="/careers" className="px-4 py-2 bg-[#c6a35d]/10 hover:bg-[#c6a35d]/20 text-[#232323] rounded-full font-montserrat text-sm transition-colors">
              Career
            </Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-[#c6a35d]/10 rounded-lg border-l-4 border-[#c6a35d]">
          <p className="font-montserrat text-sm text-[#232323]/70">
            <strong className="text-[#c6a35d]">Expected Completion:</strong> Coming soon! 
            We&apos;re putting the finishing touches on this section.
          </p>
        </div>

        <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#c6a35d]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c6a35d]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="absolute top-1/4 right-4 text-[#c6a35d]/20 animate-bounce delay-500">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-[#c6a35d]"></div>
        </div>
        <div className="absolute bottom-1/4 left-4 text-[#c6a35d]/20 animate-bounce delay-1000">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-[#c6a35d]"></div>
        </div>
      </div>
    </div>
  );
}