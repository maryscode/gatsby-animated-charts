const path = require("path");

// const fs = require("fs-extra");
// exports.onPostBuild = () => {
//   console.log(`onPostBuild Copying ./public to ./server/public and removing ./public`)
//   fs.copySync(path.join(__dirname, "public"), path.join(__dirname, "./server/public"),{ overwrite: true })
//   fs.rmSync('./public', { recursive: true, force: true });
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//           parent {
//             ... on File {
//               id
//               name
//             }
//           }
//         }
//       }
//     }
//   `);

//   // data.allMdx.nodes.forEach((node) => {
//   //   actions.createPage({
//   //     path: node.parent.name,
//   //     component: path.resolve("./src/templates/pages.js"),
//   //     context: { slug: node.frontmatter.slug },
//   //   });
//   // });
// };

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /ScrollMagic/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
