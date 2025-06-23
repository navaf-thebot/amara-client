'use client';

import React from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};


const AboutUs = () => {
  const router = useRouter();
  const t = useTranslations('AboutUsSection');
  const sections = ['our-story', 'values-culture', 'governance', 'leadership', 'csr'] as const;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-1, 1], ['-5deg', '5deg']);
  const rotateY = useTransform(x, [-1, 1], ['5deg', '-5deg']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative min-h-screen bg-[#f0efe2] dark:bg-[#232323] text-[#232323] dark:text-[#f0efe2] overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(198, 163, 93, 0.1) 1px, rgba(198, 163, 93, 0.1) 2px),
            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(198, 163, 93, 0.1) 1px, rgba(198, 163, 93, 0.1) 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      <motion.section
        className="relative min-h-screen flex items-center justify-center p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto"
          style={{
            perspective: '1000px', 
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transition: 'transform 0.1s ease-out' }}
          >
            <motion.div variants={itemVariants} className="relative mb-8">
              <h1 className="font-bodoni text-6xl md:text-8xl font-bold bg-gradient-to-br from-[#c6a35d] via-[#232323] dark:via-[#f0efe2] to-[#c6a35d] bg-clip-text text-transparent leading-tight">
                {t('title')}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="relative mb-12 p-8 rounded-3xl bg-white/60 dark:bg-black/40 backdrop-blur-lg border border-[#c6a35d]/20 shadow-xl">
              <p className="font-montserrat text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-[#232323] dark:text-[#f0efe2]">
                {t('description')}
              </p>
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-3 border-t-3 border-[#c6a35d] rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-3 border-b-3 border-[#c6a3s3d] rounded-br-lg" />
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-6">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => router.push(`/about/${section}`)}
                  className="font-montserrat cursor-pointer group relative px-8 py-4 capitalize text-base font-semibold text-[#232323] dark:text-[#f0efe2] overflow-hidden"
                  style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-white/60 dark:bg-black/30" style={{ clipPath: 'inherit' }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c6a35d] to-[#b8954f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out origin-left" style={{ clipPath: 'inherit' }} />
                  <span className="relative z-10 transition-colors duration-400 group-hover:text-white">{t(`buttons.${section}`)}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center">
            <div className="w-7 h-10 border-2 border-[#c6a35d]/60 rounded-full relative mb-2">
              <motion.div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-[#c6a35d] rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="text-[#c6a35d]/80 text-xs font-montserrat tracking-wider">SCROLL</div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;