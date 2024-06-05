// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Rumor/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: { min: '320px', max: '639px' },
   

      md: { min: '640px', max: '767px' },
     

      lg: { min: '768px', max: '1023px' },
   

      xl: { min: '1024px', max: '1279px' },
      

      xxl: { min: '1280px', max: '1599px' },
      xxxl: { min: '1600px' },
    },
    extend: {
      colors: {
        customYellow: '#FFB800',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
};
