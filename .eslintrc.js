/*
 * @Author: your name
 * @Date: 2021-12-06 16:14:56
 * @LastEditTime: 2021-12-06 16:46:35
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /event/flibrary/.eslintrc.js
 */

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'ENV': true
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'linebreak-style': [
          'error',
          'unix'
        ],
        'quotes': [
          'error',
          'single'
        ]
    }
};
