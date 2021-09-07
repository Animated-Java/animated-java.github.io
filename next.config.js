const withAntdLess = require("next-plugin-antd-less");
// const withImages = require("next-images");
const withSvgr = require("next-plugin-svgr");
const withMDX = require("@next/mdx")();
module.exports = withMDX(
  withSvgr(
        withAntdLess({
          inlineImageLimit: 16384,
          fileExtensions: ["png"],
          lessVarsFilePath: "./styles/global.less",
          cssLoaderOptions: {},
          async redirects() {
            return [
              // {
              //   source: "/docs",
              //   destination: "/docs/home",
              //   permanent: true,
              // },
              // {
              //   source: "/discord",
              //   destination: "https://discord.gg/kpGqTDX",
              //   permanent: true,
              // },
            ];
          },
        })
  )
);
