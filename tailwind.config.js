/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {},
  },
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  }, 
}
