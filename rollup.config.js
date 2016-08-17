'use strict';

import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry: 'src/index.js',
    plugins: [
        replace({
            'process.env.NODE_ENV' : JSON.stringify('production')
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        nodeResolve({
            // use "module" field for ES6 module if possible
            module: true, // Default: true

            // use "jsnext:main" if possible
            // – see https://github.com/rollup/rollup/wiki/jsnext:main
            jsnext: true,  // Default: false

            // use "main" field or index.js, even if it's not an ES6 module
            // (needs to be converted from CommonJS to ES6
            // – see https://github.com/rollup/rollup-plugin-commonjs
            main: true,  // Default: true

            // some package.json files have a `browser` field which
            // specifies alternative files to load for people bundling
            // for the browser. If that's you, use this option, otherwise
            // pkg.browser will be ignored
            browser: true,  // Default: false

            // not all files you want to resolve are .js files
            extensions: [ '.js' ],  // Default: ['.js']

            // whether to prefer built-in modules (e.g. `fs`, `path`) or
            // local ones with the same names
            preferBuiltins: true  // Default: true

        }),
        commonjs({
            namedExports : {
                'node_modules/react/react.js' : ['Component', 'Children', 'createElement', 'PropTypes'],
                'node_modules/react-dom/index.js' : ['render'],
                'node_modules/redux-observable/lib/index.js' : ['combineEpics', 'createEpicMiddleware']
            }

        }),
        uglify({}, minify)
    ],
    format: 'iife'
};