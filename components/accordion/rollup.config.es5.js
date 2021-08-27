import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import css from "rollup-plugin-import-css";
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';


export default {
  input: 'src/index.js',
  output: { file: "dist/index.es5.js", format: "iife" },
  moduleContext: {
    // whatwg-fetch angers Rollup due to ancient use of 'this'.
    // This fix is not essential to function. It removes a warning during the build process.
    // https://rollupjs.org/guide/en/#error-this-is-undefined
    [path.resolve('./node_modules/whatwg-fetch/fetch.js')]: 'window'
  },
  plugins: [
    css(),
    resolve({
      browser: true
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/@babel/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: '> 1%'
            }
          }
        ]
      ]
    })
  ]
};

// , terser()