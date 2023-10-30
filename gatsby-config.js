const { createProxyMiddleware } = require("http-proxy-middleware"); // local development should proxy /api/signup requests to a local development server, either node or Docker, see README.md in the project root for info on spinning up the local dev server

if (process.env.NODE_ENV == "development") {
  require("dotenv").config({
    path: `.env`,
  })
}

console.log(`******\n\t gatsby-config, process.env.NODE_ENV = ${process.env.NODE_ENV}, process.env.GATSBY_API_ENDPOINT = ${process.env.GATSBY_API_ENDPOINT}`);

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const siteUrl = process.env.URL || `https://rethinkbronchiectasis.com`
module.exports = {
  developMiddleware: app => {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:8080",
        changeOrigin: true,
      })
    )
  },
  siteMetadata: {
    author: "suneil.bansi@area23hc.com",
    description: "AREA 23 GatsbyJS Framework",
    siteUrl: "https://rethinkbronchiectasis.com",
    title: "AREA 23 GatsbyJS",
    image: "images/icon.png",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ['/internal-server-error', '/page-not-found', '/site-map', '/accessibility-statement'],
        resolveSiteUrl: () => siteUrl,        
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: '2023-05-18',
            changefreq: 'daily',
            priority: 1.0,
          }
        },
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-htaccess",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 10, // Scroll duration in milliseconds
        offset: -100, // Scroll offset in pixels
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Nunito`,
            file: `https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap`,
          },
          {
            name: `Nunito Sans`,
            file: `https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;1,100;1,300;1,400;1,600;1,700;1,800&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/content/pages/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.rethinkbronchiectasis.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        defaultDataLayer: function () {
          return [];
        },
        id: "GTM-KWLL5KL",
        includeInDevelopment: true,
        routeChangeEventName: "gatsby-route-change",
      },
    },   
  ],
};