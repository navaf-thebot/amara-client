'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  format?: 'default' | 'short';
  suffix?: string;
}

function formatNumber(value: number, format: 'default' | 'short') {
  if (format === 'short') {
    if (value >= 1_000_000) return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (value >= 1_000) return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return Math.floor(value).toLocaleString();
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  format = 'default',
  suffix = '',
}) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        const formatted = formatNumber(latest, format);
        setDisplay(`${formatted}${suffix}`);
      },
    });

    return controls.stop;
  }, [end, duration, format, suffix, count]);

  return <motion.span>{display}</motion.span>;
};

export default CountUp;
