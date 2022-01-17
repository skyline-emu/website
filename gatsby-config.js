module.exports = {
    siteMetadata: {
      // siteUrl: "",
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
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          icon: "src/images/IMG_6753.jpg",
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
    ],
  };
  