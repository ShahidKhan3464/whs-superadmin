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
        green: '#027A48',
        danger: '#D81919',
        blue200: '#BDE9FA',
        blue600: '#0B8CBE',
        gray100: '#EEF2F6',
        gray200: '#E3E8EF',
        gray400: '#9AA4B2',
        gray500: '#697586',
        gray600: '#4B5565',
        gray700: '#364152',
        darkGray: '#667085',
        lightGreen: '#ECFDF3',
        lightBlack: '#344054'
      }
    }
  },
  plugins: []
};
