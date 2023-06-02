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
    resolve(),
    commonjs(),
    babel({ 
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"]
    }),
  ]
};