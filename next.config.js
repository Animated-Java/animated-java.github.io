// const withAntdLess = require("next-plugin-antd-less");
// const withImages = require("next-images");
const withSvgr = require("next-plugin-svgr");
const withMDX = require("@next/mdx")();
module.exports = withMDX(
  withSvgr({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    async redirects() {
      return [
        {
          source: "/animated_java.js",
          destination:
            "https://github.com/Animated-Java/animated-java/releases/latest/download/animated_java.js",
          permanent: true,
        },
        {
          source: "/discord",
          destination: "https://discord.com/invite/jFgY4PXZfp",
          permanent: true,
        },
      ];
    },
  })
);
