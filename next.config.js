// next.config.js

// 1) import the MDX wrapper
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // …all the other settings you already had…

  // 2) tell Next to treat .md/.mdx as pages
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

// 3) wrap and export
module.exports = withMDX(nextConfig);
