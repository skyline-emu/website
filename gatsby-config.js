module.exports = {
    siteMetadata: {
      siteUrl: "https://skyline-emu.one/",
      title: "Skyline - Open Source Emulator",
      description: "Skyline is an open source Nintendo Switch Emulator.",
      author: "Put authors here later",
    },
    plugins: [
      "gatsby-plugin-image",
      {
        resolve: "gatsby-plugin-postcss",
        options: {
          postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
        }
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-netlify",
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          icon: "src/images/logo.png",
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "./src/images/",
        },
        __key: "images",
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: "./src/pages/",
        },
        __key: "pages",
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          configFile: 'robots-txt.config.js'
        }
      }
    ],
  };
  