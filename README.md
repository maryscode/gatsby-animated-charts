<h1 align="center">
  AREA 23 GatsbyJS Framework
</h1>

## 🚀 Quick start

1.  **Info**

    - Gatsby CLI version: ***5.0.0***
    - Gatsby version: ***5.2.0***
    - Node version: ***v18.0.0***
    - NPM version: ***8.6.0***
    - Yarn version: ***1.22.19***

<br>

2.  **Commands.**

    Navigate into your new site’s directory and setup.

    ```shell
    // Install dependencies 
    npm install
    
    // Needed for storybook
    yarn install

    // Start development (also clears gatsby cache)
    npm run start || yarn develop

    // Compile for production in public/
    npm run build || yarn build

    // Serve public/ files
    npm run serve || yarn serve

    // Start storybook
    npm run storybook || yarn storybook
    ```


<br>

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

    ***Styling***

    Most of the CSS is located in /components/
    - Theme.js has your color variables
    - Project supports and uses SASS: component specific CSS is usually in each component using styled-components  (https://styled-components.com/)

    ***Navigation***
    - Mobile navigation breakpoint: max-width: 768px
    - Anchor link scroll offset: 
        1. Offset is set gatsby-config.js > gatsby-plugin-anchor-links offset > offset. 
        2. Offset must match offset number in src/components/Layout.js around line 23: `const sectionTop`


<br>

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
