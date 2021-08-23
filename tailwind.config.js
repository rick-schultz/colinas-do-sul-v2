module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        grass: "url('/src/assets/images/bg-gramado-mob.png')",
        'grass-big': "url('/src/assets/images/bg-gramado.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
