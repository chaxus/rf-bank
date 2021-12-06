/*
 * @Author: rzh
 * @Date: 2021-10-04 15:53:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-06 15:44:55
 * @Description: Do not edit
 */
import resolve from 'rollup-plugin-node-resolve';
// import polyfills from 'rollup-plugin-polyfill-node';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default [
  {
    input: './main.js',
    output: {
      name: '',
      file: 'bundle.js',
      format: 'umd',
      sourcemap: true,
      banner: '/*eslint-disable*/',
    },
    plugins: [
      resolve({
        browser: true,
      }), // 这样 Rollup 能找到 `ms`
      // polyfills(),
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['main.js'],
        exclude: ['node_modules/**'],
      }),
      babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件
        runtimeHelpers: true, // 使plugin-transform-runtime生效
      }),
      // terser()
    ],
  },
];
