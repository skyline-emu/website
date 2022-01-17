module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class' or false
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    // minHeight: {
    //   '0': '0',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '82vh',
    //   'full': '100%',
    //  },
    // extend: {
    //   width:{
    //     "68" : "17rem",
    //   },
    //   maxWidth:{
    //     "8xl" : "88rem",
    //     "card" :" 43rem"
    //   },
    //   backgroundImage: (theme) => ({
    //     check: "url('/icons/check.svg')",
    //     landscape: "url('/images/landscape/2.jpg')",
    //   }),
    // },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
 }
