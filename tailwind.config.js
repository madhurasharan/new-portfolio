/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0f172a',
          primary: '#38bdf8',
          accent: '#22c55e',
          surface: '#111c34',
          muted: '#94a3b8',
          border: 'rgba(148, 163, 184, 0.18)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.18), 0 20px 60px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        radial:
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 35%), radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.12), transparent 25%)',
      },
    },
  },
  plugins: [],
};
