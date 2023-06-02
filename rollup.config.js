import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    name: "bundle",
    format: "esm"
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ 
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/env", "@babel/preset-react"]
    }),
  ]
};