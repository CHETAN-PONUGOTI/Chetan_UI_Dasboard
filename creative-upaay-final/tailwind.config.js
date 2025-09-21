/** @type {import('tailwindcss').Config} */
export default {
  // This content array tells Tailwind to scan these files for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#5030E5',
        'brand-purple-light': '#F5F3FF',
        'neutral-gray-s': '#787486',
        'neutral-gray-h': '#0D062D',
        'neutral-gray-bg': '#F5F5F5',
        'status-red': '#D8727D',
        'status-orange': '#FFA500',
        'status-green': '#8BC48A',
        'card-red-bg': '#F9E3E5',
        'card-orange-bg': '#FFF2DE',
        'card-green-bg': '#EBF9EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [],
}
