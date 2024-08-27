/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  screens: {
    sm: '520px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  theme: {
    extend: {
      colors: {
        blue200: '#BDE9FA',
        blue600: '#0B8CBE',
        gray500: '#697586',
        gray600: '#4B5565',
        gray700: '#364152'
      }
    }
  },
  plugins: []
};
