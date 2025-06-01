module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        main_color: '#16a34a',      // emerald-600
        sub_color: '#84cc16',       // lime-500
        error: '#f43f5e',           // rose-400
        text_primary: '#1e293b',    // slate-800
        text_secondary: '#6b7280'   // slate-500
      }      
    },
  },
  plugins: [],
};
