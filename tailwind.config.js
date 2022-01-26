module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        raspberry: '#d90077',
        deepblue: '#0052ff',
        nice_gray: '#e5e7eb',
      },
    },
    borderRadius: {
      half: '50%',
    },
  },
  plugins: [],
};
