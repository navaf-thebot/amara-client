import {defineRouting} from 'next-intl/routing';
export const locales = ['en', 'fr','hi'] as const;
export const routing = defineRouting({
  locales: ['en', 'fr','hi'],
 
  defaultLocale: 'en'
});