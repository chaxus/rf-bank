/*
 * @Author: rzh
 * @Date: 2021-10-04 15:53:17
 * @LastEditors: ran
 * @LastEditTime: 2022-05-09 18:39:44
 * @Description: Do not edit
 */
// import resolve from 'rollup-plugin-node-resolve';
// import polyfills from 'rollup-plugin-polyfill-node';
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
// import { terser } from 'rollup-plugin-terser';
import ts from "rollup-plugin-typescript2";
import * as path from "path";

const extensions = [".js", ".ts", ".tsx"];
export default [
  {
    input: "./main.ts",
    output: {
      name: "rfarcel",
      file: "dist/bundle.js",
      format: "umd",
      sourcemap: true,
      banner: "/*eslint-disable*/",
    },
    plugins: [
      // resolve({
      //   browser: true,
      // }), // 这样 Rollup 能找到 `ms`
      //   eslint({
      //     throwOnError: true,
      //     throwOnWarning: true,
      //     include: ['main.js', 'draw.js'],
      //     exclude: ['node_modules/**'],
      //   }),
      // babel({
      //   exclude: 'node_modules/**', // 防止打包node_modules下的文件
      //     babelHelpers: 'runtime', // 使plugin-transform-runtime生效
      // }),
      ts({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        extensions,
      }),
      commonjs(),
      babel({ babelHelpers: "bundled" }),
      // resolve({
      //   browser: true,
      // }),
      // terser()
    ],
  },
];
