const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    fileName: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
