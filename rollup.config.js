import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import cleanup from "rollup-plugin-cleanup";
import dts from "rollup-plugin-dts";


export default [{
  input: ".build/index.d.ts",
  output: {
    file: "index.d.ts",
    format: "es",
    exports: "auto"
  },
  plugins: [dts()]
}, {
  input: ".build/index.js",
  output: {
    file: "index.js",
    format: "cjs",
    exports: "auto"
  },
  plugins: [resolve(), commonjs(), cleanup({comments: "none"})]
}, {
  input: ".build/index.js",
  output: {
    file: "index.mjs",
    format: "es",
    exports: "auto"
  },
  plugins: [resolve(), commonjs(), cleanup({comments: "none"})]
}];
