'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-20 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-bodoni animate-fade-in">
        {title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat animate-fade-in-delay">
        {subtitle}
      </p>
    </div>
  </div>
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '', ...props }: CardProps) => (
  <div className={`rounded-xl ${className}`} {...props}>
    {children}
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => (
  <div className={className}>
    {children}
  </div>
);

export default function LeadershipPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const leaders = [
    {
      name: "Rajesh Mehra",
      title: "Chairperson",
      image: "/images/leader-rajesh.jpg",
      bio: "With over 30 years of experience in global business leadership, Rajesh has guided House of Amaraa through strategic growth and diversification.",
      accent: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Anita Kapoor",
      title: "Chief Executive Officer",
      image: "/images/leader-anita.jpg",
      bio: "Anita brings innovative vision and operational excellence to HOA, driving sustainable growth across all business verticals.",
      accent: "from-yellow-500 to-yellow-700"
    },
    {
      name: "Vikram Singh",
      title: "Chief Financial Officer",
      image: "/images/leader-vikram.jpg",
      bio: "Vikram oversees the financial strategy and operations, ensuring robust financial health and strategic investments.",
      accent: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Priya Sharma",
      title: "Chief Operating Officer",
      image: "/images/leader-priya.jpg",
      bio: "Priya leads operational excellence across all business units, optimizing processes and driving efficiency.",
      accent: "from-yellow-500 to-yellow-700"
    },
    {
      name: "Arjun Patel",
      title: "Chief Technology Officer",
      image: "/images/leader-arjun.jpg",
      bio: "Arjun spearheads technological innovation and digital transformation initiatives across the organization.",
      accent: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Meera Gupta",
      title: "Chief Human Resources Officer",
      image: "/images/leader-meera.jpg",
      bio: "Meera develops and implements people strategies that align with our values and business objectives.",
      accent: "from-yellow-500 to-yellow-700"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(198, 163, 93, 0.3); }
          50% { box-shadow: 0 0 30px rgba(198, 163, 93, 0.5); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.3s both;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(198, 163, 93, 0.1), transparent);
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .card-hover-effect {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .text-primary {
          color: #c6a35d;
        }
        .bg-primary {
          background-color: #c6a35d;
        }
        .bg-secondary-light {
          background-color: #f0efe2;
        }
        .bg-secondary-dark {
          background-color: #232323;
        }
        .border-primary {
          border-color: #c6a35d;
        }
        .font-bodoni {
          font-family: 'Bodoni Moda', serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <PageBanner
        title="Leadership Team"
        subtitle="The visionaries guiding our journey towards excellence"
      />

      <main className="py-16 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-20"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-30" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-float opacity-25" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-bodoni relative">
                Executive <span className="text-primary relative">
                  Leadership
                  <div className="absolute inset-0 animate-shimmer"></div>
                </span>
              </h2>
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl"></div>
            </div>
            
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow"></div>
            </div>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-montserrat">
              Our leadership team brings together decades of experience, visionary thinking, and unwavering commitment
              to excellence across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className={`group card-hover-effect relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500"></div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full scale-110 group-hover:scale-125 transition-all duration-700 blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full scale-105 group-hover:scale-115 transition-all duration-500"></div>
                    
                    <div className="relative">
                      <Image
                        src={leader.image || "/api/placeholder/150/150"}
                        alt={leader.name}
                        width={150}
                        height={150}
                        className="relative w-36 h-36 rounded-full mx-auto object-cover border-4 border-primary/30 group-hover:border-primary transition-all duration-500 group-hover:scale-105 shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-bodoni group-hover:text-primary transition-colors duration-300 relative">
                      {leader.name}
                      {hoveredCard === index && (
                        <div className="absolute inset-0 animate-shimmer"></div>
                      )}
                    </h3>
                    
                    <div className="relative">
                      <p className="text-primary font-semibold text-lg mb-6 font-montserrat uppercase tracking-wide">
                        {leader.title}
                      </p>
                      <div className="w-12 h-0.5 bg-primary mx-auto opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"></div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-montserrat text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl transition-all duration-500 group-hover:from-primary/20"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/20">
              <p className="text-primary font-semibold font-montserrat">
                Leading with Vision • Delivering Excellence • Inspiring Growth
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}