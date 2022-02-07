module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
    extend: {
      spacing: {
        '10': '2.5rem',
        'landingImg': "32rem"
      },
      maxWidth: {
        "page": "80rem",
        "4.5xl": "60rem"
      },
      colors: {
        'colorPrimary': '#FF1E58F0',
        'logoBackground': '#121212'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  future: {
    purgeLayersByDefault: true,
  }
}
