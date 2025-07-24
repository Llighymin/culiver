/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'green-whale': '#4CAF50', // 메인 강조 초록색
        'primary-blue': '#00427A', // 메인 Primary 파란색
      },
    },
  },
  plugins: [],
};
