/*
 * @Author: rzh
 * @Date: 2021-10-04 15:53:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-14 17:41:28
 * @Description: Do not edit
 */
import resolve from 'rollup-plugin-node-resolve';
// import polyfills from 'rollup-plugin-polyfill-node';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
// import { eslint } from 'rollup-plugin-eslint';

export default [
  {
    input: './main.js',
    output: {
      name: 'rf-bank',
      file: 'bundle.js',
      format: 'umd',
      sourcemap: true,
      banner: '/*eslint-disable*/',
      
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
      //   runtimeHelpers: true, // 使plugin-transform-runtime生效
      // }),
      babel({
        runtimeHelpers: true,
      }),
      // polyfills(),
      commonjs(),
      resolve({
        browser: true,
      }),
      terser()
    ],
  },
];
