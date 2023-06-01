import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
	input: "src/Select.jsx",
	output: {
		file: "dist/index.js",
    name: "bundle",
		format: "esm"
	},
  plugins: [
    commonjs(),
    babel({ 
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"]
    }),
  ]
};