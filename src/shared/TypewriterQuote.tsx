'use client';

import React, { useState, useEffect, useRef } from 'react';


const useInView = (ref: React.RefObject<HTMLElement | null>) => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isInView;
};

interface TypewriterQuoteProps {
  quote: string;
  cite: string;
}

const TypewriterQuote: React.FC<TypewriterQuoteProps> = ({ quote, cite }) => {
  const [displayedQuote, setDisplayedQuote] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const quoteRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(quoteRef);

  
  useEffect(() => {
    
    if (isInView && !isTypingComplete) {
      let i = 0;
      
      const intervalId = setInterval(() => {
        setDisplayedQuote(quote.substring(0, i + 1));
        i++;
        if (i >= quote.length) {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, 40); 

      return () => clearInterval(intervalId);
    }
  
  
  }, [isInView, quote, isTypingComplete]);

  return (
    <section ref={quoteRef} className="relative overflow-hidden">
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from, to { color: transparent; }
          50% { color: #c6a35d; }
        }
      `}</style>
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="max-w-4xl mx-auto  text-center relative">
        <div className="bg-white/80 dark:bg-[#232323]/80 backdrop-blur-lg p-12 lg:p-16 rounded-3xl shadow-2xl border border-[#c6a35d]/30 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#c6a35d]/20 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-8xl text-[#c6a35d]  font-bodoni">“</div>
            <blockquote className="text-2xl lg:text-3xl text-[#232323]/90 dark:text-[#f0efe2]/90 leading-relaxed mb-8 italic font-bodoni min-h-[160px] lg:min-h-[220px]">
              {displayedQuote}
              {!isTypingComplete && <span className="blinking-cursor">|</span>}
            </blockquote>
            <cite className={`text-[#c6a35d] font-montserrat font-semibold text-lg not-italic transition-opacity duration-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
              {cite}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypewriterQuote;