'use client';

import { useTranslations } from 'next-intl';

export default function TestPage() {
  const t = useTranslations('TestPage');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#c6a35d] mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('description')}
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
          <h2 className="text-xl font-semibold mb-4">{t('status.title')}</h2>
          <p className="text-muted-foreground">{t('status.message')}</p>
        </div>
      </div>
    </div>
  );
}